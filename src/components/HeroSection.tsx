import { type ComponentProps } from '../types/types';
import { Link } from 'react-router-dom';

const HeroSection = ({ news }: ComponentProps) => {
  const firstArticle = news[Math.floor(Math.random() * 50)];
  const otherArticles = news.slice(1, 5);
  return (
    <>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center space-y-6 p-2 md:flex-row md:space-x-9 md:p-0'>
          <div className='bg-slate-600 pb-5  md:w-3/5 rounded-xl'>
            <Link to={`article/${firstArticle.id}`}>
              <img
                src={firstArticle?.main_image}
                alt={firstArticle?.main_image}
                className='rounded-xl transform transition-transform duration-500 hover:scale-105 hover:cursor-pointer'
              />
              <p className='p-5 text-slate-200 font-bold hover:decoration-solid hover:cursor-pointer'>
                {firstArticle?.short_description}
              </p>
            </Link>
          </div>
          <div className='flex flex-col m-3 md:grid md:grid-cols-2 md:gap-4 md:w-2/5'>
            {otherArticles.map((article) => (
              <Link to={`article/${article.id}`} key={article.id}>
                <div className='bg-slate-600 pb-5 rounded-xl mt-4 items-center'>
                  <img
                    src={article?.main_image}
                    alt=''
                    className='rounded-xl transform transition-transform duration-500 hover:scale-105 hover:cursor-pointer'
                  />
                  <p className='p-5 text-slate-200 font-bold hover:underline hover:decoration-solid hover:cursor-pointer'>
                    {article?.short_description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
