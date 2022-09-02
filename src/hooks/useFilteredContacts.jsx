import { getFilterValue } from 'redux/contacts';
import { useContacts } from './useContacts';
import { useSelector } from 'react-redux';

const useFilteredContacts = () => {
  const data = useContacts();
  const filterValue = useSelector(getFilterValue).toLowerCase();

  return filterValue
    ? data.filter(item =>
        item.name
          .toLowerCase()
          .split(' ')
          .some(element => element.includes(filterValue))
      )
    : data;
};

export default useFilteredContacts;
