import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  useSignUpUserMutation,
  useSignInUserMutation,
} from 'redux/userState/authSlice';
import { setUserToken } from 'redux/userState';
import { Circles } from 'react-loader-spinner';
import { Button } from 'utilities';
import { useState } from 'react';
import { Main } from 'utilities';
import { Input } from 'components/Input';
import { FormContainer } from 'components/AddContactForm';
import { useDispatch } from 'react-redux';

const AuthForm = ({ action }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpUser, { isLoading: isSigningUp }] = useSignUpUserMutation();
  const [signInUser, { isLoading: isSigningIn }] = useSignInUserMutation();
  const dispatch = useDispatch();

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
    switch (action) {
      case 'signIn':
        signInUser({ email, password })
          .then(({ data }) => {
            dispatch(setUserToken(data.token));
            return;
          })
          .catch(console.log);
        break;
      case 'signUp':
        signUpUser({ name: userName, email, password })
          .then(({ data }) => {
            dispatch(setUserToken(data.token));
          })
          .catch(console.log);
        break;
      default:
        console.log('No such an action');
    }
    reset();
  };

  return (
    <Main>
      <FormContainer autoComplete="off" onSubmit={handleSubmit}>
        {action === 'signUp' && (
          <Input
            name="userName"
            type="text"
            id={nanoid()}
            pattern="^[a-zA-Z0-9]+(([-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, numbers and dash."
            value={userName}
            required={true}
            placeholder="Enter UserName"
            onChange={handleChange}
          />
        )}
        <Input
          type="email"
          name="email"
          id={nanoid()}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Please, enter your email"
          value={email}
          required={true}
          placeholder="Enter email"
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
          placeholder="Enter password"
          onChange={handleChange}
        />
        <Button type="submit">
          {isSigningIn || isSigningUp ? (
            <Circles color="blue" width="16" height="16" />
          ) : action === 'signUp' ? (
            'Sign Up'
          ) : (
            'Sign In'
          )}
        </Button>
      </FormContainer>
    </Main>
  );
};

AuthForm.propTypes = {
  action: PropTypes.string.isRequired,
};

export default AuthForm;
