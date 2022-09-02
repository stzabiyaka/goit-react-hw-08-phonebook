import { Routes, Route, Navigate } from 'react-router-dom';
import { getUserToken, useGetCurrentUserQuery } from 'redux/userState';
import { lazy, Suspense } from 'react';
import { Application } from './App.styled';
import PrivateRoutes from 'components/PrivateRoutes';
import PublicRoutes from 'components/PublicRoutes';
import { useSelector } from 'react-redux';
const SharedLayout = lazy(() => import('components/SharedLayout'));
const HomeViev = lazy(() => import('views/HomeViev'));
const ContactsView = lazy(() => import('views/ContactsView'));
const LoginViev = lazy(() => import('views/LoginViev'));
const RegisterView = lazy(() => import('views/RegisterView'));

const App = () => {
  const isLogged = useSelector(getUserToken);
  useGetCurrentUserQuery(undefined, { skip: !isLogged });
  return (
    <Application>
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomeViev />} />
            <Route path="/" element={<PrivateRoutes />}>
              <Route path="contacts" element={<ContactsView />} />
            </Route>
            <Route
              path="/"
              element={<PublicRoutes redirectTo="/contacts" restricted />}
            >
              <Route path="login" element={<LoginViev />} />
              <Route path="register" element={<RegisterView />} />
            </Route>
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </Application>
  );
};

export default App;
