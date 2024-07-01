import { useLocation } from 'react-router-dom';
import { Game } from '../types/types';

const Playlist = () => {
  const location = useLocation();
  const { playlist } = location.state || {};

  console.log(playlist);
  return (
    <>
      <h2>{playlist.name}</h2>
      <p>Games</p>
      <ul>
        {playlist &&
          playlist?.data.map((game: Game[]) => {
            return <li key={game?.id}>{game?.title}</li>;
          })}
      </ul>
    </>
  );
};

export default Playlist;
