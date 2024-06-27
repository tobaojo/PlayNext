import { useLocation } from 'react-router-dom';

const Playlist = () => {
  const location = useLocation();
  const { playlist } = location.state || {};

  console.log(playlist);
  return <div>Playlist</div>;
};

export default Playlist;
