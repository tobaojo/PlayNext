import { Link, useLoaderData } from 'react-router-dom';
import { getSingleGame, getAllGames } from '../api/api';
import { type Game } from '../types/types';

export async function loader({ params }: { params: { gameId: string } }) {
  const games = await getAllGames();
  if (typeof games === 'string') {
    console.log(games);
    return;
  } else {
    const singleGame = await getSingleGame(parseInt(params.gameId));
    console.log(singleGame);
    return { singleGame };
  }
}

const Game = () => {
  const { singleGame } = useLoaderData() as { singleGame: Game };
  console.log(singleGame);
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col space-y-8'>
        <div className='flex  p-2 border-slate-400 space-x-5'>
          <div>
            <img className='my-1 ' src={singleGame.thumbnail} alt='' />
            <Link
              to={singleGame.game_url}
              target='_blank'
              className='flex border rounded-xl border-red-600 bg-red-500 p-3'
            >
              <p className='text-white font-bold mr-auto'>Play Now</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6 text-white'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9'
                />
              </svg>
            </Link>
          </div>
          <div className='w-3/5'>
            <h3 className='font-bold text-5xl'>{singleGame.title}</h3>
            <p className='italic mb-3'>{singleGame.short_description}</p>
            <div className='flex space-x-1'>
              <p className='text-red-700'>{singleGame.developer}</p>
              <span>•</span>
              <p className='text-red-700'>{singleGame.genre}</p>
            </div>
          </div>
        </div>
        <p>{singleGame?.description}</p>
      </div>

      <div>
        <h4>screenshots</h4>
        <div className='flex'>
          {singleGame.screenshots?.map((screenshot) => {
            return (
              <img
                className='flex flex-col m-5 items-center'
                src={screenshot.image}
                key={screenshot.id}
              ></img>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Game;
// doctor@topmedicalpractice.co.uk
// doctor@topmedicalpractice.co.uk
