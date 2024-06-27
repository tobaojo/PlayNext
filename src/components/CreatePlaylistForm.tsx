import { useState } from 'react';
import { saveToStorage } from '../api/api';
import { Game } from '../types/types';

const CreatePlaylistForm = ({ setPlaylists, onClose }) => {
  const [playlistName, setPlaylistName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newPlaylist: { id: number; name: string; data: Game[] } = {
      id: Math.floor(Math.random() * 10000),
      name: playlistName,
      data: [],
    };
    setPlaylists((prevPlaylists) => {
      const updatedPlaylists: Game[] = [...prevPlaylists, newPlaylist];
      saveToStorage(updatedPlaylists);
      return updatedPlaylists;
    });

    setPlaylistName('');
    onClose();
  };

  return (
    <div>
      <h2>Create a playlist</h2>
      <form>
        <label htmlFor='name'>
          Playlist Name
          <input
            type='text'
            onChange={(e) => setPlaylistName(e.target.value)}
            placeholder='Playlist name...'
            value={playlistName}
          />
        </label>
        <input type='submit' value='Create' onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default CreatePlaylistForm;
