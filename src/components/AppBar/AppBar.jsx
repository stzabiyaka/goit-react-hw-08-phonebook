import { useSelector } from 'react-redux';
import AppNav from 'components/AppNav';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { AppBarContainer } from './AppBar.styled';
import { getisLogged } from 'redux/user';

export function AppBar() {
  const isLogged = useSelector(getisLogged);
  return (
    <AppBarContainer>
      <AppNav />
      {isLogged ? <UserMenu /> : <AuthNav />}
    </AppBarContainer>
  );
}
