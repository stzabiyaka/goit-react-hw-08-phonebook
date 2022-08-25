import { Application } from './App.styled';
import { PageTitle } from 'components/PageTitle';
import { Footer } from 'components/Footer/Footer';
import { Section } from 'components/Section';
import { AddContactForm } from 'components/AddContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

export const App = () => {
  return (
    <Application>
      <PageTitle title="React homework #06 - phonebook" />

      <Section title="Phonebook">
        <AddContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>

      <Footer name="Stanislav Zabiyaka" href="https://github.com/stzabiyaka/" />
    </Application>
  );
};
