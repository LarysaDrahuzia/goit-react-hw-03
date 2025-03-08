import { useState, useEffect } from 'react';
import initialPersons from '../../persons.json';

import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

import css from './App.module.css';

function App() {
  const [persons, setPersons] = useState(() => {
    const savedPersons = localStorage.getItem('persons');
    if (savedPersons !== null) {
      return JSON.parse(savedPersons);
    }
    return initialPersons;
  });

  useEffect(() => {
    localStorage.setItem('persons', JSON.stringify(persons));
  }, [persons]);
  localStorage.clear();

  const [filter, setFilter] = useState('');

  const addPerson = person => {
    setPersons(prev => [...prev, person]);
  };

  const deletePerson = personId => {
    setPersons(prevPersons => {
      return prevPersons.filter(person => person.id !== personId);
    });
  };

  const selectedPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addPerson} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList persons={selectedPersons} onDelete={deletePerson} />
    </div>
  );
}

export default App;
