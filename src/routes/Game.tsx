import { useLoaderData } from 'react-router-dom';
import { getSingleGame, getAllGames } from '../api/api';
import { type Game } from '../types/types';

export async function loader({ params }: { params: { gameId: string } }) {
  const games = await getAllGames();
  if (typeof games === 'string') {
    console.log(games);
  } else {
    const singleGame = await getSingleGame(parseInt(params.gameId));
    console.log(singleGame);
    return { singleGame };
  }
}

const Game = () => {
  const { singleGame } = useLoaderData() as { singleGame: Game };
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col'>
        <h3>{singleGame.title}</h3>
        <img src={singleGame.thumbnail} alt='' />
        <p>{singleGame.short_description}</p>
        <div>
          <h4>Game Details</h4>
          <p>Developer: {singleGame.developer}</p>
          <p>Genre: {singleGame.genre}</p>
          <p>Platforms: {singleGame.platform}</p>
          <p>Release Date: {singleGame.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default Game;
