import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserToken } from 'redux/userState';

const PublicRoutes = ({ redirectTo = '/', restricted = false }) => {
  const isLogged = useSelector(getUserToken);
  const shouldRedirect = isLogged && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : <Outlet />;
};

PublicRoutes.propTypes = {
  redirectTo: PropTypes.string,
  restricted: PropTypes.bool,
};

export default PublicRoutes;
