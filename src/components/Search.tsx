import { type ComponentProps } from '../types/types';

const Search = ({ text, handleChange, handleClick }: ComponentProps) => {
  return (
    <div>
      <input
        type='text'
        name='search'
        id='search'
        className='border-2 border-slate-700'
        placeholder='Search for title'
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default Search;
