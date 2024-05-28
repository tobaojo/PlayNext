import { useLoaderData } from 'react-router-dom';
import { getGamesNews } from '../api/api';
import { type News } from '../types/types';
import HeroSection from '../components/HeroSection';
import EditorsPicks from '../components/EditorsPicks';
import OtherArticles from '../components/OtherArticles';

export async function loader() {
  const news = await getGamesNews();
  return { news };
}

const Articles = () => {
  const { news } = useLoaderData() as { news: News[] };

  return (
    <>
      <HeroSection news={news} />
      <EditorsPicks news={news} />
      <OtherArticles news={news} />
    </>
  );
};

export default Articles;
