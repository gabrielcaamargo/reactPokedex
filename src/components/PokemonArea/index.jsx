import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function PokemonArea() {
  return (
    <div className="w-full h-[460px] big-tablet:grid-cols-1 big-tablet:justify-center laptop:grid-cols-2 place-content-between bg-gradient-to-b from-purple-900 to-slate-900 px-12 py-4 smallest:flex smallest:flex-col-reverse mobile:flex mobile:flex-col-reverse tablet:grid">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-sora font-bold smallest:text-5xl mobile:text-5xl">Charizard</h1>
        <div className="flex gap-2 items-center smallest:gap-1 mobile:gap-1">
          <img src="src/assets/poke-types/fire.png" alt="" className="w-12 smallest:w-10 mobile:w-10" title="Fire" />
          <img src="src/assets/poke-types/flying.png" alt="" className="w-12 smallest:w-10 mobile:w-10" title="Flying" />
        </div>
      </div>
      <div className="swiper mr-0 ml-0">
        <Swiper
          className="max-w-[400px] h-full"
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src="src/assets/mocks/charizard.png" alt="Charizard" className="smallest:w-[300px] mobile:w-[360px] tablet:w-[400px]" />
          </SwiperSlide>

          <SwiperSlide className="bg-slate-800 p-6 rounded-lg text-left">
            <div className="flex flex-col smallest:gap-0 mobile:gap-0 tablet:gap-2 ">
              <p className="font-bold smallest:text-2xl mobile:text-2xl tablet:text-3xl smallest:mb-1 mobile:mb-1 tablet:mb-2 laptop:mb-4 text-slate-500 font-sora">
                Abilities
              </p>

              <p className="font-bold smallest:text-lg mobile:text-lg tablet:text-xl">
                Blaze
              </p>
              <span className="smallest:text-base mobile:text-base tablet:text-lg">
                Strengthens fire moves to inflict 1.5× damage at 1/3 max HP or less.
              </span>

              <p className="font-bold smallest:text-lg mobile:text-lg tablet:text-xl">
                Solar Power
              </p>
              <span className="smallest:text-base mobile:text-base tablet:text-lg">
                Increases Special Attack to 1.5× but costs 1/8 max HP after each turn during strong sunlight.
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
