import { useSelector } from 'react-redux';
import { getUserEmail } from 'redux/user';
import { Button } from 'utilities';
import { Menu, Email } from '.';

const UserMenu = () => {
  const userEmail = useSelector(getUserEmail);
  return (
    <Menu>
      {userEmail && <Email>{userEmail}</Email>}
      <Button type="button">LogOut</Button>
    </Menu>
  );
};

export default UserMenu;
