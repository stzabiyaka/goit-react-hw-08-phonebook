import { useState } from 'react';
import { useCreateContactMutation, useGetContactsQuery } from 'redux/contacts';
import { Circles } from 'react-loader-spinner';
import { nanoid } from 'nanoid';
import { Input } from 'components/Input';
import { FormContainer } from './AddContactForm.styled';
import { Button } from 'utilities';

export const AddContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContact, { isLoading: isAdding }] = useCreateContactMutation();
  const { data } = useGetContactsQuery();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
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
    if (isContactExist(name)) {
      createContact({ name, number });
      reset();
    }
  };

  const isContactExist = name => {
    if (
      data.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts`);
      return false;
    }
    return true;
  };

  return (
    <FormContainer autoComplete="off" onSubmit={handleSubmit}>
      <Input
        name="name"
        type="text"
        id={nanoid()}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        required={true}
        placeholder="Enter name"
        onChange={handleChange}
      />
      <Input
        type="tel"
        name="number"
        id={nanoid()}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        required={true}
        placeholder="Enter phone number"
        onChange={handleChange}
      />
      <Button type="submit">
        {isAdding ? (
          <Circles color="#8d8d8d" width="16" height="16" />
        ) : (
          'Add contact'
        )}
      </Button>
    </FormContainer>
  );
};
