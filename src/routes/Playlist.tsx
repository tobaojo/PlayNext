import { useLocation } from 'react-router-dom';
import { Game } from '../types/types';
import { faHeartCircleMinus } from '@fortawesome/free-solid-svg-icons';
import Gamecard from '../components/Gamecard';
import { checkPlaylistInStorage } from '../api/api';
import { type Playlist } from '../types/types';
import { useState } from 'react';

const Playlist = () => {
  const location = useLocation();
  const { playlist } = location.state || {};
  const [playlists, setPlaylists] = useState<Playlist[]>(checkPlaylistInStorage());
  const [playlistState, setPlaylistState] = useState(playlist);

  const handleClick = (game: Game) => {
    if (!game) {
      console.log('please select a game');
      return;
    }

    const updatedPlaylistData = playlistState?.data?.filter((el: Game) => game.id !== el.id);
    console.log(updatedPlaylistData);
  };

  console.log(playlistState);
  return (
    <div className='container mx-auto'>
      <h2>{playlist.name}</h2>
      <p>Games</p>
      <div className='flex flex-col space-y-6 items-center md:grid md:grid-cols-3 md:gap-2 md:divide-y-0 md:p-1 md:items-baseline'>
        {playlistState &&
          playlistState?.data.map((game: Game) => {
            return (
              <Gamecard
                key={game.id}
                game={game}
                iconName={faHeartCircleMinus}
                handleClick={handleClick}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Playlist;
