import { Main } from 'utilities';
import AuthForm from 'components/AuthForm';

const RegisterView = () => {
  return (
    <Main>
      <AuthForm action="signUp" />
    </Main>
  );
};

export default RegisterView;
