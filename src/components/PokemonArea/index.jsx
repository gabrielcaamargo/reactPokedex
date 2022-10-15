import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function PokemonArea() {
  return (
    <div className="w-full h-[500px] grid grid-cols-2 place-content-between bg-gradient-to-b from-orange-500 to-slate-900 px-12 py-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-sora font-bold">Charizard</h1>
        <div className="flex gap-2 items-center">
          <img src="src/assets/poke-types/fire.png" alt="" className="w-12" title="Fire" />
          <img src="src/assets/poke-types/flying.png" alt="" className="w-12" title="Flying" />
        </div>
      </div>
      <div className="swiper">
        <Swiper
          className="max-w-[400px] h-full"
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src="src/assets/mocks/charizard.png" alt="Charizard" />
          </SwiperSlide>

          <SwiperSlide className="bg-slate-800 p-6 rounded-lg text-left">
            <div className=" flex flex-col gap-2">
              <p className="font-bold text-3xl mb-4 text-slate-500 font-sora">
                Abilities
              </p>

              <p className="font-bold text-xl">
                Blaze
              </p>
              <span className="text-lg">
                Strengthens fire moves to inflict 1.5× damage at 1/3 max HP or less.
              </span>

              <p className="font-bold text-xl">
                Solar Power
              </p>
              <span className="text-lg">
                Increases Special Attack to 1.5× but costs 1/8 max HP after each turn during strong sunlight.
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
