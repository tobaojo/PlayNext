import { gameSchema, newsSchema, type Game, type News } from '../types/types';
import { freeToGameOptions, options } from '../../options.ts';

export async function getAllGames() {
  try {
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games`,
      freeToGameOptions,
    );
    if (!response.ok) {
      throw new Error('Some thing went wrong');
    }
    const rawData: Game[] = await response.json();
    const data = gameSchema.array().safeParse(rawData);
    if (!data.success) {
      console.error(data.error.message);
      throw new Error('failed to parse games');
    }
    return data.data;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'there was a problem';
    return message;
  }
}

export async function getGamesNews() {
  try {
    const response = await fetch('https://mmo-games.p.rapidapi.com/latestnews', options);
    if (!response.ok) {
      throw new Error('Some thing went wrong');
    }
    const rawData: News[] = await response.json();
    const data = newsSchema.array().safeParse(rawData);
    if (!data.success) {
      console.error(data.error.message);
      throw new Error('failed to parse news');
    }
    return data.data;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'there was a problem';
    return message;
  }
}

export async function getSingleGameNews(newsArray: News[], id: number) {
  const singleArticle = newsArray.find((article) => article.id === id);
  return singleArticle;
}

export async function getSingleGame(id: number) {
  try {
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      freeToGameOptions,
    );
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const rawData: Game = await response.json();
    if (!rawData) {
      throw new Error('Cannot parse data');
    }
    return rawData;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'there was a problem';
    return message;
  }
}
export const createPlaylistInStorage = () => {
  return localStorage.setItem('playlists', JSON.stringify([]));
};

export const checkPlaylistInStorage = () => {
  const playlists = localStorage.getItem('playlists');
  return playlists ? JSON.parse(playlists) : null;
};

export const saveToStorage = (item: { name: string; data: Game[] }) => {
  if (!checkPlaylistInStorage()) {
    createPlaylistInStorage();
    const playlist = checkPlaylistInStorage();
    return playlist;
  }
};
