import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import Modal from 'react-modal';
import '../CSS/Modal.css';

type ModalElementProps = {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  modalIsOpen: boolean;
  children: ReactNode;
};

const ModalElement: FC<ModalElementProps> = ({ setModalIsOpen, modalIsOpen, children }) => {
  const customStyles = {
    content: {
      top: '30%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      margin: 'auto',
      transform: 'translate(-50%, -50%)',
      border: '1px solid #ccc',
      width: '50%',
      background: '#fff',
      overflow: 'auto',
      borderRadius: '4px',
      outline: 'none',
      padding: '0',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(40, 40, 40, 0.80)',
    },
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={2000}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalElement;
