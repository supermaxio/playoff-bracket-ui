
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../miscellaneous/copyright';
import { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import GetIcon, { GetEmoji } from '../icons/icons';
import { Grid, Paper } from '@mui/material';
import { Team } from '../../objects/Team';
import ToggleSelection from '../toggles/ToggleSelection';


export default function CreateBracket() {

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const axiosPrivate = useAxiosPrivate();
    const { setAuth }: any = useAuth();
    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/"

    useEffect(() => {
        setErrMsg('');
    }, []);

    const signout = () => {
        // signOut();
        setAuth({});
        navigate("/login");
    };


    return (
        <Container component="main" maxWidth="lg">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Box>
                    <ToggleSelection />
                </Box>
                <Box>

                    <Button
                        onClick={signout}
                        type="submit"

                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Out
                    </Button>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container >
    );
}