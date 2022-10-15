import PropTypes from 'prop-types';

export default function Pokemon({
  img, name, type, typeText, secondType, secondTypeText,
}) {
  return (
    <div className="bg-slate-800 rounded-lg flex flex-col items-center justify-center h-[300px] w-[288px]">
      <img
        src={img}
        alt={name}
        className="w-[164px]"
      />
      <h3
        className="font-bold text-2xl"
      >
        {name}
      </h3>
      <div className="flex gap-1">
        <img
          src={type}
          alt={typeText}
          title={typeText}
          className="w-12"
        />
        {
          secondType && (
            <img
              src={secondType}
              alt={secondTypeText}
              className="w-12"
              title={secondTypeText}
            />
          )
        }
      </div>
    </div>
  );
}

Pokemon.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  typeText: PropTypes.string.isRequired,
  secondType: PropTypes.string,
  secondTypeText: PropTypes.string,
};

Pokemon.defaultProps = {
  secondType: null,
  secondTypeText: null,
};
