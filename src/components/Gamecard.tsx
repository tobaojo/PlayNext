import { FC } from 'react';
import { type Game, type Colours } from '../types/types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';

type GamecardProps = {
  game: Game;
  handleClick?: (game: Game) => void;
};

const genreColors: Colours = {
  Shooter: 'bg-red-700',
  Adventure: 'bg-blue-700',
  MMORPG: 'bg-green-700',
  Strategy: 'bg-yellow-700',
  ARPG: 'bg-orange-700',
  MOBA: 'bg-[#9753ea]',
};

const Gamecard: FC<GamecardProps> = ({ game, handleClick }) => {
  const colorGenre = genreColors[game.genre] || 'bg-gray-700';
  return (
    <div key={game.id} className='max-w-sm'>
      <div className='hover:cursor-pointer hover:opacity-80'>
        <Link to={`/game/${game.id}`}>
          <div className='space-y-2'>
            <img src={game.thumbnail} alt='' className='' />
          </div>
        </Link>
        <div className='items-center'>
          <small className={`justify-self-end ${colorGenre} text-white rounded-full px-2 py-0.5`}>
            {game.genre}
          </small>
          <div className='flex justify-between w-11/12'>
            <h4 className='hover:text-red-700'>{game.title}</h4>
            {handleClick && (
              <FontAwesomeIcon
                icon={faHeartCirclePlus}
                onClick={() => handleClick(game)}
                className='text-red-600 hover:text-red-800'
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gamecard;
