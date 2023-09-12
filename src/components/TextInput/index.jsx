import P from 'prop-types';
import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Filtrar por título"
    />
  );
};

TextInput.propTypes = {
  searchValue: P.string,
  handleChange: P.func.isRequired,
};
