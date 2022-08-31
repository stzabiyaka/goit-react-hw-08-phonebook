import { nanoid } from 'nanoid';
import { Button } from 'utilities';
import { useState } from 'react';
import { Main } from 'utilities';
import { Input } from 'components/Input';
import { FormContainer } from 'components/AddContactForm';

const RegisterView = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [createContact, { isLoading: isAdding }] = useCreateContactMutation();
  // const { data } = useGetContactsQuery();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'userName':
        setUserName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.log('No such a field');
    }
  };

  const reset = () => {
    setUserName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log({ userName, email, password });
    reset();
  };

  return (
    <Main>
      <FormContainer autoComplete="off" onSubmit={handleSubmit}>
        <Input
          name="userName"
          type="text"
          id={nanoid()}
          pattern="^[a-zA-Z0-9]+(([-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, numbers and dash."
          value={userName}
          required={true}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          id={nanoid()}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Please, enter your email"
          value={email}
          required={true}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          id={nanoid()}
          pattern="[a-z0-9._%+-]{2,8}"
          title="Password may contain letters in lowercase, numbers and it's lenghth should be from 2 to 8 symbols"
          value={password}
          required={true}
          onChange={handleChange}
        />
        <Button type="submit">
          {/* {isAdding ? (
            <Circles color="#8d8d8d" width="16" height="16" />
          ) : ( */}
          'Register'
          {/* )} */}
        </Button>
      </FormContainer>
    </Main>
  );
};

export default RegisterView;
