import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Application } from './App.styled';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
const SharedLayout = lazy(() => import('components/SharedLayout'));
const HomeViev = lazy(() => import('views/HomeViev'));
const ContactsView = lazy(() => import('views/ContactsView'));
const LoginViev = lazy(() => import('views/LoginViev'));
const RegisterView = lazy(() => import('views/RegisterView'));

const App = () => {
  return (
    <Application>
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomeViev />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsView />
                </PrivateRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <LoginViev />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </Application>
  );
};

export default App;
