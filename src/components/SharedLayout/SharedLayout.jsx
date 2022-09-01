import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
import { Footer } from 'components/Footer';
import { Suspense } from 'react';
import { Circles } from 'react-loader-spinner';

const SharedLayout = () => {
  return (
    <>
      <AppBar title="PhoneBook" />
      <Suspense fallback={<Circles width="100" height="100" color="blue" />}>
        <Outlet />
      </Suspense>
      <Footer name="Stanislav Zabiyaka" href="https://github.com/stzabiyaka/" />
    </>
  );
};

export default SharedLayout;
