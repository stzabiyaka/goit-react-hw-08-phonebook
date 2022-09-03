import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  useSignUpUserMutation,
  useSignInUserMutation,
} from 'redux/userState/authSlice';
import { Circles } from 'react-loader-spinner';
import { useState } from 'react';
import { Main, theme } from 'utilities';
import { Input } from 'components/Input';
import { FormContainer } from 'components/AddContactForm';
import { toast } from 'react-toastify';

import { Card, CardContent, Typography, Button } from '@mui/material';

const AuthForm = ({ action }) => {
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [signInUser, { isLoading: isSigningIn }] = useSignInUserMutation();
  const [signUpUser, { isLoading: isSigningUp }] = useSignUpUserMutation();
  const namePattern = new RegExp(
    /^[a-zA-Z0-9]+(([-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
  );
  const emailPattern = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
  const passwordPattern = new RegExp(/[a-z0-9._%+-]{7,12}/);

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'userName':
        setUserName(value);
        setUserNameError(false);
        break;

      case 'email':
        setEmail(value);
        setEmailError(false);
        break;

      case 'password':
        setPassword(value);
        setPasswordError(false);
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
    if (userName && !namePattern.test(userName)) {
      setUserNameError(true);
      console.log('name', userNameError);
      return;
    }
    if (!emailPattern.test(email)) {
      setEmailError(true);
      console.log('email', emailError);
      return;
    }
    if (!passwordPattern.test(password)) {
      setPasswordError(true);
      console.log('pass', passwordError);
      return;
    }

    switch (action) {
      case 'signIn':
        signInUser({ email, password }).then(response => {
          if (response?.error?.status === 400) {
            toast.error('No such user found!');
          }
        });
        break;
      case 'signUp':
        signUpUser({ name: userName, email, password }).then(response => {
          if (response?.error?.status === 400) {
            toast.error('User registration error!');
          }
          if (response?.error?.status === 500) {
            toast.error('Server error!');
          }
        });
        break;
      default:
        console.log('No such action');
    }
    reset();
  };

  return (
    <Main>
      <Card raised sx={{ mt: 2 }}>
        <CardContent>
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}
            color="primary"
            align="center"
            gutterBottom
          >
            {action}
          </Typography>
          <FormContainer autoComplete="off" onSubmit={handleSubmit}>
            {action === 'signUp' && (
              <Input
                error={userNameError}
                name="userName"
                type="text"
                id={nanoid()}
                title="Name may contain only letters, numbers and dash."
                value={userName}
                required={true}
                placeholder="Enter UserName"
                onChange={handleChange}
              />
            )}
            <Input
              error={emailError}
              type="email"
              name="email"
              id={nanoid()}
              title="Please, enter your email"
              value={email}
              required={true}
              placeholder="Enter email"
              onChange={handleChange}
            />
            <Input
              error={passwordError}
              type="password"
              name="password"
              id={nanoid()}
              title="Password may contain letters in lowercase, numbers and it's lenghth should be from 7 to 12 symbols"
              value={password}
              required={true}
              placeholder="Enter password"
              onChange={handleChange}
              minlength="7"
              maxLength="12"
            />
            <Button type="submit" variant="contained">
              {isSigningIn || isSigningUp ? (
                <Circles
                  color={theme.palette.triadic.main}
                  width="16"
                  height="16"
                />
              ) : action === 'signUp' ? (
                'Sign Up'
              ) : (
                'Sign In'
              )}
            </Button>
          </FormContainer>
        </CardContent>
      </Card>
    </Main>
  );
};

AuthForm.propTypes = {
  action: PropTypes.string.isRequired,
};

export default AuthForm;
