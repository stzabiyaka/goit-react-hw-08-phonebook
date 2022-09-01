import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserToken } from 'redux/userState';

const PrivateRoute = ({ children, redirectTo }) => {
  const isLogged = useSelector(getUserToken);
  return isLogged ? children : <Navigate to={redirectTo} replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default PrivateRoute;
