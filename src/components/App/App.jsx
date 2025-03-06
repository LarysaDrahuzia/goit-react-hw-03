import { useState } from 'react';
import initialPersons from '../../persons.json';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

import './App.module.css';

function App() {
  const [persons, setPersons] = useState(initialPersons);
  const [filter, setFilter] = useState('');

  const addPerson = person => {
    setPersons(prev => [...prev, person]);
  };

  const selectedPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addPerson} />
        <SearchBox value={filter} onChange={setFilter} />
        <ContactList persons={selectedPersons} />
      </div>
    </>
  );
}

export default App;
