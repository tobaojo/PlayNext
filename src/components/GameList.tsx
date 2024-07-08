import { FC, useState } from 'react';
import { type Game } from '../types/types';
import { checkPlaylistInStorage } from '../api/api';
import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';
import GameToAdd from './GameToAdd';
import ModalElement from './Modal';
import Gamecard from './Gamecard';

type GameListProps = {
  games: Game[];
};

const GameList: FC<GameListProps> = ({ games }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [seletedGame, setSelectedGame] = useState<Game | null>(null);
  const [playlists, setPlaylists] = useState(checkPlaylistInStorage());

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
            return (
              <Gamecard
                key={game.id}
                game={game}
                handleClick={handleClick}
                iconName={faHeartCirclePlus}
              />
            );
          })
        ) : (
          <p>Could not load games</p>
        )}
      </div>
      <ModalElement setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen}>
        {seletedGame && (
          <GameToAdd
            game={seletedGame}
            closeModal={closeModal}
            playlists={playlists}
            setPlaylists={setPlaylists}
          />
        )}
      </ModalElement>
    </div>
  );
};

export default GameList;
