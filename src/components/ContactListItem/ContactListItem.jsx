import PropTypes from 'prop-types';
import { Circles } from 'react-loader-spinner';
import { useDeleteContactMutation } from 'redux/contacts';
import { Button } from '@mui/material';
import { Card, CardContent, Typography } from '@mui/material';
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';
import { theme } from 'utilities';

export function ContactListItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const handleClick = () => {
    deleteContact(id);
  };
  return (
    <Card>
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{ fontSize: 16, mr: 1, display: 'flex', alignItems: 'center' }}
        >
          <ContactPhoneRoundedIcon
            sx={{
              width: 24,
              height: 24,
              mr: 1,
            }}
            color="primary"
          />
          <b>{name}:</b>&nbsp;{number}
        </Typography>
        <Button
          type="button"
          onClick={handleClick}
          disabled={isDeleting}
          variant="contained"
        >
          {isDeleting ? (
            <Circles
              color={theme.palette.triadic.main}
              width="16"
              height="16"
            />
          ) : (
            'Delete'
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
