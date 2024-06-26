import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';

const Navbar = () => {
  return (
    <nav className='relative container p-6 mx-auto '>
      <div className='flex items-center justify-between border-b-2 border-red-400'>
        <div className='pt-2'>
          <Link to={'/'}>
            <h2 className='text-5xl font-bold hover:text-red-500 hover:cursor-pointer'>
              Play Next
            </h2>
          </Link>
        </div>
        <div className='hidden space-x-6 md:flex'>
          <Link to='/' className='text-xl hover:text-red-900 text-slate-500'>
            Home
          </Link>
          <Link to='games' className='text-xl hover:text-red-900 text-slate-500'>
            Games
          </Link>
          <Link to='playlist' className='text-xl hover:text-red-900 text-slate-500'>
            Playlists
          </Link>
        </div>
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
