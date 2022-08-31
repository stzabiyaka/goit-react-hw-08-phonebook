const { AppLink } = require('utilities');
const { AuthNavContainer, AuthNavItem } = require('./AuthNav.styled');

const AuthNav = () => {
  return (
    <AuthNavContainer>
      <AuthNavItem>
        <AppLink to="login">Login</AppLink>
        <AppLink to="register">Register</AppLink>
      </AuthNavItem>
    </AuthNavContainer>
  );
};

export default AuthNav;
