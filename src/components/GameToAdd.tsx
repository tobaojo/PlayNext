import { checkPlaylistInStorage, saveToStorage } from '../api/api';
import { useState } from 'react';
import { Game, ComponentProps } from '../types/types';

const GameToAdd = ({ game }: ComponentProps) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [playlists, setPlaylists] = useState(checkPlaylistInStorage());

  const addToPlaylist = (game: Game) => {
    if (!selectedPlaylist) {
      console.log('please select a playlist');
      return;
    }
    const updatedPlaylist = selectedPlaylist?.data.push(game);

    setPlaylists((prevPlaylists) => {
      const updatedPlaylists = [...prevPlaylists, updatedPlaylist];
      return updatedPlaylists;
    });
    saveToStorage(playlists);
    return;
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const foundPlaylist = playlists.find((playlist) => playlist.name === e.target.value);
    setSelectedPlaylist(foundPlaylist);
  };

  return (
    <div>
      <h5>{game && game.title}</h5>
      <h3>Add to playlist</h3>
      <select name='playlists' id='' onChange={handleChange}>
        {playlists &&
          playlists.map((playlist) => {
            return (
              <option value={playlist.name} key={playlist.id}>
                {playlist.name}
              </option>
            );
          })}
      </select>
      <button onClick={() => addToPlaylist(game)}>Add</button>
    </div>
  );
};

export default GameToAdd;
