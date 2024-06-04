import { type ComponentProps } from '../types/types';

const Search = ({
  text,
  handleChange,
  genres,
  handleSelect,
  handleGenreChange,
}: ComponentProps) => {
  return (
    <form onSubmit={handleSelect}>
      <input
        type='text'
        name='search'
        id='search'
        className='border-2 border-slate-700'
        placeholder='Search for title'
        value={text}
        onChange={handleChange}
      />
      <select name='genres' defaultValue={''} onChange={handleGenreChange}>
        <option value={'all'}>All</option>
        {genres?.map((genre, i) => (
          <option value={genre} key={i}>
            {genre}
          </option>
        ))}
      </select>
      <button type={'submit'}>Search</button>
    </form>
  );
};

export default Search;
