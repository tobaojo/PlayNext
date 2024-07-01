import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import Modal from 'react-modal';

type ModalElementProps = {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  modalIsOpen: boolean;
  children: ReactNode;
};

const ModalElement: FC<ModalElementProps> = ({ setModalIsOpen, modalIsOpen, children }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        {children}
      </Modal>
    </>
  );
};

export default ModalElement;
