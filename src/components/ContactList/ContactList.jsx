import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ persons, onDelete }) => {
  return (
    <>
      <ul className={css.list}>
        {persons.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <Contact name={name} number={number} />
            <button className={css.btn} onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
