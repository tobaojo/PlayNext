import { gameSchema, newsSchema, type Game, type News } from '../types/types';
import { options } from '../../options.ts';

export async function getAllGames() {
  try {
    const response = await fetch('https://mmo-games.p.rapidapi.com/games', options);
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
