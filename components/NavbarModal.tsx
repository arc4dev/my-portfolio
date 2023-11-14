import React from 'react';
import ReactModal from 'react-modal';

type Props = {};

// we need to store the state of the modal in a context to retrieve it and use it in the header
const NavbarModal = ({}: Props) => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleClick}
      className=""
      contentLabel="Navbar Modal"
      appElement={document.getElementById('root')}>
      NavbarModal
    </ReactModal>
  );
};

export default NavbarModal;
