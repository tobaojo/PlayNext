import { useLoaderData } from 'react-router-dom';
import { getGamesNews } from '../api/api';
import { type News } from '../types/types';
import HeroSection from '../components/HeroSection';
import ArticleList from '../components/EditorsPicks';

export async function loader() {
  const news = await getGamesNews();
  return { news };
}

const Articles = () => {
  const { news } = useLoaderData() as { news: News[] };

  return (
    <>
      <HeroSection news={news} />
      <ArticleList news={news} />
    </>
  );
};

export default Articles;
