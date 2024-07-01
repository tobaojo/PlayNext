import { FC } from 'react';
import { type Playlist } from '../types/types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

type PlaylistCardProps = {
  playlist: Playlist;
  deletePlaylist: (playlist: Playlist) => void;
};
const PlaylistCard: FC<PlaylistCardProps> = ({ playlist, deletePlaylist }) => {
  return (
    <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <div className='flex justify-between'>
        <Link to={`/playlist/${playlist.id}`} state={{ playlist }}>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white grow pr-48'>
            {playlist.name}
          </h5>
          <p className='font-normal text-gray-700 dark:text-gray-400'>
            Games: {playlist?.data?.length}
          </p>
        </Link>
        <FontAwesomeIcon
          icon={faTrash}
          className='text-red-600 hover:text-red-700 hover:cursor-pointer'
          onClick={() => deletePlaylist(playlist)}
        />
      </div>
    </div>
  );
};

export default PlaylistCard;
