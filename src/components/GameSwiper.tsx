import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { type Screenshots } from '../types/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type GameSwiperProps = {
  screenshots?: Screenshots[];
};

const GameSwiper: FC<GameSwiperProps> = ({ screenshots }) => {
  if (!screenshots) {
    return (
      <div>
        <p>No images</p>
      </div>
    );
  }
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={40}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={2}
      className='mx-auto flex flex-col'
    >
      {screenshots.map((screenshot) => {
        return (
          <SwiperSlide key={screenshot.id}>
            <img src={screenshot.image} alt='image' />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default GameSwiper;
