import { Link, useLoaderData } from 'react-router-dom';
import { getSingleGame, getAllGames } from '../api/api';
import { type Game } from '../types/types';

export async function loader({ params }: { params: { gameId: string } }) {
  const games = await getAllGames();
  if (typeof games === 'string') {
    console.log(games);
    return;
  } else {
    const singleGame = await getSingleGame(parseInt(params.gameId));
    console.log(singleGame);
    return { singleGame };
  }
}

const Game = () => {
  const { singleGame } = useLoaderData() as { singleGame: Game };
  console.log(singleGame);
  return (
    <div className='container mx-auto'>
      <div className='flex md:flex-row space-x-4'>
        <div className='w-full'>
          <img src={singleGame.thumbnail} alt='' />
          <Link to={singleGame.game_url} target='_blank'>
            Play Now
          </Link>
        </div>
        <div>
          <h3 className='font-bold text-5xl'>{singleGame.title}</h3>
          <p className='italic mb-3'>{singleGame.short_description}</p>
          <h4 className='font-bold'>Game Details</h4>
          <p>Developer: {singleGame.developer}</p>
          <p>publisher: {singleGame.publisher}</p>
          <p>Genre: {singleGame.genre}</p>
          <p>Platforms: {singleGame.platform}</p>
          <p>Release Date: {singleGame.release_date}</p>
          <p>Status: {singleGame.status}</p>
          <p>{singleGame?.description}</p>
        </div>
      </div>
      <div>
        <p>screenshots:</p>
        {singleGame.screenshots?.map((screenshot) => {
          return <img src={screenshot.image} key={screenshot.id}></img>;
        })}
      </div>
    </div>
  );
};

export default Game;
