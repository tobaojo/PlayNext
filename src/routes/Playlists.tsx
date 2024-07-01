import ModalElement from '../components/Modal';
import CreatePlaylistForm from '../components/CreatePlaylistForm';
import PlaylistCard from '../components/PlaylistCard';
import { checkPlaylistInStorage } from '../api/api';
import { useState } from 'react';
import { Playlist } from '../types/types';

const Playlists = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>(checkPlaylistInStorage());

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  return (
    <div className='container mx-auto'>
      <p>View and manage your playlists</p>
      <button
        onClick={openModal}
        className='text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
      >
        Create
      </button>
      <div className='flex flex-col space-y-6 items-center md:grid md:grid-cols-3 md:gap-2 md:divide-y-0 md:p-1 md:items-baseline'>
        {playlists.length > 0 ? (
          playlists.map((playlist) => {
            return <PlaylistCard key={playlist.id} playlist={playlist} />;
          })
        ) : (
          <p>No Playlists, Please create one</p>
        )}
      </div>
      <ModalElement setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen}>
        <div>
          <button onClick={closeModal}>Close</button>
          <CreatePlaylistForm setPlaylists={setPlaylists} onClose={closeModal} />
        </div>
      </ModalElement>
    </div>
  );
};

export default Playlists;
