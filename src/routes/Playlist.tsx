import ModalElement from '../components/Modal';
import { useState } from 'react';

const Playlist = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //   const createPlaylist = () => {
  //     // localStorage.setItem();
  //   };
  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <div>
        <p>create Playlist</p>
        <button onClick={openModal}>Create</button>
        <ModalElement setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen}>
          <div>
            <button onClick={closeModal}>Close</button>
            <h3>I am a modal</h3>
          </div>
        </ModalElement>
      </div>
    </div>
  );
};

export default Playlist;
