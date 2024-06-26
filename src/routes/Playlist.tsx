import ModalElement from '../components/Modal';
import CreatePlaylistForm from '../components/CreatePlaylistForm';
import { checkPlaylistInStorage } from '../api/api';
import { useEffect, useState } from 'react';

const Playlist = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [playlists, setPlaylists] = useState(checkPlaylistInStorage());
  console.log(playlists);

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <div>
        <p>View and manage your playlists</p>
        <button onClick={openModal}>Create</button>
        <div></div>
        <ModalElement setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen}>
          <div>
            <button onClick={closeModal}>Close</button>
            <CreatePlaylistForm playlists={playlists} setPlaylists={setPlaylists} />
          </div>
        </ModalElement>
      </div>
    </div>
  );
};

export default Playlist;
