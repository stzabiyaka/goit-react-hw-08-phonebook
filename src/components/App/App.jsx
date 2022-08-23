import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  removeContact,
  setFilter,
  getContactsValue,
  getFilterValue,
} from '../../redux/contacts/slice';
import { Application } from './App.styled';
import { PageTitle } from 'components/PageTitle';
import { Footer } from 'components/Footer/Footer';
import { Section } from 'components/Section';
import { AddContactForm } from 'components/AddContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

export const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(getContactsValue);
  const filterValue = useSelector(getFilterValue);

  const getFilteredContacts = () => {
    const normalizedFilter = filterValue.toLocaleLowerCase();
    return filterValue
      ? items.filter(item =>
          item.name
            .toLowerCase()
            .split(' ')
            .some(element => element.includes(normalizedFilter))
        )
      : items;
  };

  const isContactExist = name => {
    if (items.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return false;
    }
    return true;
  };

  return (
    <Application>
      <PageTitle title="React homework #06 - phonebook" />

      <Section title="Phonebook">
        <AddContactForm
          onSubmit={contact => dispatch(addContact(contact))}
          checkContact={isContactExist}
        />
      </Section>

      <Section title="Contacts">
        <Filter
          value={filterValue}
          onFilter={value => dispatch(setFilter(value))}
        />
        <ContactList
          contacts={getFilteredContacts()}
          removeItem={id => dispatch(removeContact(id))}
        />
      </Section>

      <Footer name="Stanislav Zabiyaka" href="https://github.com/stzabiyaka/" />
    </Application>
  );
};
