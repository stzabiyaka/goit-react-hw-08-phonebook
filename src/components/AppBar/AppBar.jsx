import AppNav from 'components/AppNav';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { AppBarContainer } from './AppBar.styled';

export function AppBar() {
  return (
    <AppBarContainer>
      <AppNav />
      <AuthNav />
      <UserMenu />
    </AppBarContainer>
  );
}
