import { checkPlaylistInStorage, saveToStorage } from '../api/api';
import { useState, FC, Dispatch, SetStateAction } from 'react';
import ModalElement from '../components/Modal';
import CreatePlaylistForm from '../components/CreatePlaylistForm';
import { Game, Playlist } from '../types/types';
import { toast } from 'react-toastify';

type GameToAddProps = {
  game: Game;
  closeModal: Dispatch<SetStateAction<boolean>>;
};

const GameToAdd: FC<GameToAddProps> = ({ game, closeModal }) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(null);
  const [playlists, setPlaylists] = useState(checkPlaylistInStorage());
  const [createPlaylistModal, setCreatePlaylistModal] = useState(false);

  const addToPlaylist = (game: Game) => {
    // console.log(game);
    if (!selectedPlaylist) {
      toast.warn('Please select a playlist', { autoClose: 1500 });
      return;
    }
    // console.log(selectedPlaylist);
    if (selectedPlaylist.data.some((item) => item.title === game.title)) {
      toast.error(`${game.title} already in ${selectedPlaylist.name}`, { autoClose: 1500 });
      return;
    }
    const updatedData = [...selectedPlaylist.data, game];
    const updatedPlaylist = { ...selectedPlaylist, data: updatedData };
    // console.log(updatedData);
    setPlaylists((prevPlaylists: Playlist[]) => {
      const updatedPlaylists = prevPlaylists.map((playlist) =>
        playlist.id === selectedPlaylist.id ? updatedPlaylist : playlist,
      );
      console.log(updatedPlaylists);
      setPlaylists(updatedPlaylists);
      saveToStorage(updatedPlaylists);

      return updatedPlaylists;
    });

    toast.success(`${game.title} added to ${updatedPlaylist.name}`, { autoClose: 1000 });
    closeModal(false);
  };

  const openCreatePlaylistModal = () => setCreatePlaylistModal(true);

  const closeCreatePlaylistModal = () => setCreatePlaylistModal(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const foundPlaylist = playlists.find((playlist) => playlist.name === e.target.value);
    setSelectedPlaylist(foundPlaylist || null);
  };

  return (
    <>
      <div className='relative p-4 '>
        <div className='flex items-center justify-between py-3 md:py-2 border-b rounded-t dark:border-gray-700'>
          <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
            {game && game.title}
          </h3>
        </div>
        <p className='text-lg text-gray-800 dark:text-white m-2'>
          Add <span className='text-red-600'>{game && game.title}</span> to a playlist:
        </p>
        <select
          className='my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          name='playlists'
          id=''
          onChange={handleChange}
          value={selectedPlaylist?.name || ''}
        >
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
        <button
          className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
          onClick={() => addToPlaylist(game)}
        >
          Add
        </button>
        <button
          className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
          onClick={() => closeModal(false)}
        >
          Cancel
        </button>
        <button
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          onClick={openCreatePlaylistModal}
        >
          Create Playlist
        </button>
      </div>
      {createPlaylistModal && (
        <ModalElement setModalIsOpen={setCreatePlaylistModal} modalIsOpen={createPlaylistModal}>
          <CreatePlaylistForm setPlaylists={setPlaylists} closeModal={closeCreatePlaylistModal} />
        </ModalElement>
      )}
    </>
  );
};

export default GameToAdd;
