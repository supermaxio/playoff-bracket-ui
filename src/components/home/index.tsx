import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProTip from '../../ProTip';
import Copyright from '../miscellaneous/copyright';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import apiDomain from '../../config/apiConfig';
import useAuth from '../../hooks/useAuth';
import useRefreshToken from '../../hooks/useRefreshToken';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

export default function Home() {
  // const signOut = useSignOut();
  const navigate = useNavigate();
  const { setAuth }: any = useAuth();
  // const auth = useAuthUser()
  const refreshToken = useRefreshToken();
  const axiosPrivate = useAxiosPrivate();

  const getStandings = async () => {
    // axios.defaults.headers.common['Authorization'] = "Bearer mytoken" + auth()?.user

    try {
      const response = await axiosPrivate.get(apiDomain + "/v1/brackets/standings", {
        withCredentials: true,
      });
  
      console.log("Response: ", response);
    } catch (err) {

    }
  };

  const signout = () => {
    // signOut();
    setAuth({});
    navigate("/login");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example with styled-components and TypeScript
        </Typography>
        <ProTip />

        <Button
          onClick={getStandings}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Refresh Standings
        </Button>
        <Button
          onClick={signout}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Out
        </Button>
        <Button
          onClick={refreshToken}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Refresh
        </Button>
        <Copyright />
      </Box>
    </Container>
  );
}