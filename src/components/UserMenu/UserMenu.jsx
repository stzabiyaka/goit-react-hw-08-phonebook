import { Button } from 'utilities';
import { Menu, Email } from '.';

const UserMenu = () => {
  return (
    <Menu>
      <Email>user email</Email>
      <Button type="button">LogOut</Button>
    </Menu>
  );
};

export default UserMenu;
