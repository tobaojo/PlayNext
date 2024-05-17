import { useLoaderData } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { getAllGames } from '../api/api';

export async function loader() {
  const games = await getAllGames();
  console.log(games);
}

const Games = () => {
  return <div>Games</div>;
};

export default Games;
