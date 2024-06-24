import { type ComponentProps, type Colours } from '../types/types';
import { Link } from 'react-router-dom';

const genreColors: Colours = {
  Shooter: 'bg-red-700',
  Adventure: 'bg-blue-700',
  MMORPG: 'bg-green-700',
  Strategy: 'bg-yellow-700',
  ARPG: 'bg-orange-700',
  MOBA: 'bg-[#9753ea]',

  // Add more genres and their corresponding colors here
};

const GameList = ({ games }: ComponentProps) => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col space-y-6 items-center md:grid md:grid-cols-3 md:gap-2 md:divide-y-0 md:p-1 md:items-baseline'>
        {games ? (
          games.map((game) => {
            const colorGenre = genreColors[game.genre] || 'bg-gray-700';
            return (
              <Link to={`/${game.id}`} key={game.id}>
                <div className='hover:cursor-pointer'>
                  <div className='space-y-2'>
                    <img src={game.thumbnail} alt='' className='' />
                  </div>
                  <div className='items-center'>
                    <small
                      className={`justify-self-end ${colorGenre} text-white rounded-full px-2 py-0.5`}
                    >
                      {game.genre}
                    </small>
                    <h4>{game.title}</h4>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <p>Could not load games</p>
        )}
      </div>
    </div>
  );
};

export default GameList;
