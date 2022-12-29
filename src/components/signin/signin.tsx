
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../miscellaneous/copyright';
import { useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import apiDomain from '../../config/apiConfig';


const theme = createTheme();

export default function SignIn(props: any) {
    const [error, setError] = useState("")
    const signIn = useSignIn();
    const navigate = useNavigate();

    const onSubmit = async (values: any) => {
        console.log("Values: ", values);
        setError("")

        try {
            const response = await axios.post(
              apiDomain+"/v1/login",
              values
            );

            signIn({
                token: response.data.token,
                expiresIn: 300,
                tokenType: "Bearer",
                authState: { username: values.username }
            });

            navigate("/")
        } catch (err) {
            if (err && err instanceof AxiosError)
              setError(err.response?.data.message);
            else if (err && err instanceof Error) setError(err.message);
      
            console.log("Error: ", err);
        }
    }

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit,
    });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              value={formik.values.username}
              onChange={formik.handleChange}
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              value={formik.values.password}
              onChange={formik.handleChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}