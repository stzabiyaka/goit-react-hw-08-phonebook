import { AddContactForm } from 'components/AddContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Main } from 'utilities';
import { Card, CardContent, Typography } from '@mui/material';

const ContactsView = () => {
  return (
    <Main>
      <AddContactForm />
      <Card raised sx={{ mt: 2, mb: 2 }}>
        <CardContent>
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 'bold',
            }}
            align="center"
            gutterBottom
          >
            Contacts
          </Typography>
          <Filter />
          <ContactList />
        </CardContent>
      </Card>
    </Main>
  );
};

export default ContactsView;
