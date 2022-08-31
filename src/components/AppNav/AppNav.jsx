import { useSelector } from 'react-redux';
import { AppNavContainer } from './AppNav.styled';
import { AppLink } from 'utilities';
import { getisLogged } from 'redux/user';

const AppNav = () => {
  const isLogged = useSelector(getisLogged);
  return (
    <AppNavContainer>
      <AppLink to="/">Home</AppLink>
      {isLogged && <AppLink to="contacts">Contacts</AppLink>}
    </AppNavContainer>
  );
};

export default AppNav;
