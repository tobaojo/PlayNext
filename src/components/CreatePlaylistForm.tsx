import { useState, FC } from 'react';
import { saveToStorage } from '../api/api';
import { Playlist } from '../types/types';

type CreatePlaylistFormProps = {
  setPlaylists: React.Dispatch<React.SetStateAction<Playlist[]>>;
  onClose: () => void;
};

const CreatePlaylistForm: FC<CreatePlaylistFormProps> = ({ setPlaylists, onClose }) => {
  const [playlistName, setPlaylistName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPlaylist: Playlist = {
      id: Math.floor(Math.random() * 10000),
      name: playlistName,
      data: [],
    };

    setPlaylists((prevPlaylists: Playlist[]) => {
      const updatedPlaylists: Playlist[] = [...prevPlaylists, newPlaylist];
      saveToStorage(updatedPlaylists);
      return updatedPlaylists;
    });

    setPlaylistName('');
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a playlist</h2>
      <label htmlFor='name'>
        Playlist Name
        <input
          type='text'
          onChange={(e) => setPlaylistName(e.target.value)}
          placeholder='Playlist name...'
          value={playlistName}
        />
      </label>
      <button type='submit'>Create</button>
    </form>
  );
};

export default CreatePlaylistForm;
