
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { useFormik } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useSignIn } from 'react-auth-kit';

export default function SignIn(props: any) {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const signIn = useSignIn();
  const { setAuth }: any = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const onSubmit = async (values: any) => {
    console.log("Values: ", values);
    setErrMsg("");

    try {
      const response = await axios.post(
        "/login",
        values,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.token;
      const username = values.username
      // const roles = response?.data?.roles;

      setAuth({ username, accessToken });

      signIn({
        token: response?.data?.token,
        tokenType: 'Bearer',
        expiresIn: 43200,
        authState: { username: values.username }
      })

      setUser('');
      setPwd('');
      navigate(from, { replace: true });
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg('No server response');
      } else if (err && err instanceof Error) {
        setErrMsg("Incorrect username and password");
        console.log("Error: ", err);
      } else {
        setErrMsg('Login failed');
        console.log("Error: ", err);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit,
  });

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 10,
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
            <Box>
              <Typography>{errMsg}</Typography>
            </Box>
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
      </Container>
  );
}