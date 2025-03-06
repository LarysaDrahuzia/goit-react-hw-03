import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.searchBox}>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        className={css.input}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
