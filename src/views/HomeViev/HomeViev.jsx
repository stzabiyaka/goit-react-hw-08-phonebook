import { AppLink, Main } from 'utilities';
import { useSelector } from 'react-redux';
import { getUserToken, getUserName } from 'redux/userState';
import { Card, CardContent, Typography } from '@mui/material';
const Homeview = () => {
  const isLogged = useSelector(getUserToken);
  const name = useSelector(getUserName);
  return (
    <Main>
      <Card
        raised
        sx={{
          mt: 2,
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: '2em', fontWeight: 500 }}
            align="center"
            color="primary"
            gutterBottom
          >
            Welcome{isLogged && `, ${name},`} to Phonebook - your application to
            manage contacts.
          </Typography>
          {!isLogged && (
            <>
              <Typography
                sx={{ fontSize: 24 }}
                color="text.secondary"
                align="center"
              >
                Please,{' '}
                {
                  <AppLink to="login" contrast={true.toString()}>
                    sign in
                  </AppLink>
                }{' '}
                to access your personal phonebook.
              </Typography>
              <Typography
                sx={{ fontSize: 24 }}
                color="text.secondary"
                align="center"
              >
                If You don't have a phonebook yet, please,{' '}
                {
                  <AppLink to="register" contrast={true.toString()}>
                    register
                  </AppLink>
                }
                {'.'}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </Main>
  );
};

export default Homeview;
