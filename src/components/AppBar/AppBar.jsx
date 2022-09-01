import { useSelector } from 'react-redux';
import AppNav from 'components/AppNav';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { AppBarContainer } from './AppBar.styled';
import { getUserToken } from 'redux/userState';

export function AppBar() {
  const isLogged = useSelector(getUserToken);
  return (
    <AppBarContainer>
      <AppNav />
      {isLogged ? <UserMenu /> : <AuthNav />}
    </AppBarContainer>
  );
}
