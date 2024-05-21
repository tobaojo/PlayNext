const GameList = ({ games }) => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col space-y-6 items-center md:grid md:grid-cols-3 md:gap-2 md:divide-y-0'>
        {games.map((game) => {
          return (
            <div key={game.id}>
              <div className='space-y-2'>
                <img src={game.thumbnail} alt='' className='rounded-xl' />
              </div>
              <div className='flex items-center space-x-11'>
                <h3>{game.title}</h3>
                <small>{game.genre}</small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameList;
