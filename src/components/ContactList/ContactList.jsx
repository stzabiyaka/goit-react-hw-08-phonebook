import useFilteredContacts from 'hooks/useFilteredContacts';
import { ContactListItem } from 'components/ContactListItem';
import { List } from './ContactList.styled';

export function ContactList() {
  const filteredContacts = useFilteredContacts();

  return (
    <>
      {filteredContacts && (
        <List>
          {filteredContacts.map(({ id }) => {
            return <ContactListItem key={id} id={id}></ContactListItem>;
          })}
        </List>
      )}
    </>
  );
}
