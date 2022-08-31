import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
import { Footer } from 'components/Footer';

const SharedLayout = () => {
  return (
    <>
      <AppBar title="PhoneBook" />
      <Outlet />
      <Footer name="Stanislav Zabiyaka" href="https://github.com/stzabiyaka/" />
    </>
  );
};

export default SharedLayout;
