import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProTip from '../../ProTip';
import Copyright from '../miscellaneous/copyright';
import { useSignOut, useAuthUser } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';
import apiDomain from '../../config/apiConfig';

export default function Home() {
    const signOut = useSignOut();
    const navigate = useNavigate();
    const auth = useAuthUser()
    
    const getStandings = async () => {
      // axios.defaults.headers.common['Authorization'] = "Bearer mytoken" + auth()?.user
      
      const response = await axios.get(apiDomain+"/v1/brackets/standings", {
        withCredentials: true,
      });
      console.log("Response: ", response);
    };

    const signout = () => {
        signOut();
        navigate("/login");
    }

    return(
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
          <Copyright />
        </Box>
      </Container>
    );
  }