import { AppLink, Main } from 'utilities';

const Homeview = () => {
  return (
    <Main>
      <p>Welcome to Phonebook - Your application to store contacts.</p>
      <p>
        Please, {<AppLink to="login">sign in</AppLink>} to access your personal
        phonebook.
      </p>
      <p>
        If You don't have a phonebook yet, please,{' '}
        {<AppLink to="register">sign up</AppLink>}
        {'.'}
      </p>
    </Main>
  );
};

export default Homeview;
