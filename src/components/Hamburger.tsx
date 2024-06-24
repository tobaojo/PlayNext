import { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';

const Hamburger = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <>
      <button
        id='menu-btn'
        className={`block hamburger md:hidden focus:outline-none ${open ? 'open' : ''}`}
        onClick={() => setIsOpen(!open)}
      >
        <span className='hamburger-top'></span>
        <span className='hamburger-middle'></span>
        <span className='hamburger-bottom'></span>
      </button>
      <HamburgerMenu open={open} setIsOpen={setIsOpen} />
    </>
  );
};

export default Hamburger;
