import { useState, FC, Dispatch, SetStateAction } from 'react';
import { saveToStorage } from '../api/api';
import { Playlist } from '../types/types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type CreatePlaylistFormProps = {
  setPlaylists: React.Dispatch<React.SetStateAction<Playlist[]>>;
  closeModal: Dispatch<SetStateAction<boolean>>;
};

const CreatePlaylistForm: FC<CreatePlaylistFormProps> = ({ setPlaylists, closeModal }) => {
  const [playlistName, setPlaylistName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!playlistName || playlistName.trim() === '') {
      toast.warn('Please name playlist', { autoClose: 1500 });
      return;
    }
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
    toast.success('Playlist created', { autoClose: 1000 });
    closeModal(false);
  };

  return (
    <>
      <div className='relative p-4'>
        <div className='flex items-center justify-between py-3 md:py-2 border-b rounded-t dark:border-gray-700'>
          <h2 className='text-xl font-semibold text-gray-900 dark:text-white'>Create A Playlist</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name' className='text-lg text-gray-800 dark:text-white my-2'>
            Playlist Name
            <input
              type='text'
              onChange={(e) => setPlaylistName(e.target.value)}
              placeholder='Playlist name...'
              value={playlistName}
              className='my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
          </label>
          <button
            type='submit'
            className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
          >
            Create
          </button>
          <button
            type='button'
            className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
            onClick={() => closeModal(false)}
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePlaylistForm;
