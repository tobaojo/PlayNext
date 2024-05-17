import { useLoaderData } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { getGamesNews } from '../api/api';

export async function loader() {
  const news = await getGamesNews();
  return { news };
}

const Articles = () => {
  const { news } = useLoaderData();

  return <HeroSection news={news} />;
};

export default Articles;
