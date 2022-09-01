import { useDispatch } from 'react-redux';
import {
  unsetUserToken,
  useSignOutUserMutation,
  useGetCurrentUserQuery,
} from 'redux/userState';
import { Button } from 'utilities';
import { Circles } from 'react-loader-spinner';
import { Menu, Email } from '.';

const UserMenu = () => {
  const { data, isSuccess } = useGetCurrentUserQuery();
  const dispatch = useDispatch();
  const [signOutUser, { isLoading: isSigningOut }] = useSignOutUserMutation();
  const handleClick = () => {
    signOutUser().then(() => {
      dispatch(unsetUserToken());
    });
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
    </Menu>
  );
};

export default UserMenu;
