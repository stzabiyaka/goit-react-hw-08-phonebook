import { AppLink, Main } from 'utilities';
import { useSelector } from 'react-redux';
import { getUserToken } from 'redux/userState';
import { useGetCurrentUserQuery } from 'redux/userState';

const Homeview = () => {
  const isLogged = useSelector(getUserToken);
  const { data } = useGetCurrentUserQuery(undefined, { skip: !isLogged });
  return (
    <Main>
      <p>
        Welcome{isLogged && data && `, ${data?.name},`} to Phonebook - your
        application to store contacts.
      </p>
      {!isLogged && (
        <>
          <p>
            Please, {<AppLink to="login">sign in</AppLink>} to access your
            personal phonebook.
          </p>
          <p>
            If You don't have a phonebook yet, please,{' '}
            {<AppLink to="register">sign up</AppLink>}
            {'.'}
          </p>
        </>
      )}
    </Main>
  );
};

export default Homeview;
