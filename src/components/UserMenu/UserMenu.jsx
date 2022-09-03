import {
  useSignOutUserMutation,
  getUserToken,
  getUserEmail,
} from 'redux/userState';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Button } from '@mui/material';
import { Circles } from 'react-loader-spinner';
import { Menu, MenuItem, Typography, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { theme } from 'utilities';

const UserMenu = () => {
  const isLogged = useSelector(getUserToken);
  const email = useSelector(getUserEmail);

  const [anchorEl, setAnchorEl] = useState(null);
  const [signOutUser, { isLoading: isSigningOut }] = useSignOutUserMutation();

  const handleClick = () => {
    signOutUser();
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isLogged && (
        <>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            title="User menu"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Typography sx={{ fontSize: 14, mr: 1 }}>{email}</Typography>
            </MenuItem>
            <MenuItem>
              <Button type="button" onClick={handleClick} variant="outlined">
                {isSigningOut ? (
                  <Circles
                    color={theme.palette.triadic.main}
                    width="16"
                    height="16"
                  />
                ) : (
                  'LogOut'
                )}
              </Button>
            </MenuItem>
          </Menu>
        </>
      )}
    </>
  );
};

export default UserMenu;
