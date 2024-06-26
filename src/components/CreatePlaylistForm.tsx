import { useState } from 'react';
import { saveToStorage, checkPlaylistInStorage, createPlaylistInStorage } from '../api/api';

const CreatePlaylistForm = ({ playlists, setPlaylists }) => {
  const [playlistName, setPlaylistName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlaylist = {
      name: playlistName,
      data: [],
    };
    const result = saveToStorage(playlists);
    setPlaylists(result);
    console.log(playlists);
    setPlaylistName('');
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
