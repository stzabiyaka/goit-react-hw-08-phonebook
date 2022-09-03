import { useState } from 'react';
import { useCreateContactMutation } from 'redux/contacts';
import { Circles } from 'react-loader-spinner';
import { nanoid } from 'nanoid';
import { Input } from 'components/Input';
import { FormContainer } from './AddContactForm.styled';
import { useContacts } from 'hooks';
import { toast } from 'react-toastify';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { theme } from 'utilities';

export const AddContactForm = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [number, setNumber] = useState('');
  const [numberError, setNumberError] = useState(false);
  const [createContact, { isLoading: isAdding }] = useCreateContactMutation();
  const data = useContacts();
  const namePattern = new RegExp(
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
  );

  const numberPattern = new RegExp(
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
  );

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        setNameError(false);

        break;

      case 'number':
        setNumber(value);
        setNumberError(false);
        break;

      default:
        console.log('No such a field');
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!namePattern.test(name)) {
      setNameError(true);
      return;
    }
    if (!numberPattern.test(number)) {
      setNumberError(true);
      return;
    }

    if (isContactExist(name)) {
      createContact({ name, number });
      reset();
    }
  };

  const isContactExist = name => {
    if (
      data.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      toast.error(`${name} is already in contacts`);
      setNameError(true);
      return false;
    }
    return true;
  };

  return (
    <Card raised sx={{ mt: 2 }}>
      <CardContent>
        <Typography
          sx={{
            fontSize: 24,
            fontWeight: 'bold',
          }}
          color="primary"
          align="center"
          gutterBottom
        >
          Add Contact
        </Typography>
        <FormContainer autoComplete="off" onSubmit={handleSubmit}>
          <Input
            error={nameError}
            name="name"
            type="text"
            id={nanoid()}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            required={true}
            placeholder="Name Surname"
            onChange={handleChange}
          />
          <Input
            error={numberError}
            type="tel"
            name="number"
            id={nanoid()}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            required={true}
            placeholder="+380 (111) 11 11 11"
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            {isAdding ? (
              <Circles
                color={theme.palette.triadic.main}
                width="16"
                height="16"
              />
            ) : (
              'Add contact'
            )}
          </Button>
        </FormContainer>
      </CardContent>
    </Card>
  );
};
