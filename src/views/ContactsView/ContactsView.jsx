import { Section } from 'components/Section';
import { AddContactForm } from 'components/AddContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Main } from 'utilities';

const ContactsView = () => {
  return (
    <Main>
      <Section title="Phonebook">
        <AddContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </Main>
  );
};

export default ContactsView;
