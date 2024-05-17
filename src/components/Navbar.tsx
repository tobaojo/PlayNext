import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='relative container p-6 mx-auto '>
      <div className='flex items-center justify-between border-b-2 border-red-400'>
        <div className='pt-2'>
          <h2 className='text-5xl font-bold'>Play Next</h2>
        </div>
        <div className='hidden space-x-6 md:flex'>
          <Link to='/' className='hover:text-slate-900 text-slate-500'>
            Home
          </Link>
          <Link to='games' className='hover:text-slate-900 text-slate-500'>
            Games
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
