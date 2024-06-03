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

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    const results = games.filter((game) => games.includes({ ...game, title: text }));
    console.log(results);
    return results;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className='container mx-auto'>
      <Search text={text} handleClick={handleClick} handleChange={handleChange} />
      <h3>Find your next game here</h3>
      <GameList games={games} />
    </div>
  );
};

export default Games;
