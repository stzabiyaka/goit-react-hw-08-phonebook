import { useSelector } from 'react-redux';
import { getUserToken } from 'redux/userState';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const isLogged = useSelector(getUserToken);

  return isLogged ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
