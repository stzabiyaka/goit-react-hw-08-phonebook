import { Routes, Route } from 'react-router-dom';
import { Application } from './App.styled';
import SharedLayout from 'components/SharedLayout';
import HomeViev from 'views/HomeViev';
import ContactsView from 'views/ContactsView';
import LoginViev from 'views/LoginViev';
import RegisterView from 'views/RegisterView';

const App = () => {
  return (
    <Application>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomeViev />} />
          <Route path="contacts" element={<ContactsView />} />
          <Route path="login" element={<LoginViev />} />
          <Route path="register" element={<RegisterView />} />
        </Route>
      </Routes>
    </Application>
  );
};

export default App;
