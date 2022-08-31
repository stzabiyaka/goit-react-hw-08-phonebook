import { nanoid } from 'nanoid';
import { useSignUpUserMutation } from 'redux/user/authSlice';
import { Circles } from 'react-loader-spinner';
import { Button } from 'utilities';
import { useState } from 'react';
import { Main } from 'utilities';
import { Input } from 'components/Input';
import { FormContainer } from 'components/AddContactForm';

const RegisterView = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpUser, { isLoading: isRegistering }] = useSignUpUserMutation();

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
    signUpUser({ name: userName, email, password });
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
          pattern="[a-z0-9._%+-]{7,12}"
          title="Password may contain letters in lowercase, numbers and it's lenghth should be from 7 to 12 symbols"
          value={password}
          required={true}
          onChange={handleChange}
        />
        <Button type="submit">
          {isRegistering ? (
            <Circles color="blue" width="16" height="16" />
          ) : (
            'Register'
          )}
        </Button>
      </FormContainer>
    </Main>
  );
};

export default RegisterView;
