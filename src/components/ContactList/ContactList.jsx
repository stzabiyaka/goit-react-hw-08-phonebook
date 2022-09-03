import useFilteredContacts from 'hooks/useFilteredContacts';
import { ContactListItem } from 'components/ContactListItem';
import { Stack } from '@mui/material';

export function ContactList() {
  const filteredContacts = useFilteredContacts();

  return (
    <>
      {filteredContacts && (
        <Stack spacing={2}>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <ContactListItem
                key={id}
                id={id}
                name={name}
                number={number}
              ></ContactListItem>
            );
          })}
        </Stack>
      )}
    </>
  );
}
