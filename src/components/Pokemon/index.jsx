import PropTypes from 'prop-types';

export default function Pokemon({
  name,
}) {
  return (
    <div className="bg-slate-800 rounded-lg flex flex-col items-center justify-center h-[300px] w-[288px]">
      {/* <img
        src={img}
        alt={name}
        className="w-[164px]"
      /> */}
      <h3
        className="font-bold text-2xl"
      >
        {name}
      </h3>

      <div className="flex gap-1 mt-2">
        <h2 className="font-bold font-sora">Types:</h2>
        {/* <p>{ Object.values(types).length > 1 ? Object.values(types).join(', ') : types }</p> */}
      </div>
    </div>
  );
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
};
