import { FC, Dispatch, SetStateAction } from 'react';
import { type Playlist } from '../types/types';

type DeletePlaylistProps = {
  playlist: Playlist;
  deletePlaylist: (playlist: Playlist) => void;
  closeModal: Dispatch<SetStateAction<boolean>>;
};

const DeletePlaylist: FC<DeletePlaylistProps> = ({ playlist, deletePlaylist, closeModal }) => {
  return (
    <div className='relative p-4'>
      <div className='flex items-center justify-between py-3 md:py-2 border-b rounded-t dark:border-gray-700'>
        <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>Delete Playlist?</h3>
      </div>
      <p className='text-lg text-gray-800 dark:text-white m-2'>
        Are you sure you want to delete this playlist?
      </p>
      <button
        className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
        onClick={() => {
          closeModal(false);
          deletePlaylist(playlist);
        }}
      >
        Delete
      </button>
      <button
        className='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'
        onClick={() => closeModal(false)}
      >
        Cancel
      </button>
    </div>
  );
};

export default DeletePlaylist;
