import { FC } from 'react';
import { type Playlist } from '../types/types';
import { Link } from 'react-router-dom';

type PlaylistCardProps = {
  playlist: Playlist;
};
const PlaylistCard: FC<PlaylistCardProps> = ({ playlist }) => {
  return (
    <Link
      to={`/playlist/${playlist.id}`}
      state={{ playlist }}
      className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
    >
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {playlist.name}
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
        Games: {playlist?.data?.length}
      </p>
    </Link>
  );
};

export default PlaylistCard;
