import { FC, useState } from 'react';
import { type Colours, Game } from '../types/types';
import { Link } from 'react-router-dom';
import GameToAdd from './GameToAdd';
import ModalElement from './Modal';

const genreColors: Colours = {
  Shooter: 'bg-red-700',
  Adventure: 'bg-blue-700',
  MMORPG: 'bg-green-700',
  Strategy: 'bg-yellow-700',
  ARPG: 'bg-orange-700',
  MOBA: 'bg-[#9753ea]',

  // Add more genres and their corresponding colors here
};

type GameListProps = {
  games: Game[];
};

const GameList: FC<GameListProps> = ({ games }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [seletedGame, setSelectedGame] = useState<Game | null>(null);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleClick = (game: Game) => {
    if (!game) {
      console.log('please select a game');
      return;
    }
    setSelectedGame(game);
    openModal();
  };
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col space-y-6 items-center md:grid md:grid-cols-3 md:gap-2 md:divide-y-0 md:p-1 md:items-baseline'>
        {games ? (
          games.map((game) => {
            const colorGenre = genreColors[game.genre] || 'bg-gray-700';
            return (
              <div key={game.id}>
                <div className='hover:cursor-pointer'>
                  <Link to={`/game/${game.id}`}>
                    <div className='space-y-2'>
                      <img src={game.thumbnail} alt='' className='' />
                    </div>
                  </Link>
                  <div className='items-center'>
                    <small
                      className={`justify-self-end ${colorGenre} text-white rounded-full px-2 py-0.5`}
                    >
                      {game.genre}
                    </small>
                    <div className='flex w-3/4 justify-between'>
                      <h4>{game.title}</h4>
                      <button className='' onClick={() => handleClick(game)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Could not load games</p>
        )}
      </div>
      <ModalElement setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen}>
        {seletedGame && <GameToAdd game={seletedGame} closeModal={closeModal} />}
      </ModalElement>
    </div>
  );
};

export default GameList;
