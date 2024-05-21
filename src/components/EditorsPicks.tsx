import { type ComponentProps } from '../types/types';
import { Link } from 'react-router-dom';

const ArticleList = ({ news }: ComponentProps) => {
  console.log(news);
  return (
    <div className='container mx-auto border-t-2 mt-9 p-6 border-slate-400'>
      <h2 className='font-bold text-4xl'>Editor's Picks</h2>
      <div className='flex flex-col divide-y-2 divide-slate-200 items-center space-y-6 md:grid md:grid-cols-2 md:gap-4 md:divide-y-0'>
        {news.map((article) => (
          <Link to={`article/${article.id}`} key={article.id}>
            <div className='flex hover:cursor-pointer items-center ' key={article?.id}>
              <img
                src={article?.thumbnail}
                className='rounded-xl w-2/5 m-4 transform transition-transform duration-500 hover:scale-110'
              />
              <p className='text-slate-900 font-bold w-3/5 text-sm hover:text-red-500 md:text-lg'>
                {article?.short_description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
