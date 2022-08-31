import { AppNavContainer } from './AppNav.styled';
import { AppLink } from 'utilities';

const AppNav = () => {
  return (
    <AppNavContainer>
      <AppLink to="/">Home</AppLink>
      <AppLink to="contacts">Contacts</AppLink>
    </AppNavContainer>
  );
};

export default AppNav;
