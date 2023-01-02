
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

export default function ToggleSelection() {
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [afcTeams, setAfcTeams] = useState<Team[]>([]);
    const [nfcTeams, setNfcTeams] = useState<Team[]>([]);

    const axiosPrivate = useAxiosPrivate();
    const { setAuth }: any = useAuth();

    const [alignment, setAlignment] = React.useState<string>();
    const icon = GetIcon;
    const emoji = GetEmoji;
    const handleChange = (

        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

    const control = {
        value: alignment,
        onChange: handleChange,
        exclusive: true,
    };

    useEffect(() => {
        setErrMsg('');
    }, []);

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



    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (

        <Box>
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
                                        <ToggleButtonGroup {...control}>

                                            <ToggleButton value="afc_seventh">
                                                <img
                                                    src={icon(afcTeams[6].name)}
                                                    height={35}
                                                    alt={emoji(afcTeams[6].name)}
                                                    loading="lazy"
                                                />
                                            </ToggleButton>
                                            <ToggleButton value="afc_second">
                                                <img
                                                    src={icon(afcTeams[1].name)}
                                                    height={35}
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
                                        <ToggleButtonGroup {...control}>

                                            <ToggleButton value="afc_sixth">
                                                <img
                                                    src={icon(afcTeams[5].name)}
                                                    height={35}
                                                    alt={emoji(afcTeams[5].name)}
                                                    loading="lazy"
                                                />
                                            </ToggleButton>
                                            <ToggleButton value="afc_third">
                                                <img
                                                    src={icon(afcTeams[2].name)}
                                                    height={35}
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
                                        <ToggleButtonGroup {...control}>

                                            <ToggleButton value="afc_fifth">
                                                <img
                                                    src={icon(afcTeams[4].name)}
                                                    height={35}
                                                    alt={emoji(afcTeams[4].name)}
                                                    loading="lazy"
                                                />
                                            </ToggleButton>
                                            <ToggleButton value="afc_fourth">
                                                <img
                                                    src={icon(afcTeams[3].name)}
                                                    height={35}
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
                                        <ToggleButtonGroup {...control}>

                                            <ToggleButton value="nfc_seventh">
                                                <img
                                                    src={icon(nfcTeams[6].name)}
                                                    height={35}
                                                    alt={emoji(nfcTeams[6].name)}
                                                    loading="lazy"
                                                />
                                            </ToggleButton>
                                            <ToggleButton value="nfc_second">
                                                <img
                                                    src={icon(nfcTeams[1].name)}
                                                    height={35}
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
                                        <ToggleButtonGroup {...control}>

                                            <ToggleButton value="nfc_sixth">
                                                <img
                                                    src={icon(nfcTeams[5].name)}
                                                    height={35}
                                                    alt={emoji(nfcTeams[5].name)}
                                                    loading="lazy"
                                                />
                                            </ToggleButton>
                                            <ToggleButton value="nfc_third">
                                                <img
                                                    src={icon(nfcTeams[2].name)}
                                                    height={35}
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
                                        <ToggleButtonGroup {...control}>

                                            <ToggleButton value="nfc_fifth">
                                                <img
                                                    src={icon(nfcTeams[4].name)}
                                                    height={35}
                                                    alt={emoji(nfcTeams[4].name)}
                                                    loading="lazy"
                                                />
                                            </ToggleButton>
                                            <ToggleButton value="nfc_fourth">
                                                <img
                                                    src={icon(nfcTeams[3].name)}
                                                    height={35}
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

    );
}
