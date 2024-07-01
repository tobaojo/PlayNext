import { FC } from 'react';
import { type News } from '../types/types';
import { Link } from 'react-router-dom';

type HeroSectionProps = {
  news: News[];
};

const HeroSection: FC<HeroSectionProps> = ({ news }) => {
  if (!news) {
    return <div>Could not load articles</div>;
  }
  const firstArticle = news[Math.floor(Math.random() * 50)];
  const otherArticles = news.slice(1, 5);
  return (
    <>
      <div className='container mx-auto p-5 md:p-1'>
        <div className='flex flex-col items-center md:flex-row md:p-0'>
          <div className='relative md:w-6/12'>
            <Link to={`article/${firstArticle.id}`}>
              <img
                src={firstArticle?.main_image}
                alt={firstArticle?.main_image}
                className='hover:cursor-pointer hover:opacity-90'
              />
              <div className='absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2'>
                <p className='p-5 text-slate-200 font-bold hover:decoration-solid hover:cursor-pointer'>
                  {firstArticle?.short_description}
                </p>
              </div>
            </Link>
          </div>

          <div className='flex flex-col space-y-2 m-1 md:grid md:grid-cols-2 md:gap-2 md:space-y-0 md:w-6/12'>
            {otherArticles.map((article) => (
              <div className='relative' key={article.id}>
                <Link to={`article/${article.id}`}>
                  <img
                    src={article?.main_image}
                    alt=''
                    className='hover:cursor-pointer hover:opacity-90'
                  />
                  <div className='absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2'>
                    <p className='p-1 text-slate-200 font-bold hover:underline hover:decoration-solid hover:cursor-pointer'>
                      {article?.short_description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
