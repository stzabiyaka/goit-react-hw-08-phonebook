import { useSelector } from 'react-redux';
import { AppNavContainer } from './AppNav.styled';
import { AppLink } from 'utilities';
import { getUserToken } from 'redux/userState';

const AppNav = () => {
  const isLogged = useSelector(getUserToken);
  return (
    <AppNavContainer>
      <AppLink to="/">Home</AppLink>
      {isLogged && <AppLink to="contacts">Contacts</AppLink>}
    </AppNavContainer>
  );
};

export default AppNav;
