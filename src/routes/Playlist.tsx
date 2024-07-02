import { useLocation } from 'react-router-dom';
import { Game } from '../types/types';
import Gamecard from '../components/Gamecard';

const Playlist = () => {
  const location = useLocation();
  const { playlist } = location.state || {};

  return (
    <div className='container mx-auto'>
      <h2>{playlist.name}</h2>
      <p>Games</p>
      <div className='flex flex-col space-y-6 items-center md:grid md:grid-cols-3 md:gap-2 md:divide-y-0 md:p-1 md:items-baseline'>
        {playlist &&
          playlist?.data.map((game: Game) => {
            return <Gamecard key={game.id} game={game} />;
          })}
      </div>
    </div>
  );
};

export default Playlist;
