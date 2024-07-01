import { FC } from 'react';
import { Link } from 'react-router-dom';
import { type News } from '../types/types';

type OtherArticlesProps = {
  news: News[];
};

const OtherArticles: FC<OtherArticlesProps> = ({ news }) => {
  return (
    <div className='container mx-auto'>
      <h3 className='font-bold text-2xl border-t-2 mt-9 border-slate-400'>Other Articles</h3>
      <div className='flex flex-col items-center divide-y-6 divide-slate-200 md:grid md:grid-cols-4'>
        {news &&
          news.map((article) => (
            <Link to={`article/${article.id}`} key={article.id} className='w-full items- mx-auto'>
              <div className='m-2 hover:cursor-pointer'>
                <img
                  src={article.main_image}
                  className='w-full md:w-9/12 items-center hover:opacity-90'
                />
                <p className='hover:text-red-500 text-left mr-6 text-lg'>
                  {article.short_description}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default OtherArticles;
