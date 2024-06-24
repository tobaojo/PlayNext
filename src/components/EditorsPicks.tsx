import { type ComponentProps } from '../types/types';
import { Link } from 'react-router-dom';

const EditorsPicks = ({ news }: ComponentProps) => {
  const editorsPicks = news?.slice(1, 7);
  return (
    <div className='container mx-auto border-t-2 mt-9 border-slate-400 '>
      <h2 className='font-bold text-4xl px-3'>Editor's Picks</h2>
      <div className='flex flex-col divide-y-6 divide-slate-200 space-y-2 md:grid md:grid-cols-3 md:gap-0 items-baseline'>
        {editorsPicks ? (
          editorsPicks.map((article) => (
            <Link to={`article/${article.id}`} key={article.id}>
              <div
                className='flex flex-col hover:cursor-pointer m-4 items-baseline hover:opacity-90'
                key={article?.id}
              >
                <img src={article?.main_image} className='' />
                <p className='text-slate-900 font-bold text-sm hover:text-red-500 md:text-lg'>
                  {article?.short_description}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p>Could not load news articles</p>
        )}
      </div>
    </div>
  );
};

export default EditorsPicks;
