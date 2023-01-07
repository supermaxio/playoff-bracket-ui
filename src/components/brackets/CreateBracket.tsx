
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Copyright from '../miscellaneous/copyright';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
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
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Box>
                    <ToggleSelection />
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container >
    );
}