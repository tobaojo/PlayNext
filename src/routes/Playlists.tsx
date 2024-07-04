import ModalElement from '../components/Modal';
import CreatePlaylistForm from '../components/CreatePlaylistForm';
import PlaylistCard from '../components/PlaylistCard';
import DeletePlaylist from '../components/DeletePlaylist';
import { checkPlaylistInStorage, saveToStorage } from '../api/api';
import { useState } from 'react';
import { Playlist } from '../types/types';

const Playlists = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>(checkPlaylistInStorage());
  const [delelteModal, setDeleteModal] = useState(false);
  const [playlistToDelete, setPlaylistToDelete] = useState<Playlist | null>(null);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  const openDeleteModal = (playlist: Playlist) => {
    setPlaylistToDelete(playlist);
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setPlaylistToDelete(null);
    setDeleteModal(false);
  };

  const checkAndDeletePlaylist = (playlist: Playlist) => {
    if (playlist.data.length > 0) {
      openDeleteModal(playlist);
      return;
    }
    deletePlaylist(playlist);
  };

  const deletePlaylist = (deletedPlaylist: Playlist) => {
    const filteredPlaylist = playlists.filter((playlist) => playlist.id !== deletedPlaylist.id);
    setPlaylists(filteredPlaylist);
    saveToStorage(filteredPlaylist);
  };

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
            return (
              <PlaylistCard
                key={playlist.id}
                playlist={playlist}
                deletePlaylist={checkAndDeletePlaylist}
              />
            );
          })
        ) : (
          <p>No Playlists, Please create one</p>
        )}
      </div>
      {delelteModal && playlistToDelete && (
        <ModalElement setModalIsOpen={setDeleteModal} modalIsOpen={delelteModal}>
          <DeletePlaylist
            deletePlaylist={deletePlaylist}
            playlist={playlistToDelete}
            closeModal={closeDeleteModal}
          />
        </ModalElement>
      )}
      <ModalElement setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen}>
        <CreatePlaylistForm setPlaylists={setPlaylists} closeModal={closeModal} />
      </ModalElement>
    </div>
  );
};

export default Playlists;
