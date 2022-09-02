import PropTypes from 'prop-types';
import { Circles } from 'react-loader-spinner';
import { useDeleteContactMutation } from 'redux/contacts';
import { ListItem } from './ContactListItem.styled';
import { Button } from 'utilities';
import { useContacts } from 'hooks';

export function ContactListItem({ id }) {
  const data = useContacts();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const { name, number } = data.find(item => item.id === id);
  const handleClick = () => {
    deleteContact(id);
  };
  return (
    <ListItem>
      {data && (
        <>
          {name}: {number}{' '}
          <Button type="button" onClick={handleClick} disabled={isDeleting}>
            {isDeleting ? (
              <Circles color="#8d8d8d" width="16" height="16" />
            ) : (
              'Delete'
            )}
          </Button>
        </>
      )}
    </ListItem>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
};
