import PropTypes from 'prop-types';
import { Circles } from 'react-loader-spinner';
import { useDeleteContactMutation, useGetContactsQuery } from 'redux/contacts';
import { ListItem } from './ContactListItem.styled';
import { Button } from 'utilities';

export function ContactListItem({ id }) {
  const { data, isError } = useGetContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const { name, number } = data.find(item => item.id === id);
  const handleClick = () => {
    deleteContact(id);
  };
  return (
    <ListItem>
      {data && !isError && (
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
      {isError && <p>Sorry, contact not found</p>}
    </ListItem>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
};
