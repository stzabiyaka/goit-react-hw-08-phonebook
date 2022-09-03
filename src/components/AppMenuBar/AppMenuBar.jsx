import { useSelector } from 'react-redux';
import { AppBar, Toolbar } from '@mui/material';
import AppNav from 'components/AppNav';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { getUserToken } from 'redux/userState';

const AppMenuBar = () => {
  const isLogged = useSelector(getUserToken);
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <AppNav />
        {isLogged ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};

export default AppMenuBar;
