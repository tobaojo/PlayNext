import { checkPlaylistInStorage, saveToStorage } from '../api/api';
import { useState, FC, Dispatch, SetStateAction } from 'react';
import { Game, Playlist } from '../types/types';

type GameToAddProps = {
  game: Game;
  closeModal: Dispatch<SetStateAction<boolean>>;
};

const GameToAdd: FC<GameToAddProps> = ({ game, closeModal }) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(null);
  const [playlists, setPlaylists] = useState(checkPlaylistInStorage());

  const addToPlaylist = (game: Game) => {
    if (!selectedPlaylist) {
      console.log('please select a playlist');
      return;
    }

    if (selectedPlaylist.data.some((item) => item.title === game.title)) {
      console.log('game already in playlist');
      return;
    }
    const updatedData = [...selectedPlaylist.data, game];
    const updatedPlaylist = { ...selectedPlaylist, data: updatedData };

    setPlaylists((prevPlaylists: Playlist[]) => {
      const updatedPlaylists = prevPlaylists.map((playlist) =>
        playlist.id === selectedPlaylist.id ? updatedPlaylist : playlist,
      );
      setPlaylists(updatedPlaylists);
      saveToStorage(updatedPlaylists);
      return updatedPlaylists;
    });
    closeModal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const foundPlaylist = playlists.find((playlist) => playlist.name === e.target.value);
    setSelectedPlaylist(foundPlaylist || null);
  };

  return (
    <div>
      <h5>{game && game.title}</h5>
      <h3>Add to playlist</h3>
      <select name='playlists' id='' onChange={handleChange} value={selectedPlaylist?.name || ''}>
        <option value=''>Select a playlist</option>
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
