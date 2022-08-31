import { nanoid } from 'nanoid';
import { useSignInUserMutation } from 'redux/user/authSlice';
import { useDispatch } from 'react-redux';
import {
  setUserToken,
  setIsLogged,
  setUserName,
  setUserEmail,
} from 'redux/user';
import { Circles } from 'react-loader-spinner';
import { Button } from 'utilities';
import { useState } from 'react';
import { Main } from 'utilities';
import { Input } from 'components/Input';
import { FormContainer } from 'components/AddContactForm';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInUser, { isLoading: isLoggingIn }] = useSignInUserMutation();
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
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
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    signInUser({ email, password })
      .then(({ data }) => {
        dispatch(setUserToken(data.token));
        dispatch(setIsLogged(true));
        dispatch(setUserName(data.user.name));
        dispatch(setUserEmail(data.user.email));
      })
      .catch(console.log);
    reset();
  };

  return (
    <Main>
      <FormContainer autoComplete="off" onSubmit={handleSubmit}>
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
          {isLoggingIn ? (
            <Circles color="blue" width="16" height="16" />
          ) : (
            'LogIn'
          )}
        </Button>
      </FormContainer>
    </Main>
  );
};

export default LoginView;
