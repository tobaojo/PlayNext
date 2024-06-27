import { checkPlaylistInStorage } from '../api/api';

const GameToAdd = ({ game }) => {
  const playlists = checkPlaylistInStorage();
  console.log(playlists);
  return (
    <div>
      {playlists &&
        playlists.map((playlist) => {
          return <p>{playlist.name}</p>;
        })}
      <h5>{game.title}</h5>
      <p></p>
    </div>
  );
};

export default GameToAdd;
