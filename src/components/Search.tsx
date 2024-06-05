import { type ComponentProps } from '../types/types';

const Search = ({
  text,
  handleChange,
  genres,
  handleSelect,
  handleGenreChange,
}: ComponentProps) => {
  return (
    <form onSubmit={handleSelect} className='mx-auto flex flex-col md:flex-row'>
      <input
        type='text'
        name='search'
        id='search'
        className='mx-auto border-2 border-slate-400 rounded-lg p-1 m-1 items-center w-4/5 md:w-1/4 md:mx-1'
        placeholder='Search for title'
        value={text}
        onChange={handleChange}
      />
      <select
        name='genres'
        defaultValue={''}
        onChange={handleGenreChange}
        className=' mx-auto border-2 border-slate-400 rounded-lg p-1 m-1 items-center w-4/5 md:w-1/4 md:mx-1'
      >
        <option value={'all'}>All</option>
        {genres?.map((genre, i) => (
          <option value={genre} key={i}>
            {genre}
          </option>
        ))}
      </select>
      <button
        type={'submit'}
        className='mx-auto border-2 bg-blue-600 text-white rounded-lg p-1 m-1 items-center w-4/5 md:w-1/5 md:mx-1'
      >
        Search
      </button>
    </form>
  );
};

export default Search;
