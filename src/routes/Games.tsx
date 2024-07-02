import { useLoaderData } from 'react-router-dom';
import { getAllGames } from '../api/api';
import { type Game } from '../types/types';
import GameList from '../components/GameList';
import { useState } from 'react';
import Search from '../components/Search';
import Footer from '../components/Footer';

export async function loader() {
  const games = await getAllGames();
  return { games };
}

const Games = () => {
  const { games } = useLoaderData() as { games: Game[] };
  const [text, setText] = useState('');
  const [searchedGames, setSearchedGames] = useState<Game[]>(games);
  const [selectedGenre, setSelectedGenre] = useState('');

  const genresObj = new Set(games.map((game) => game.genre));
  const genres = [...genresObj];

  const filteredGames = () =>
    games.filter((game) => {
      const titleMatches = game.title
        .toString()
        .toLowerCase()
        .replace(/\([^)]*\)/g, '')
        .trim()
        .includes(text.toLowerCase());

      if (selectedGenre === 'all') {
        return games;
      }

      const genreMatches =
        selectedGenre === '' ||
        game.genre
          .toString()
          .toLowerCase()
          .replace(/\([^)]*\)/g, '')
          .includes(selectedGenre.toLowerCase());

      return titleMatches && genreMatches;
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(e.target.value);
  };

  const handleSelect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const results = filteredGames();
    setSearchedGames(results);
    setSelectedGenre('');
  };

  return (
    <>
      <div className='container mx-auto'>
        <h3>Find your next game here</h3>
        <Search
          text={text}
          handleChange={handleChange}
          genres={genres}
          handleSelect={handleSelect}
          handleGenreChange={handleGenreChange}
        />
        <GameList games={searchedGames} />
      </div>
      <Footer />
    </>
  );
};

export default Games;
