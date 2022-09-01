import { getFilterValue, useGetContactsQuery } from 'redux/contacts';
import { useSelector } from 'react-redux';

const useFilteredContacts = () => {
  const { data = [] } = useGetContactsQuery();
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
