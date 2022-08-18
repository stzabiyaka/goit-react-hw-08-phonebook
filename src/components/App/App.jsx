import { useState, useEffect, useRef } from 'react';
import { Application } from './App.styled';
import { PageTitle } from 'components/PageTitle';
import { Footer } from 'components/Footer/Footer';
import { Section } from 'components/Section';
import { AddContactForm } from 'components/AddContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

const LOCALSTORAGE_KEY = 'contactList';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem(LOCALSTORAGE_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    try {
      window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts));
    } catch (error) {
      console.log('Local Storage saving error', error.message);
    }
  }, [contacts]);

  const addContact = contact => {
    setContacts(state => [contact, ...state]);
  };

  const removeContact = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  const setNewFilter = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return filter
      ? contacts.filter(contact =>
          contact.name
            .toLowerCase()
            .split(' ')
            .some(element => element.includes(normalizedFilter))
        )
      : contacts;
  };

  const isContactExist = name => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return false;
    }
    return true;
  };

  return (
    <Application>
      <PageTitle title="React homework #04 - phonebook" />

      <Section title="Phonebook">
        <AddContactForm onSubmit={addContact} checkContact={isContactExist} />
      </Section>

      <Section title="Contacts">
        <Filter value={filter} onFilter={setNewFilter} />
        <ContactList
          contacts={getFilteredContacts()}
          removeItem={removeContact}
        />
      </Section>

      <Footer name="Stanislav Zabiyaka" href="https://github.com/stzabiyaka/" />
    </Application>
  );
};
