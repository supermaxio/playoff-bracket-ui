
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
import { Grid, Paper, styled, TextField } from '@mui/material';
import { Team } from '../../objects/Team';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: 1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 120
}));

export default function ToggleSelection() {
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [afcTeams, setAfcTeams] = useState<Team[]>([]);
    const [nfcTeams, setNfcTeams] = useState<Team[]>([]);
    const [afcWC1Winner, setAfcWC1Winner] = useState<string>();
    const [afcWC2Winner, setAfcWC2Winner] = useState<string>();
    const [afcWC3Winner, setAfcWC3Winner] = useState<string>();
    const [afcDR1Winner, setAfcDR1Winner] = useState<string>();
    const [afcDR2Winner, setAfcDR2Winner] = useState<string>();
    const [afcCCWinner, setAfcCCWinner] = useState<string>();
    const [nfcWC1Winner, setNfcWC1Winner] = useState<string>();
    const [nfcWC2Winner, setNfcWC2Winner] = useState<string>();
    const [nfcWC3Winner, setNfcWC3Winner] = useState<string>();
    const [nfcDR1Winner, setNfcDR1Winner] = useState<string>();
    const [nfcDR2Winner, setNfcDR2Winner] = useState<string>();
    const [nfcCCWinner, setNfcCCWinner] = useState<string>();
    const [sbWinner, setSBWinner] = useState<string>();

    const [afcDRLast, setAfcDRLast] = useState<string>("AFC");
    const [afcDRAway, setAfcDRAway] = useState<string>("AFC");
    const [afcDRHome, setAfcDRHome] = useState<string>("AFC");
    const [afcCCAway, setAfcCCAway] = useState<string>("AFC");
    const [afcCCHome, setAfcCCHome] = useState<string>("AFC");

    const [afcSB, setAfcSB] = useState<string>("AFC");
    const [nfcSB, setNfcSB] = useState<string>("NFC");

    const [nfcDRLast, setNfcDRLast] = useState<string>("NFC");
    const [nfcDRAway, setNfcDRAway] = useState<string>("NFC");
    const [nfcDRHome, setNfcDRHome] = useState<string>("NFC");
    const [nfcCCAway, setNfcCCAway] = useState<string>("NFC");
    const [nfcCCHome, setNfcCCHome] = useState<string>("NFC");

    const [afcDRDisabled, setAfcDRDisabled] = useState(true);
    const [nfcDRDisabled, setNfcDRDisabled] = useState(true);
    const [afcCCDisabled, setAfcCCDisabled] = useState(true);
    const [nfcCCDisabled, setNfcCCDisabled] = useState(true);
    const [sbDisabled, setSBDisabled] = useState(true);

    const axiosPrivate = useAxiosPrivate();
    const { setAuth }: any = useAuth();
    const navigate = useNavigate();
    const icon = GetIcon;
    const emoji = GetEmoji;


    const handleAfcWC1Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleAfcWC1Change and the value is: ${newAlignment}`); setAfcWC1Winner(newAlignment); };
    const handleAfcWC2Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleAfcWC2Change and the value is: ${newAlignment}`); setAfcWC2Winner(newAlignment); };
    const handleAfcWC3Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleAfcWC3Change and the value is: ${newAlignment}`); setAfcWC3Winner(newAlignment); };
    const handleAfcDR1Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleAfcDR1Change and the value is: ${newAlignment}`); setAfcDR1Winner(newAlignment); };
    const handleAfcDR2Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleAfcDR2Change and the value is: ${newAlignment}`); setAfcDR2Winner(newAlignment); };
    const handleAfcCCChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleAfcCCChange  and the value is: ${newAlignment}`); setAfcCCWinner(newAlignment); };
    const handleNfcWC1Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleNfcWC1Change and the value is: ${newAlignment}`); setNfcWC1Winner(newAlignment); };
    const handleNfcWC2Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleNfcWC2Change and the value is: ${newAlignment}`); setNfcWC2Winner(newAlignment); };
    const handleNfcWC3Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleNfcWC3Change and the value is: ${newAlignment}`); setNfcWC3Winner(newAlignment); };
    const handleNfcDR1Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleNfcDR1Change and the value is: ${newAlignment}`); setNfcDR1Winner(newAlignment); };
    const handleNfcDR2Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleNfcDR2Change and the value is: ${newAlignment}`); setNfcDR2Winner(newAlignment); };
    const handleNfcCCChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleNfcCCChange  and the value is: ${newAlignment}`); setNfcCCWinner(newAlignment); };
    const handleSBChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleSBChange  and the value is: ${newAlignment}`); setSBWinner(newAlignment); };

    const afcWC1Control = { value: afcWC1Winner, onChange: handleAfcWC1Change, exclusive: true, };
    const afcWC2Control = { value: afcWC2Winner, onChange: handleAfcWC2Change, exclusive: true, };
    const afcWC3Control = { value: afcWC3Winner, onChange: handleAfcWC3Change, exclusive: true, };
    const nfcWC1Control = { value: nfcWC1Winner, onChange: handleNfcWC1Change, exclusive: true, };
    const nfcWC2Control = { value: nfcWC2Winner, onChange: handleNfcWC2Change, exclusive: true, };
    const nfcWC3Control = { value: nfcWC3Winner, onChange: handleNfcWC3Change, exclusive: true, };

    const afcDR1Control = { value: afcDR1Winner, onChange: handleAfcDR1Change, exclusive: true, disabled: afcDRDisabled};
    const afcDR2Control = { value: afcDR2Winner, onChange: handleAfcDR2Change, exclusive: true, disabled: afcDRDisabled};
    const afcCCControl = { value: afcCCWinner, onChange: handleAfcCCChange, exclusive: true,    disabled: afcCCDisabled};
    const nfcDR1Control = { value: nfcDR1Winner, onChange: handleNfcDR1Change, exclusive: true, disabled: nfcDRDisabled};
    const nfcDR2Control = { value: nfcDR2Winner, onChange: handleNfcDR2Change, exclusive: true, disabled: nfcDRDisabled};
    const nfcCCControl = { value: nfcCCWinner, onChange: handleNfcCCChange, exclusive: true,    disabled: nfcCCDisabled};
    const sbControl = { value: sbWinner, onChange: handleSBChange, exclusive: true,             disabled: sbDisabled};
    const fssControl = { disabled: sbDisabled }

    const afcDRLastControl = { src: icon(afcDRLast), alt: emoji(afcDRLast) };
    const afcDRAwayControl = { src: icon(afcDRAway), alt: emoji(afcDRAway) };
    const afcDRHomeControl = { src: icon(afcDRHome), alt: emoji(afcDRHome) };
    const afcCCAwayControl = { src: icon(afcCCAway), alt: emoji(afcCCAway) };
    const afcCCHomeControl = { src: icon(afcCCHome), alt: emoji(afcCCHome) };

    const nfcDRLastControl = { src: icon(nfcDRLast), alt: emoji(nfcDRLast) };
    const nfcDRAwayControl = { src: icon(nfcDRAway), alt: emoji(nfcDRAway) };
    const nfcDRHomeControl = { src: icon(nfcDRHome), alt: emoji(nfcDRHome) };
    const nfcCCAwayControl = { src: icon(nfcCCAway), alt: emoji(nfcCCAway) };
    const nfcCCHomeControl = { src: icon(nfcCCHome), alt: emoji(nfcCCHome) };

    const afcSBControl = { src: icon(afcSB), alt: emoji(afcSB) };
    const nfcSBControl = { src: icon(nfcSB), alt: emoji(nfcSB) };

    useEffect(() => {
        setErrMsg('');
    }, []);

    useEffect(() => {
        if (afcWC1Winner && afcWC2Winner && afcWC3Winner) {
            console.log(`AFC WC values selected GAME1: ${afcWC1Winner} GAME2: ${afcWC2Winner} GAME 3: ${afcWC3Winner}`);

            switch (true) {
                case (afcWC1Winner == "afc_rank_6" && afcWC2Winner == "afc_rank_5" && afcWC3Winner == "afc_rank_4"): setAfcDRLast(afcTeams[6].name); setAfcDRAway(afcTeams[5].name); setAfcDRHome(afcTeams[4].name); break;
                case (afcWC1Winner == "afc_rank_6" && afcWC2Winner == "afc_rank_5" && afcWC3Winner == "afc_rank_3"): setAfcDRLast(afcTeams[6].name); setAfcDRAway(afcTeams[5].name); setAfcDRHome(afcTeams[3].name); break;
                case (afcWC1Winner == "afc_rank_6" && afcWC2Winner == "afc_rank_2" && afcWC3Winner == "afc_rank_4"): setAfcDRLast(afcTeams[6].name); setAfcDRHome(afcTeams[2].name); setAfcDRAway(afcTeams[4].name); break;
                case (afcWC1Winner == "afc_rank_6" && afcWC2Winner == "afc_rank_2" && afcWC3Winner == "afc_rank_3"): setAfcDRLast(afcTeams[6].name); setAfcDRHome(afcTeams[2].name); setAfcDRAway(afcTeams[3].name); break;
                case (afcWC1Winner == "afc_rank_1" && afcWC2Winner == "afc_rank_5" && afcWC3Winner == "afc_rank_4"): setAfcDRHome(afcTeams[1].name); setAfcDRLast(afcTeams[5].name); setAfcDRAway(afcTeams[4].name); break;
                case (afcWC1Winner == "afc_rank_1" && afcWC2Winner == "afc_rank_5" && afcWC3Winner == "afc_rank_3"): setAfcDRHome(afcTeams[1].name); setAfcDRLast(afcTeams[5].name); setAfcDRAway(afcTeams[3].name); break;
                case (afcWC1Winner == "afc_rank_1" && afcWC2Winner == "afc_rank_2" && afcWC3Winner == "afc_rank_4"): setAfcDRHome(afcTeams[1].name); setAfcDRAway(afcTeams[2].name); setAfcDRLast(afcTeams[4].name); break;
                case (afcWC1Winner == "afc_rank_1" && afcWC2Winner == "afc_rank_2" && afcWC3Winner == "afc_rank_3"): setAfcDRHome(afcTeams[1].name); setAfcDRAway(afcTeams[2].name); setAfcDRLast(afcTeams[3].name); break;
                default: setAfcDRLast("AFC"); setAfcDRAway("AFC"); setAfcDRHome("AFC");
            }

            setAfcDRDisabled(false)
        }
    }, [afcWC1Winner, afcWC2Winner, afcWC3Winner, afcDR1Winner, afcDR2Winner, afcCCWinner, afcDRLast, afcDRAway, afcDRHome, afcCCAway, afcCCHome]);


    useEffect(() => {
        if (afcDR1Winner && afcDR2Winner && afcWC1Winner && afcWC2Winner && afcWC3Winner) {
            console.log(`AFC DR values selected GAME1: ${afcDR1Winner} GAME2: ${afcDR2Winner}`);

            switch (true) {
                case (afcDR1Winner == "afc_rank_0" && afcDR2Winner == "afc_dr_away"): setAfcCCHome(afcTeams[0].name); setAfcCCAway(afcDRAway); break;
                case (afcDR1Winner == "afc_rank_0" && afcDR2Winner == "afc_dr_home"): setAfcCCHome(afcTeams[0].name); setAfcCCAway(afcDRHome); break;
                case (afcDR1Winner == "afc_dr_last" && afcDR2Winner == "afc_dr_away"): setAfcCCAway(afcDRLast); setAfcCCHome(afcDRAway); break;
                case (afcDR1Winner == "afc_dr_last" && afcDR2Winner == "afc_dr_home"): setAfcCCAway(afcDRLast); setAfcCCHome(afcDRHome); break;
                default: setAfcCCAway("AFC"); setAfcCCHome("AFC");
            }

            setAfcCCDisabled(false)
        }
    }, [afcWC1Winner, afcWC2Winner, afcWC3Winner, afcDR1Winner, afcDR2Winner, afcCCWinner, afcDRLast, afcDRAway, afcDRHome, afcCCAway, afcCCHome]);


    useEffect(() => {
        if (afcCCWinner && afcDR1Winner && afcDR2Winner && afcWC1Winner && afcWC2Winner && afcWC3Winner) {
            console.log(`AFC cc winner: ${afcCCWinner}`);

            switch (afcCCWinner) {
                case "afc_cc_away": setAfcSB(afcCCAway); break;
                case "afc_cc_home": setAfcSB(afcCCHome); break;
                default: setAfcSB("AFC");
            }

            if(nfcCCWinner) {
                setSBDisabled(false)
            }
        }
    }, [afcWC1Winner, afcWC2Winner, afcWC3Winner, afcDR1Winner, afcDR2Winner, afcCCWinner, afcDRLast, afcDRAway, afcDRHome, afcCCAway, afcCCHome]);

    useEffect(() => {
        if (nfcWC1Winner && nfcWC2Winner && nfcWC3Winner) {
            console.log(`NFC WC values selected GAME1: ${nfcWC1Winner} GAME2: ${nfcWC2Winner} GAME 3: ${nfcWC3Winner}`);

            switch (true) {
                case (nfcWC1Winner == "nfc_rank_6" && nfcWC2Winner == "nfc_rank_5" && nfcWC3Winner == "nfc_rank_4"): setNfcDRLast(nfcTeams[6].name); setNfcDRAway(nfcTeams[5].name); setNfcDRHome(nfcTeams[4].name); break;
                case (nfcWC1Winner == "nfc_rank_6" && nfcWC2Winner == "nfc_rank_5" && nfcWC3Winner == "nfc_rank_3"): setNfcDRLast(nfcTeams[6].name); setNfcDRAway(nfcTeams[5].name); setNfcDRHome(nfcTeams[3].name); break;
                case (nfcWC1Winner == "nfc_rank_6" && nfcWC2Winner == "nfc_rank_2" && nfcWC3Winner == "nfc_rank_4"): setNfcDRLast(nfcTeams[6].name); setNfcDRHome(nfcTeams[2].name); setNfcDRAway(nfcTeams[4].name); break;
                case (nfcWC1Winner == "nfc_rank_6" && nfcWC2Winner == "nfc_rank_2" && nfcWC3Winner == "nfc_rank_3"): setNfcDRLast(nfcTeams[6].name); setNfcDRHome(nfcTeams[2].name); setNfcDRAway(nfcTeams[3].name); break;
                case (nfcWC1Winner == "nfc_rank_1" && nfcWC2Winner == "nfc_rank_5" && nfcWC3Winner == "nfc_rank_4"): setNfcDRHome(nfcTeams[1].name); setNfcDRLast(nfcTeams[5].name); setNfcDRAway(nfcTeams[4].name); break;
                case (nfcWC1Winner == "nfc_rank_1" && nfcWC2Winner == "nfc_rank_5" && nfcWC3Winner == "nfc_rank_3"): setNfcDRHome(nfcTeams[1].name); setNfcDRLast(nfcTeams[5].name); setNfcDRAway(nfcTeams[3].name); break;
                case (nfcWC1Winner == "nfc_rank_1" && nfcWC2Winner == "nfc_rank_2" && nfcWC3Winner == "nfc_rank_4"): setNfcDRHome(nfcTeams[1].name); setNfcDRAway(nfcTeams[2].name); setNfcDRLast(nfcTeams[4].name); break;
                case (nfcWC1Winner == "nfc_rank_1" && nfcWC2Winner == "nfc_rank_2" && nfcWC3Winner == "nfc_rank_3"): setNfcDRHome(nfcTeams[1].name); setNfcDRAway(nfcTeams[2].name); setNfcDRLast(nfcTeams[3].name); break;
                default: setNfcDRLast("NFC"); setNfcDRAway("NFC"); setNfcDRHome("NFC");
            }

            setNfcDRDisabled(false)
        }
    }, [nfcWC1Winner, nfcWC2Winner, nfcWC3Winner, nfcDR1Winner, nfcDR2Winner, nfcCCWinner, nfcDRLast, nfcDRAway, nfcDRHome, nfcCCAway, nfcCCHome]);


    useEffect(() => {
        if (nfcDR1Winner && nfcDR2Winner && nfcWC1Winner && nfcWC2Winner && nfcWC3Winner) {
            console.log(`NFC DR values selected GAME1: ${nfcDR1Winner} GAME2: ${nfcDR2Winner}`);

            switch (true) {
                case (nfcDR1Winner == "nfc_rank_0" && nfcDR2Winner == "nfc_dr_away"): setNfcCCHome(nfcTeams[0].name); setNfcCCAway(nfcDRAway); break;
                case (nfcDR1Winner == "nfc_rank_0" && nfcDR2Winner == "nfc_dr_home"): setNfcCCHome(nfcTeams[0].name); setNfcCCAway(nfcDRHome); break;
                case (nfcDR1Winner == "nfc_dr_last" && nfcDR2Winner == "nfc_dr_away"): setNfcCCAway(nfcDRLast); setNfcCCHome(nfcDRAway); break;
                case (nfcDR1Winner == "nfc_dr_last" && nfcDR2Winner == "nfc_dr_home"): setNfcCCAway(nfcDRLast); setNfcCCHome(nfcDRHome); break;
                default: setNfcCCAway("NFC"); setNfcCCHome("NFC");
            }

            setNfcCCDisabled(false)
        }
    }, [nfcWC1Winner, nfcWC2Winner, nfcWC3Winner, nfcDR1Winner, nfcDR2Winner, nfcCCWinner, nfcDRLast, nfcDRAway, nfcDRHome, nfcCCAway, nfcCCHome]);


    useEffect(() => {
        if (nfcCCWinner && nfcDR1Winner && nfcDR2Winner && nfcWC1Winner && nfcWC2Winner && nfcWC3Winner) {
            console.log(`NFC cc winner: ${nfcCCWinner}`);

            switch (nfcCCWinner) {
                case "nfc_cc_away": setNfcSB(nfcCCAway); break;
                case "nfc_cc_home": setNfcSB(nfcCCHome); break;
                default: setNfcSB("NFC");
            }

            if (afcCCWinner) {
                setSBDisabled(false)
            }
        }
    }, [nfcWC1Winner, nfcWC2Winner, nfcWC3Winner, nfcDR1Winner, nfcDR2Winner, nfcCCWinner, nfcDRLast, nfcDRAway, nfcDRHome, nfcCCAway, nfcCCHome]);

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

        <Box component="form" onSubmit={formik.handleSubmit} noValidate justifyContent="center">
            <Grid container justifyContent="center">
                <Grid sx={{ marginTop: 0 }}>
                    <Typography variant="caption">{errMsg}</Typography>
                </Grid>

                {/* AFC Wild Card */}
                <Grid container justifyContent="center" wrap='nowrap' sx={{ marginTop: 0 }}>
                    <Grid>
                        <Item>
                            {afcTeams?.length
                                ? (
                                    <ToggleButtonGroup {...afcWC1Control}>

                                        <ToggleButton sx={{ padding: 0 }} value="afc_rank_6">
                                            <img
                                                src={icon(afcTeams[6].name)}
                                                height={50}
                                                alt={emoji(afcTeams[6].name)}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                        <ToggleButton sx={{ padding: 0 }} value="afc_rank_1">
                                            <img
                                                src={icon(afcTeams[1].name)}
                                                height={50}
                                                alt={emoji(afcTeams[1].name)}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                ) : <p>No teams to display</p>
                            }
                        </Item>
                    </Grid>
                    <Grid>
                        <Item>
                            {afcTeams?.length
                                ? (
                                    <ToggleButtonGroup {...afcWC2Control}>

                                        <ToggleButton sx={{ padding: 0 }} value="afc_rank_5">
                                            <img
                                                src={icon(afcTeams[5].name)}
                                                height={50}
                                                alt={emoji(afcTeams[5].name)}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                        <ToggleButton sx={{ padding: 0 }} value="afc_rank_2">
                                            <img
                                                src={icon(afcTeams[2].name)}
                                                height={50}
                                                alt={emoji(afcTeams[2].name)}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                ) : <p>No teams to display</p>
                            }
                        </Item>
                    </Grid>
                    <Grid>
                        <Item>
                            {afcTeams?.length
                                ? (
                                    <ToggleButtonGroup {...afcWC3Control}>

                                        <ToggleButton sx={{ padding: 0 }} value="afc_rank_4">
                                            <img
                                                src={icon(afcTeams[4].name)}
                                                height={50}
                                                alt={emoji(afcTeams[4].name)}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                        <ToggleButton sx={{ padding: 0 }} value="afc_rank_3">
                                            <img
                                                src={icon(afcTeams[3].name)}
                                                height={50}
                                                alt={emoji(afcTeams[3].name)}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                ) : <p>No teams to display</p>
                            }
                        </Item>
                    </Grid>
                </Grid>
                <Grid>
                    <Typography variant="caption">AFC Wild Card Round</Typography>
                </Grid>

                {/* AFC Divisional Round */}
                <Grid container justifyContent="center" wrap='nowrap' sx={{ marginTop: 0 }}>
                    <Grid>
                        <Item>
                            {afcTeams?.length
                                ? (
                                    <ToggleButtonGroup {...afcDR1Control}>

                                        <ToggleButton sx={{ padding: 0 }} value="afc_dr_last">
                                            <img
                                                {...afcDRLastControl}
                                                height={50}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                        <ToggleButton sx={{ padding: 0 }} value="afc_rank_0">
                                            <img
                                                src={icon(afcTeams[0].name)}
                                                height={50}
                                                alt={emoji(afcTeams[0].name)}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                ) : <p>No teams to display</p>
                            }
                        </Item>
                    </Grid>
                    <Grid>
                        <Item>
                            {afcTeams?.length
                                ? (
                                    <ToggleButtonGroup {...afcDR2Control}>

                                        <ToggleButton sx={{ padding: 0 }} value="afc_dr_away">
                                            <img
                                                {...afcDRAwayControl}
                                                height={50}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                        <ToggleButton sx={{ padding: 0 }} value="afc_dr_home">
                                            <img
                                                {...afcDRHomeControl}
                                                height={50}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                ) : <p>No teams to display</p>
                            }
                        </Item>
                    </Grid>
                </Grid>
                <Grid>
                    <Typography variant="caption">AFC Divisional Round</Typography>
                </Grid>

                {/* AFC Championship */}
                <Grid container justifyContent="center" wrap='nowrap' sx={{ marginTop: 0 }}>
                    <Item>
                        {afcTeams?.length
                            ? (
                                <ToggleButtonGroup {...afcCCControl}>

                                    <ToggleButton sx={{ padding: 0 }} value="afc_cc_away">
                                        <img
                                            {...afcCCAwayControl}
                                            height={50}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                    <ToggleButton sx={{ padding: 0 }} value="afc_cc_home">
                                        <img
                                            {...afcCCHomeControl}
                                            height={50}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            ) : <p>No teams to display</p>
                        }
                    </Item>
                </Grid>
                <Grid sx={{ marginTop: 0 }}>
                    <Typography variant="caption">AFC Championship</Typography>
                </Grid>

                {/* SuperBowl */}
                <Grid container justifyContent="center" wrap='nowrap' sx={{ marginTop: 0 }}>
                    <Item>
                        {afcTeams?.length
                            ? (
                                <ToggleButtonGroup {...sbControl}>

                                    <ToggleButton sx={{ padding: 0 }} value="afc_sb">
                                        <img
                                            {...afcSBControl}
                                            height={50}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                    <ToggleButton sx={{ padding: 0 }} value="nfc_sb">
                                        <img
                                            {...nfcSBControl}
                                            height={50}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            ) : <p>No teams to display</p>
                        }
                    </Item>

                    <TextField
                        {...fssControl}
                        sx={{
                            width: 120
                        }}
                        margin="normal"
                        required
                        id="finalscore"
                        label="Final score sum"
                        name="finalscore"
                        type="number"
                        size="small"
                        defaultValue={0}
                        InputProps={{ inputProps: { min: 0, max: 999 } }}
                    />
                </Grid>
                <Grid>
                    <Typography variant="caption">Super Bowl</Typography>
                </Grid>

                {/* NFC Championship */}
                <Grid container justifyContent="center" wrap='nowrap' sx={{ marginTop: 0 }}>
                    <Item>
                        {afcTeams?.length
                            ? (
                                <ToggleButtonGroup {...nfcCCControl}>

                                    <ToggleButton sx={{ padding: 0 }} value="nfc_cc_away">
                                        <img
                                            {...nfcCCAwayControl}
                                            height={50}
                                            alt={"NFC"}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                    <ToggleButton sx={{ padding: 0 }} value="nfc_cc_home">
                                        <img
                                            {...nfcCCHomeControl}
                                            height={50}
                                            alt={"NFC"}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            ) : <p>No teams to display</p>
                        }
                    </Item>
                </Grid>
                <Grid>
                    <Typography variant="caption">NFC Championship</Typography>
                </Grid>

                {/* NFC Divisional Round */}
                <Grid container justifyContent="center" wrap='nowrap' sx={{ marginTop: 0 }}>
                    <Grid>
                        <Item>
                            {afcTeams?.length
                                ? (
                                    <ToggleButtonGroup {...nfcDR1Control}>

                                        <ToggleButton sx={{ padding: 0 }} value="nfc_dr_last">
                                            <img
                                                {...nfcDRLastControl}
                                                height={50}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                        <ToggleButton sx={{ padding: 0 }} value="nfc_rank_0">
                                            <img
                                                src={icon(nfcTeams[0].name)}
                                                height={50}
                                                alt={emoji(nfcTeams[0].name)}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                ) : <p>No teams to display</p>
                            }
                        </Item>
                    </Grid>
                    <Grid>
                        <Item>
                            {afcTeams?.length
                                ? (
                                    <ToggleButtonGroup {...nfcDR2Control}>

                                        <ToggleButton sx={{ padding: 0 }} value="nfc_dr_away">
                                            <img
                                                {...nfcDRAwayControl}
                                                height={50}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                        <ToggleButton sx={{ padding: 0 }} value="nfc_dr_home">
                                            <img
                                                {...nfcDRHomeControl}
                                                height={50}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                ) : <p>No teams to display</p>
                            }
                        </Item>
                    </Grid>
                </Grid>
                <Grid>
                    <Typography variant="caption">NFC Divisional Round</Typography>
                </Grid>

                {/* NFC Wild Card */}
                <Grid container justifyContent="center" wrap='nowrap' sx={{ marginTop: 0 }}>
                    <Grid>
                        <Item>
                            {nfcTeams?.length
                                ? (
                                    <ToggleButtonGroup {...nfcWC1Control}>

                                        <ToggleButton sx={{ padding: 0 }} value="nfc_rank_6">
                                            <img
                                                src={icon(nfcTeams[6].name)}
                                                height={50}
                                                alt={emoji(nfcTeams[6].name)}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                        <ToggleButton sx={{ padding: 0 }} value="nfc_rank_1">
                                            <img
                                                src={icon(nfcTeams[1].name)}
                                                height={50}
                                                alt={emoji(nfcTeams[1].name)}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                ) : <p>No teams to display</p>
                            }
                        </Item>
                    </Grid>
                    <Grid>
                        <Item>
                            {nfcTeams?.length
                                ? (
                                    <ToggleButtonGroup {...nfcWC2Control}>

                                        <ToggleButton sx={{ padding: 0 }} value="nfc_rank_5">
                                            <img
                                                src={icon(nfcTeams[5].name)}
                                                height={50}
                                                alt={emoji(nfcTeams[5].name)}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                        <ToggleButton sx={{ padding: 0 }} value="nfc_rank_2">
                                            <img
                                                src={icon(nfcTeams[2].name)}
                                                height={50}
                                                alt={emoji(nfcTeams[2].name)}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                ) : <p>No teams to display</p>
                            }
                        </Item>
                    </Grid>
                    <Grid>
                        <Item>
                            {nfcTeams?.length
                                ? (
                                    <ToggleButtonGroup {...nfcWC3Control}>

                                        <ToggleButton sx={{ padding: 0 }} value="nfc_rank_4">
                                            <img
                                                src={icon(nfcTeams[4].name)}
                                                height={50}
                                                alt={emoji(nfcTeams[4].name)}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                        <ToggleButton sx={{ padding: 0 }} value="nfc_rank_3">
                                            <img
                                                src={icon(nfcTeams[3].name)}
                                                height={50}
                                                alt={emoji(nfcTeams[3].name)}
                                                loading="lazy"
                                            />
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                ) : <p>No teams to display</p>
                            }
                        </Item>
                    </Grid>
                </Grid>
                <Grid>
                    <Typography variant="caption">NFC Wild Card Round</Typography>
                </Grid>
            </Grid>
            <Grid display="flex" justifyContent="center">

                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Save
                </Button>
            </Grid>
        </Box>

    );
}
