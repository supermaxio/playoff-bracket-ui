
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
import GetIcon, { GetEmoji } from '../icons/icons';
import { Grid, Paper, styled } from '@mui/material';
import { Team } from '../../objects/Team';

const theme = createTheme();

export default function CreateBracket() {

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [afcTeams, setAfcTeams] = useState<Team[]>([]);
    const [nfcTeams, setNfcTeams] = useState<Team[]>([]);

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

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getTeams = async () => {
            try {
                const response = await axiosPrivate.get(
                    "/brackets/playoff_standings",
                    {
                        signal: controller.signal,
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                );

                console.log(JSON.stringify(response?.data[0].teams));
                console.log(JSON.stringify(response?.data[1].teams));
                isMounted && setAfcTeams(response.data[0].teams);
                isMounted && setNfcTeams(response.data[1].teams);
            } catch (err: any) {
                if (!err?.response) {
                    setErrMsg('No server response');
                } else if (err && err instanceof Error) {
                    setErrMsg(err.message);
                    console.error("Error: ", err);
                } else {
                    setErrMsg('Login failed');
                }
            }
        };

        getTeams();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, []);

    const [alignment1, setAlignment1] = React.useState('Dolphins');
    const [alignment2, setAlignment2] = React.useState('Chargers');
    const [alignment3, setAlignment3] = React.useState('Ravens');
    const icon = GetIcon;
    const emoji = GetEmoji;
    const handleChange1 = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment1: string,
    ) => {
        setAlignment1(newAlignment1);
    };
    const handleChange2 = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment2: string,
    ) => {
        setAlignment2(newAlignment2);
    };
    const handleChange3 = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment3: string,
    ) => {
        setAlignment3(newAlignment3);
    };

    const control1 = {
        value: alignment1,
        onChange: handleChange1,
        exclusive: true,
    };
    const control2 = {
        value: alignment2,
        onChange: handleChange2,
        exclusive: true,
    };
    const control3 = {
        value: alignment3,
        onChange: handleChange3,
        exclusive: true,
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


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate>
                        <Box>
                            <Typography>{errMsg}</Typography>
                        </Box>

                        <Grid container spacing={2}>
                            <Grid>
                                <Item>
                                    <Grid>
                                        <Grid>

                                            <Box>
                                                <Typography>AFC Game 1</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid>
                                            {afcTeams?.length
                                                ? (
                                                    <ToggleButtonGroup {...control1}>

                                                        <ToggleButton value="afc_seventh">
                                                            <img
                                                                src={icon(afcTeams[6].name)}
                                                                height={25}
                                                                alt={emoji(afcTeams[6].name)}
                                                                loading="lazy"
                                                            />
                                                        </ToggleButton>
                                                        <ToggleButton value="afc_second">
                                                            <img
                                                                src={icon(afcTeams[1].name)}
                                                                height={25}
                                                                alt={emoji(afcTeams[1].name)}
                                                                loading="lazy"
                                                            />
                                                        </ToggleButton>
                                                    </ToggleButtonGroup>
                                                ) : <p>No teams to display</p>
                                            }
                                        </Grid>
                                    </Grid>
                                </Item>
                            </Grid>
                            <Grid>
                                <Item>
                                    <Grid>
                                        <Grid>
                                            <Box>
                                                <Typography>AFC Game 2</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid>
                                            {afcTeams?.length
                                                ? (
                                                    <ToggleButtonGroup {...control1}>

                                                        <ToggleButton value="afc_sixth">
                                                            <img
                                                                src={icon(afcTeams[5].name)}
                                                                height={25}
                                                                alt={emoji(afcTeams[5].name)}
                                                                loading="lazy"
                                                            />
                                                        </ToggleButton>
                                                        <ToggleButton value="afc_third">
                                                            <img
                                                                src={icon(afcTeams[2].name)}
                                                                height={25}
                                                                alt={emoji(afcTeams[2].name)}
                                                                loading="lazy"
                                                            />
                                                        </ToggleButton>
                                                    </ToggleButtonGroup>
                                                ) : <p>No teams to display</p>
                                            }
                                        </Grid>
                                    </Grid>
                                </Item>
                            </Grid>
                            <Grid>
                                <Item>
                                    <Grid>
                                        <Grid>
                                            <Box>
                                                <Typography>AFC Game 3</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid>
                                            {afcTeams?.length
                                                ? (
                                                    <ToggleButtonGroup {...control1}>

                                                        <ToggleButton value="afc_fifth">
                                                            <img
                                                                src={icon(afcTeams[4].name)}
                                                                height={25}
                                                                alt={emoji(afcTeams[4].name)}
                                                                loading="lazy"
                                                            />
                                                        </ToggleButton>
                                                        <ToggleButton value="afc_fourth">
                                                            <img
                                                                src={icon(afcTeams[3].name)}
                                                                height={25}
                                                                alt={emoji(afcTeams[3].name)}
                                                                loading="lazy"
                                                            />
                                                        </ToggleButton>
                                                    </ToggleButtonGroup>
                                                ) : <p>No teams to display</p>
                                            }
                                        </Grid>
                                    </Grid>
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid>
                                <Item>
                                    <Grid>
                                        <Grid>

                                            <Box>
                                                <Typography>NFC Game 1</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid>
                                            {nfcTeams?.length
                                                ? (
                                                    <ToggleButtonGroup {...control1}>

                                                        <ToggleButton value="nfc_seventh">
                                                            <img
                                                                src={icon(nfcTeams[6].name)}
                                                                height={25}
                                                                alt={emoji(nfcTeams[6].name)}
                                                                loading="lazy"
                                                            />
                                                        </ToggleButton>
                                                        <ToggleButton value="nfc_second">
                                                            <img
                                                                src={icon(nfcTeams[1].name)}
                                                                height={25}
                                                                alt={emoji(nfcTeams[1].name)}
                                                                loading="lazy"
                                                            />
                                                        </ToggleButton>
                                                    </ToggleButtonGroup>
                                                ) : <p>No teams to display</p>
                                            }
                                        </Grid>
                                    </Grid>
                                </Item>
                            </Grid>
                            <Grid>
                                <Item>
                                    <Grid>
                                        <Grid>
                                            <Box>
                                                <Typography>NFC Game 2</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid>
                                            {nfcTeams?.length
                                                ? (
                                                    <ToggleButtonGroup {...control1}>

                                                        <ToggleButton value="nfc_sixth">
                                                            <img
                                                                src={icon(nfcTeams[5].name)}
                                                                height={25}
                                                                alt={emoji(nfcTeams[5].name)}
                                                                loading="lazy"
                                                            />
                                                        </ToggleButton>
                                                        <ToggleButton value="nfc_third">
                                                            <img
                                                                src={icon(nfcTeams[2].name)}
                                                                height={25}
                                                                alt={emoji(nfcTeams[2].name)}
                                                                loading="lazy"
                                                            />
                                                        </ToggleButton>
                                                    </ToggleButtonGroup>
                                                ) : <p>No teams to display</p>
                                            }
                                        </Grid>
                                    </Grid>
                                </Item>
                            </Grid>
                            <Grid>
                                <Item>
                                    <Grid>
                                        <Grid>
                                            <Box>
                                                <Typography>AFC Game 2</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid>
                                            {nfcTeams?.length
                                                ? (
                                                    <ToggleButtonGroup {...control1}>

                                                        <ToggleButton value="nfc_fifth">
                                                            <img
                                                                src={icon(nfcTeams[4].name)}
                                                                height={25}
                                                                alt={emoji(nfcTeams[4].name)}
                                                                loading="lazy"
                                                            />
                                                        </ToggleButton>
                                                        <ToggleButton value="nfc_fourth">
                                                            <img
                                                                src={icon(nfcTeams[3].name)}
                                                                height={25}
                                                                alt={emoji(nfcTeams[3].name)}
                                                                loading="lazy"
                                                            />
                                                        </ToggleButton>
                                                    </ToggleButtonGroup>
                                                ) : <p>No teams to display</p>
                                            }
                                        </Grid>
                                    </Grid>
                                </Item>
                            </Grid>
                        </Grid>
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

                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Out
                    </Button>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container >
        </ThemeProvider >
    );
}