import {
  useSignOutUserMutation,
  useGetCurrentUserQuery,
  getUserToken,
} from 'redux/userState';
import { useSelector } from 'react-redux';
import { Button } from 'utilities';
import { Circles } from 'react-loader-spinner';
import { Menu, Email } from '.';

const UserMenu = () => {
  const isLogged = useSelector(getUserToken);
  const { data, isSuccess } = useGetCurrentUserQuery(undefined, {
    skip: !isLogged,
  });
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
      {isSuccess && <Email>{data.email}</Email>}
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
