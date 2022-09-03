import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer';
import { Suspense } from 'react';
import { Circles } from 'react-loader-spinner';
import AppMenuBar from 'components/AppMenuBar';
import { theme } from 'utilities';

const SharedLayout = () => {
  return (
    <>
      <AppMenuBar />
      <Suspense
        fallback={
          <Circles
            width="100"
            height="100"
            color={theme.palette.triadic.main}
          />
        }
      >
        <Outlet />
      </Suspense>
      <Footer name="Stanislav Zabiyaka" href="https://github.com/stzabiyaka/" />
    </>
  );
};

export default SharedLayout;
