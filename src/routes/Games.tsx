import { useLoaderData } from 'react-router-dom';
import { getAllGames } from '../api/api';
import { type Game } from '../types/types';
import GameList from '../components/GameList';

export async function loader() {
  const games = await getAllGames();
  return { games };
}

const Games = () => {
  const { games } = useLoaderData() as { games: Game[] };
  return <GameList games={games} />;
};

export default Games;
