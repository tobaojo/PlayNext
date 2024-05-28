import { Link } from 'react-router-dom';
import { type ComponentProps } from '../types/types';

const OtherArticles = ({ news }: ComponentProps) => {
  return (
    <div className='container mx-auto'>
      <h3 className='font-bold text-2xl border-t-2 mt-9 border-slate-400'>Other Articles</h3>
      <div className='flex flex-col divide-y-6 divide-slate-200 md:grid md:grid-cols-4'>
        {news &&
          news.map((article) => (
            <Link to={`article/${article.id}`}>
              <div className='m-2 items-center hover:cursor-pointer'>
                <img src={article.thumbnail} className='w-9/12' />
                <p className='hover:text-red-500'>{article.short_description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default OtherArticles;
