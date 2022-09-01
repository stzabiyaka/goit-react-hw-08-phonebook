import { Main } from 'utilities';
import AuthForm from 'components/AuthForm';

const LoginView = () => {
  return (
    <Main>
      <AuthForm action="signIn" />
    </Main>
  );
};

export default LoginView;
