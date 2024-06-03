import { useLoaderData } from 'react-router-dom';
import { getAllGames } from '../api/api';
import { type Game } from '../types/types';
import GameList from '../components/GameList';
import { SyntheticEvent, useState } from 'react';
import Search from '../components/Search';

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
  console.log(genres);

  const filteredGames = () =>
    games.filter((game) => {
      const titleMatches = game.title
        .toString()
        .toLowerCase()
        .replace(/\([^)]*\)/g, '')
        .trim()
        .includes(text);

      return titleMatches;
    });

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    const results = filteredGames();
    setSearchedGames(results);
    setText('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className='container mx-auto'>
      <h3>Find your next game here</h3>
      <Search text={text} handleClick={handleClick} handleChange={handleChange} genres={genres} />
      <GameList games={searchedGames} />
    </div>
  );
};

export default Games;
