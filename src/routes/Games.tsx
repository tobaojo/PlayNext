import { useLoaderData } from 'react-router-dom';
import { getAllGames } from '../api/api';

export async function loader() {
  const games = await getAllGames();
  return { games };
}

const Games = () => {
  const { games } = useLoaderData();
  console.log(games);
  return <div>Games</div>;
};

export default Games;
