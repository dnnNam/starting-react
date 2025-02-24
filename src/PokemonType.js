import PropTypes from "prop-types";
const PokemonType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.shape({
    english: PropTypes.string.isRequired, // isRequired là bắt buộc phải có
    japanese: PropTypes.string.isRequired,
    chinese: PropTypes.string.isRequired,
    french: PropTypes.string.isRequired,
  }),
  type: PropTypes.arrayOf(PropTypes.string.isRequired),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
});

export default PokemonType;
