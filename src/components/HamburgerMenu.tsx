import { Link } from 'react-router-dom';

const HamburgerMenu = ({
  open,
  setIsOpen,
}: {
  open: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  return (
    <div className='md:hidden'>
      <div
        id='menu'
        className={`absolute flex-col items-center  self-end py-4 my-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
          open ? `flex z-50` : 'hidden'
        }`}
      >
        <Link
          to={'/'}
          onClick={() => setIsOpen(!open)}
          className='text-xl hover:text-red-900 text-slate-800'
        >
          Home
        </Link>
        <Link
          to='games'
          onClick={() => setIsOpen(!open)}
          className='text-xl hover:text-red-900 text-slate-800'
        >
          Games
        </Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
