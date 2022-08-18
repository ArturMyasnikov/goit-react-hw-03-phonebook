import s from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter({ handleChange, value, onFilter }) {
  return (
    <>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          name="filter"
          value={value}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      {value && <ul>{onFilter()}</ul>}
    </>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func,
  handleChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};
