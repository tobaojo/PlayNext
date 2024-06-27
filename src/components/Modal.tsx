import Modal from 'react-modal';

const ModalElement = ({ setModalIsOpen, modalIsOpen, children }) => {
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
