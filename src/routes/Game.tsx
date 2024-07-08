import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getSingleGame, getAllGames, saveToStorage, checkPlaylistInStorage } from '../api/api';
import { type Game } from '../types/types';
import GameSwiper from '../components/GameSwiper';
import IconArrowLeft from '../components/LeftArrow';
import Footer from '../components/Footer';
import ModalElement from '../components/Modal';
import GameToAdd from '../components/GameToAdd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';

export async function loader({ params }: { params: { gameId: string } }) {
  const games = await getAllGames();
  if (typeof games === 'string') {
    console.log(games);
    return;
  } else {
    const singleGame = await getSingleGame(parseInt(params.gameId));
    return { singleGame };
  }
}

const Game = () => {
  const [playlists, setPlaylists] = useState(checkPlaylistInStorage());
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const navigate = useNavigate();
  const { singleGame } = useLoaderData() as { singleGame: Game };

  const closeModal = () => setModalIsOpen(false);

  const openModal = () => setModalIsOpen(true);

  const handleClick = () => {
    openModal();
  };

  return (
    <>
      <div className='container mx-auto'>
        <div>
          <button
            onClick={() => navigate(-1)}
            className='flex items-center mx-6 hover:text-red-700'
          >
            <IconArrowLeft /> <p>Go back</p>
          </button>
        </div>
        <div className='flex flex-col space-y-8 m-4'>
          <div className='flex flex-col space-y-2 md:flex-row p-2 border-slate-400 space-x-5'>
            <div>
              <img className='my-1 ' src={singleGame.thumbnail} alt='' />
              <Link
                to={singleGame.game_url}
                target='_blank'
                className='flex border rounded-xl border-red-600 bg-red-500 p-3'
              >
                <p className='text-white font-bold mr-auto'>Play Now</p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6 text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9'
                  />
                </svg>
              </Link>
            </div>
            <div className='w-3/5'>
              <h3 className='font-bold text-3xl md:text-5xl'>{singleGame.title}</h3>
              <p className='italic mb-3'>{singleGame.short_description}</p>
              <div className='flex space-x-1'>
                <p className='text-red-700'>{singleGame.developer}</p>
                <span>•</span>
                <p className='text-red-700'>{singleGame.genre}</p>
              </div>
              <FontAwesomeIcon
                icon={faHeartCirclePlus}
                className='text-red-700 text-2xl my-2'
                onClick={handleClick}
              />
            </div>
          </div>
          <p>{singleGame?.description}</p>
        </div>
        <div className='m-4'>
          <h4>screenshots</h4>
          <div className='flex m-4'>
            <GameSwiper screenshots={singleGame.screenshots} />
          </div>
          <div className='flex flex-col space-y-8'>
            <div>
              <h4 className='mb-2'>Details</h4>
              <div className='flex space-x-10'>
                <div className='flex flex-col'>
                  <h5 className='font-semibold'>Platform</h5>
                  <p className='text-sm text-red-700'>{singleGame.platform}</p>
                </div>
                <div className='flex flex-col'>
                  <h5 className='font-semibold'>Publisher</h5>
                  <p className='text-sm text-red-700'>{singleGame.publisher}</p>
                </div>
                <div className='flex flex-col'>
                  <h5 className='font-semibold'>Release Date</h5>
                  <p className='text-sm text-red-700'>{singleGame.release_date}</p>
                </div>
                <div className='flex flex-col'>
                  <h5 className='font-semibold'>Status</h5>
                  <p className='text-sm text-red-700'>{singleGame.status}</p>
                </div>
              </div>
            </div>
            <div>
              <h4>System Requirements</h4>
              <div className='flex flex-col space-y-4 md:space-x-10 md:flex-row'>
                <div>
                  <h5 className='font-semibold'>Graphics:</h5>
                  <p className='text-sm text-red-700'>
                    {singleGame.minimum_system_requirements?.graphics}
                  </p>
                </div>
                <div>
                  <h5 className='font-semibold'>Memory:</h5>
                  <p className='text-sm text-red-700'>
                    {singleGame.minimum_system_requirements?.memory}
                  </p>
                </div>
                <div>
                  <h5 className='font-semibold'>OS:</h5>
                  <p className='text-sm text-red-700'>
                    {singleGame.minimum_system_requirements?.os}
                  </p>
                </div>
                <div>
                  <h5 className='font-semibold'>Processor:</h5>
                  <p className='text-sm text-red-700'>
                    {singleGame.minimum_system_requirements?.processor}
                  </p>
                </div>
                <div>
                  <h5 className='font-semibold'>Storage:</h5>
                  <p className='text-sm text-red-700'>
                    {singleGame.minimum_system_requirements?.storage}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalIsOpen && (
        <ModalElement setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen}>
          <GameToAdd game={singleGame} closeModal={closeModal} />
        </ModalElement>
      )}
      <Footer />
    </>
  );
};

export default Game;
