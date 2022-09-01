import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserToken } from 'redux/userState';

const PublicRoute = ({ children, redirectTo = '/', restricted = false }) => {
  const isLogged = useSelector(getUserToken);
  const shouldRedirect = isLogged && restricted && redirectTo;
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
  redirectTo: PropTypes.string,
  restricted: PropTypes.bool,
};

export default PublicRoute;
