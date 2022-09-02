import {
  useSignOutUserMutation,
  getUserToken,
  getUserEmail,
} from 'redux/userState';
import { useSelector } from 'react-redux';
import { Button } from 'utilities';
import { Circles } from 'react-loader-spinner';
import { Menu, Email } from '.';

const UserMenu = () => {
  const isLogged = useSelector(getUserToken);
  const email = useSelector(getUserEmail);

  const [
    signOutUser,
    {
      isLoading: isSigningOut,
      isSuccess: isSignOutSuccess,
      isError: isSignOutError,
    },
  ] = useSignOutUserMutation();
  const handleClick = () => {
    signOutUser();
  };

  return (
    <Menu>
      {isLogged && <Email>{email}</Email>}
      <Button type="button" onClick={handleClick}>
        {isSigningOut ? (
          <Circles color="blue" width="16" height="16" />
        ) : (
          'LogOut'
        )}
      </Button>
      {isSignOutSuccess && <p>You are successfully signed out.</p>}
      {isSignOutError && <p>Error occured, You are not signed out.</p>}
    </Menu>
  );
};

export default UserMenu;
