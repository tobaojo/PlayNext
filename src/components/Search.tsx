import { type ComponentProps } from '../types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = ({
  text,
  handleChange,
  genres,
  handleSelect,
  handleGenreChange,
}: ComponentProps) => {
  return (
    <form onSubmit={handleSelect} className=' w-11/12 md:max-w-lg mx-auto my-2'>
      <div className='flex items-center border border-gray-300 rounded-md overflow-hidden'>
        <select
          name='genres'
          defaultValue={''}
          onChange={handleGenreChange}
          className='bg-white border-none outline-none text-gray-600 px-3 py-2'
        >
          <option>All categories</option>
          {genres?.map((genre, i) => (
            <option value={genre} key={i}>
              {genre}
            </option>
          ))}
        </select>
        <input
          type='text'
          className='flex-grow border-none outline-none px-3 py-2 text-gray-600'
          placeholder='Search Games...'
          value={text}
          onChange={handleChange}
        />
        <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </form>
  );
};

export default Search;
