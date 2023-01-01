
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
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
import GetIcon from '../icons/icons';

const theme = createTheme();

export default function CreateBracket() {
    const [alignment, setAlignment] = React.useState('web');
    const icon = GetIcon;
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

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

    const onSubmit = async (values: any) => {
        console.log("Values: ", values);
        setErrMsg("");

        try {
            const response = await axiosPrivate.post(
                "/brackets/",
                values,
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            console.log(JSON.stringify(response?.data));
        } catch (err: any) {
            if (!err?.response) {
                setErrMsg('No server response');
            } else if (err && err instanceof Error) {
                setErrMsg(err.message);
                console.log("Error: ", err);
            } else {
                setErrMsg('Login failed');
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
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                        <Box>
                            <Typography>{errMsg}</Typography>
                        </Box>

                        <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                        >
                            <ToggleButton value="afc_seventh">
                                <img
                                    src={icon("Dolphins")}
                                    height={25}
                                    alt={"🐬"}
                                    loading="lazy"
                                />
                            </ToggleButton>
                            <ToggleButton value="afc_second">
                                <img
                                    src={icon("Chiefs")}
                                    height={25}
                                    alt={"🪓"}
                                    loading="lazy"
                                />
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                        >
                            <ToggleButton value="afc_sixth"><img
                                    src={icon("Chargers")}
                                    height={25}
                                    alt={"🪓"}
                                    loading="lazy"
                                /></ToggleButton>
                            <ToggleButton value="afc_third"><img
                                    src={icon("Bengals")}
                                    height={25}
                                    alt={"🪓"}
                                    loading="lazy"
                                /></ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                        >
                            <ToggleButton value="afc_fifth"><img
                                    src={icon("Ravens")}
                                    height={25}
                                    alt={"🪓"}
                                    loading="lazy"
                                /></ToggleButton>
                            <ToggleButton value="afc_fourth"><img
                                    src={icon("Jaguars")}
                                    height={25}
                                    alt={"🪓"}
                                    loading="lazy"
                                /></ToggleButton>
                        </ToggleButtonGroup>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
                <Box>

                    <Button
                        onClick={signout}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Out
                    </Button>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}