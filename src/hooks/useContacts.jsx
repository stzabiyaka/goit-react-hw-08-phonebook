import { useGetContactsQuery } from 'redux/contacts';
import { useSelector } from 'react-redux';
import { getUserToken } from 'redux/userState';

const useContacts = () => {
  const isLogged = useSelector(getUserToken);
  const { data = [] } = useGetContactsQuery(undefined, {
    skip: !isLogged,
    refetchOnMountOrArgChange: true,
  });

  return data;
};

export { useContacts };
