import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import React from 'react';
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
    const [afcTeams, setAfcTeams] = useState<Team[]>([]);
    const [nfcTeams, setNfcTeams] = useState<Team[]>([]);
    const [afcWCTeams, setAfcWCTeams] = useState<string[]>([]);
    const [afcDRTeams, setAfcDRTeams] = useState<string[]>([]);
    const [afcCCTeams, setAfcCCTeams] = useState<string[]>([]);
    const [nfcWCTeams, setNfcWCTeams] = useState<string[]>([]);
    const [nfcDRTeams, setNfcDRTeams] = useState<string[]>([]);
    const [nfcCCTeams, setNfcCCTeams] = useState<string[]>([]);
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
    const [fss, setFss] = useState<number>(0);
    const [isUpdate, setIsUpdate] = useState<boolean>(false);

    const [afcRank0, setAfcRank0] = useState<string>("AFC");
    const [afcRank1, setAfcRank1] = useState<string>("AFC");
    const [afcRank2, setAfcRank2] = useState<string>("AFC");
    const [afcRank3, setAfcRank3] = useState<string>("AFC");
    const [afcRank4, setAfcRank4] = useState<string>("AFC");
    const [afcRank5, setAfcRank5] = useState<string>("AFC");
    const [afcRank6, setAfcRank6] = useState<string>("AFC");
    const [afcDRLast, setAfcDRLast] = useState<string>("AFC");
    const [afcDRAway, setAfcDRAway] = useState<string>("AFC");
    const [afcDRHome, setAfcDRHome] = useState<string>("AFC");
    const [afcCCAway, setAfcCCAway] = useState<string>("AFC");
    const [afcCCHome, setAfcCCHome] = useState<string>("AFC");

    const [afcSB, setAfcSB] = useState<string>("AFC");
    const [nfcSB, setNfcSB] = useState<string>("NFC");

    const [nfcRank0, setNfcRank0] = useState<string>("NFC");
    const [nfcRank1, setNfcRank1] = useState<string>("NFC");
    const [nfcRank2, setNfcRank2] = useState<string>("NFC");
    const [nfcRank3, setNfcRank3] = useState<string>("NFC");
    const [nfcRank4, setNfcRank4] = useState<string>("NFC");
    const [nfcRank5, setNfcRank5] = useState<string>("NFC");
    const [nfcRank6, setNfcRank6] = useState<string>("NFC");
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
    const handleFss = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => { setFss(parseInt(event.target.value)); };

    const afcWC1Control = { value: afcWC1Winner, onChange: handleAfcWC1Change, exclusive: true, };
    const afcWC2Control = { value: afcWC2Winner, onChange: handleAfcWC2Change, exclusive: true, };
    const afcWC3Control = { value: afcWC3Winner, onChange: handleAfcWC3Change, exclusive: true, };
    const nfcWC1Control = { value: nfcWC1Winner, onChange: handleNfcWC1Change, exclusive: true, };
    const nfcWC2Control = { value: nfcWC2Winner, onChange: handleNfcWC2Change, exclusive: true, };
    const nfcWC3Control = { value: nfcWC3Winner, onChange: handleNfcWC3Change, exclusive: true, };

    const afcDR1Control = { value: afcDR1Winner, onChange: handleAfcDR1Change, exclusive: true, disabled: afcDRDisabled };
    const afcDR2Control = { value: afcDR2Winner, onChange: handleAfcDR2Change, exclusive: true, disabled: afcDRDisabled };
    const afcCCControl = { value: afcCCWinner, onChange: handleAfcCCChange, exclusive: true, disabled: afcCCDisabled };
    const nfcDR1Control = { value: nfcDR1Winner, onChange: handleNfcDR1Change, exclusive: true, disabled: nfcDRDisabled };
    const nfcDR2Control = { value: nfcDR2Winner, onChange: handleNfcDR2Change, exclusive: true, disabled: nfcDRDisabled };
    const nfcCCControl = { value: nfcCCWinner, onChange: handleNfcCCChange, exclusive: true, disabled: nfcCCDisabled };
    const sbControl = { value: sbWinner, onChange: handleSBChange, exclusive: true, disabled: sbDisabled };
    const fssControl = { disabled: sbDisabled, onChange: handleFss };

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

    function SetupAFCDivisionalRound() {
        switch (true) {
            case (afcWC1Winner == afcRank6 && afcWC2Winner == afcRank5 && afcWC3Winner == afcRank4): setAfcDRLast(afcRank6); setAfcDRAway(afcRank5); setAfcDRHome(afcRank4); break;
            case (afcWC1Winner == afcRank6 && afcWC2Winner == afcRank5 && afcWC3Winner == afcRank3): setAfcDRLast(afcRank6); setAfcDRAway(afcRank5); setAfcDRHome(afcRank3); break;
            case (afcWC1Winner == afcRank6 && afcWC2Winner == afcRank2 && afcWC3Winner == afcRank4): setAfcDRLast(afcRank6); setAfcDRHome(afcRank2); setAfcDRAway(afcRank4); break;
            case (afcWC1Winner == afcRank6 && afcWC2Winner == afcRank2 && afcWC3Winner == afcRank3): setAfcDRLast(afcRank6); setAfcDRHome(afcRank2); setAfcDRAway(afcRank3); break;
            case (afcWC1Winner == afcRank1 && afcWC2Winner == afcRank5 && afcWC3Winner == afcRank4): setAfcDRHome(afcRank1); setAfcDRLast(afcRank5); setAfcDRAway(afcRank4); break;
            case (afcWC1Winner == afcRank1 && afcWC2Winner == afcRank5 && afcWC3Winner == afcRank3): setAfcDRHome(afcRank1); setAfcDRLast(afcRank5); setAfcDRAway(afcRank3); break;
            case (afcWC1Winner == afcRank1 && afcWC2Winner == afcRank2 && afcWC3Winner == afcRank4): setAfcDRHome(afcRank1); setAfcDRAway(afcRank2); setAfcDRLast(afcRank4); break;
            case (afcWC1Winner == afcRank1 && afcWC2Winner == afcRank2 && afcWC3Winner == afcRank3): setAfcDRHome(afcRank1); setAfcDRAway(afcRank2); setAfcDRLast(afcRank3); break;
            default: setAfcDRLast("AFC"); setAfcDRAway("AFC"); setAfcDRHome("AFC");
        }

        setAfcDRDisabled(false);
    }

    function SetupNFCDivisionalRound() {
        switch (true) {
            case (nfcWC1Winner == nfcRank6 && nfcWC2Winner == nfcRank5 && nfcWC3Winner == nfcRank4): setNfcDRLast(nfcRank6); setNfcDRAway(nfcRank5); setNfcDRHome(nfcRank4); break;
            case (nfcWC1Winner == nfcRank6 && nfcWC2Winner == nfcRank5 && nfcWC3Winner == nfcRank3): setNfcDRLast(nfcRank6); setNfcDRAway(nfcRank5); setNfcDRHome(nfcRank3); break;
            case (nfcWC1Winner == nfcRank6 && nfcWC2Winner == nfcRank2 && nfcWC3Winner == nfcRank4): setNfcDRLast(nfcRank6); setNfcDRHome(nfcRank2); setNfcDRAway(nfcRank4); break;
            case (nfcWC1Winner == nfcRank6 && nfcWC2Winner == nfcRank2 && nfcWC3Winner == nfcRank3): setNfcDRLast(nfcRank6); setNfcDRHome(nfcRank2); setNfcDRAway(nfcRank3); break;
            case (nfcWC1Winner == nfcRank1 && nfcWC2Winner == nfcRank5 && nfcWC3Winner == nfcRank4): setNfcDRHome(nfcRank1); setNfcDRLast(nfcRank5); setNfcDRAway(nfcRank4); break;
            case (nfcWC1Winner == nfcRank1 && nfcWC2Winner == nfcRank5 && nfcWC3Winner == nfcRank3): setNfcDRHome(nfcRank1); setNfcDRLast(nfcRank5); setNfcDRAway(nfcRank3); break;
            case (nfcWC1Winner == nfcRank1 && nfcWC2Winner == nfcRank2 && nfcWC3Winner == nfcRank4): setNfcDRHome(nfcRank1); setNfcDRAway(nfcRank2); setNfcDRLast(nfcRank4); break;
            case (nfcWC1Winner == nfcRank1 && nfcWC2Winner == nfcRank2 && nfcWC3Winner == nfcRank3): setNfcDRHome(nfcRank1); setNfcDRAway(nfcRank2); setNfcDRLast(nfcRank3); break;
            default: setNfcDRLast("NFC"); setNfcDRAway("NFC"); setNfcDRHome("NFC");
        }

        setNfcDRDisabled(false);
    }

    function SetupAFCChampionship() {
        switch (true) {
            case (afcDR1Winner == afcRank0 && afcDR2Winner == afcDRAway): setAfcCCHome(afcRank0); setAfcCCAway(afcDRAway); break;
            case (afcDR1Winner == afcRank0 && afcDR2Winner == afcDRHome): setAfcCCHome(afcRank0); setAfcCCAway(afcDRHome); break;
            case (afcDR1Winner == afcDRLast && afcDR2Winner == afcDRAway): setAfcCCAway(afcDRLast); setAfcCCHome(afcDRAway); break;
            case (afcDR1Winner == afcDRLast && afcDR2Winner == afcDRHome): setAfcCCAway(afcDRLast); setAfcCCHome(afcDRHome); break;
            default: setAfcCCAway("AFC"); setAfcCCHome("AFC");
        }

        setAfcCCDisabled(false);
    }

    function SetupNFCChampionship() {
        switch (true) {
            case (nfcDR1Winner == nfcRank0 && nfcDR2Winner == nfcDRAway): setNfcCCHome(nfcRank0); setNfcCCAway(nfcDRAway); break;
            case (nfcDR1Winner == nfcRank0 && nfcDR2Winner == nfcDRHome): setNfcCCHome(nfcRank0); setNfcCCAway(nfcDRHome); break;
            case (nfcDR1Winner == nfcDRLast && nfcDR2Winner == nfcDRAway): setNfcCCAway(nfcDRLast); setNfcCCHome(nfcDRAway); break;
            case (nfcDR1Winner == nfcDRLast && nfcDR2Winner == nfcDRHome): setNfcCCAway(nfcDRLast); setNfcCCHome(nfcDRHome); break;
            default: setNfcCCAway("NFC"); setNfcCCHome("NFC");
        }

        setNfcCCDisabled(false);
    }

    function SetupAFCSuperBowl() {
        switch (afcCCWinner) {
            case afcCCAway: setAfcSB(afcCCAway); break;
            case afcCCHome: setAfcSB(afcCCHome); break;
            default: setAfcSB("AFC");
        }

        if (nfcCCWinner) {
            setSBDisabled(false);
        }
    }

    function SetupNFCSuperBowl() {
        switch (nfcCCWinner) {
            case nfcCCAway: setNfcSB(nfcCCAway); break;
            case nfcCCHome: setNfcSB(nfcCCHome); break;
            default: setNfcSB("NFC");
        }

        if (afcCCWinner) {
            setSBDisabled(false);
        }
    }

    useEffect(() => {
        setErrMsg('');
    }, []);

    useEffect(() => {
        if (afcWC1Winner && afcWC2Winner && afcWC3Winner) {
            SetupAFCDivisionalRound();
        }
        if (afcDR1Winner && afcDR2Winner && afcWC1Winner && afcWC2Winner && afcWC3Winner) {
            SetupAFCChampionship();
        }
        if (afcCCWinner && afcDR1Winner && afcDR2Winner && afcWC1Winner && afcWC2Winner && afcWC3Winner) {
            SetupAFCSuperBowl();
        }
        if (nfcWC1Winner && nfcWC2Winner && nfcWC3Winner) {
            SetupNFCDivisionalRound();
        }
        if (nfcDR1Winner && nfcDR2Winner && nfcWC1Winner && nfcWC2Winner && nfcWC3Winner) {
            SetupNFCChampionship();
        }
        if (nfcCCWinner && nfcDR1Winner && nfcDR2Winner && nfcWC1Winner && nfcWC2Winner && nfcWC3Winner) {
            SetupNFCSuperBowl();
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

                isMounted && setAfcTeams(response.data[0].teams);
                isMounted && setNfcTeams(response.data[1].teams);
                isMounted && setAfcRank0(response.data[0].teams[0].name);
                isMounted && setAfcRank1(response.data[0].teams[1].name);
                isMounted && setAfcRank2(response.data[0].teams[2].name);
                isMounted && setAfcRank3(response.data[0].teams[3].name);
                isMounted && setAfcRank4(response.data[0].teams[4].name);
                isMounted && setAfcRank5(response.data[0].teams[5].name);
                isMounted && setAfcRank6(response.data[0].teams[6].name);
                isMounted && setNfcRank0(response.data[1].teams[0].name);
                isMounted && setNfcRank1(response.data[1].teams[1].name);
                isMounted && setNfcRank2(response.data[1].teams[2].name);
                isMounted && setNfcRank3(response.data[1].teams[3].name);
                isMounted && setNfcRank4(response.data[1].teams[4].name);
                isMounted && setNfcRank5(response.data[1].teams[5].name);
                isMounted && setNfcRank6(response.data[1].teams[6].name);
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

    useEffect(() => {
        console.log([afcRank1, afcRank6, afcRank2, afcRank5, afcRank3, afcRank4].indexOf("AFC") == -1)
        if ([afcRank1, afcRank6, afcRank2, afcRank5, afcRank3, afcRank4].indexOf("AFC") == -1) {
            for (let i = 0; i < afcWCTeams.length; i++) {
                switch (afcWCTeams[i]) {
                    case afcRank1: case afcRank6: setAfcWC1Winner(afcWCTeams[i]); break;
                    case afcRank2: case afcRank5: setAfcWC2Winner(afcWCTeams[i]); break;
                    case afcRank3: case afcRank4: setAfcWC3Winner(afcWCTeams[i]); break;
                    default: break;
                }
            }
        }
    }, [afcRank1, afcRank6, afcRank2, afcRank5, afcRank3, afcRank4]);

    useEffect(() => {
        if ([nfcRank1, nfcRank6, nfcRank2, nfcRank5, nfcRank3, nfcRank4].indexOf("NFC") == -1) {
            for (let i = 0; i < nfcWCTeams.length; i++) {
                switch (nfcWCTeams[i]) {
                    case nfcRank1: case nfcRank6: setNfcWC1Winner(nfcWCTeams[i]); break;
                    case nfcRank2: case nfcRank5: setNfcWC2Winner(nfcWCTeams[i]); break;
                    case nfcRank3: case nfcRank4: setNfcWC3Winner(nfcWCTeams[i]); break;
                    default: break;
                }
            }
        }
    }, [nfcRank1, nfcRank6, nfcRank2, nfcRank5, nfcRank3, nfcRank4]);
    
    useEffect(() => {
        if ([afcRank0, afcDRLast, afcDRAway, afcDRHome].indexOf("AFC") == -1) {

            for (let i = 0; i < afcDRTeams.length; i++) {
                switch (afcDRTeams[i]) {
                    case afcRank0: case afcDRLast: setAfcDR1Winner(afcDRTeams[i]); break;
                    case afcDRAway: case afcDRHome: setAfcDR2Winner(afcDRTeams[i]); break;
                    default: break;
                }
            }
        }
    }, [afcRank0, afcDRLast, afcDRAway, afcDRHome]);

    useEffect(() => {
        if ([nfcRank0, nfcDRLast, nfcDRAway, nfcDRHome].indexOf("NFC") == -1) {
            for (let i = 0; i < nfcDRTeams.length; i++) {
                switch (nfcDRTeams[i]) {
                    case nfcRank0: case nfcDRLast: setNfcDR1Winner(nfcDRTeams[i]); break;
                    case nfcDRAway: case nfcDRHome: setNfcDR2Winner(nfcDRTeams[i]); break;
                    default: break;
                }
            }
        }
    }, [nfcRank0, nfcDRLast, nfcDRAway, nfcDRHome]);
    
    useEffect(() => {
        if ([afcCCAway, afcCCHome].indexOf("AFC") == -1) {
            for (let i = 0; i < afcCCTeams.length; i++) {
                switch (afcCCTeams[i]) {
                    case afcCCAway: case afcCCHome: setAfcCCWinner(afcCCTeams[i]); break;
                    default: break;
                }
            }
        }
    }, [afcCCAway, afcCCHome]);

    useEffect(() => {
        if ([nfcCCAway, nfcCCHome].indexOf("NFC") == -1) {
            for (let i = 0; i < nfcCCTeams.length; i++) {
                switch (nfcCCTeams[i]) {
                    case nfcCCAway: case nfcCCHome: setNfcCCWinner(nfcCCTeams[i]); break;
                    default: break;
                }
            }
        }
    }, [nfcCCAway, nfcCCHome]);
    
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getBracket = async () => {
            try {
                const response = await axiosPrivate.get(
                    "/brackets/",
                    {
                        signal: controller.signal,
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                );
            
                // for (let i = 0; i < response?.data.wild_card_winners.length; i++) {
                //     switch (response?.data.wild_card_winners[i]) {
                //         case afcTeams[1].name: case afcTeams[6].name: isMounted && setAfcWC1Winner(response?.data.wild_card_winners[i]); break;
                //         case afcTeams[2].name: case afcTeams[5].name: isMounted && setAfcWC2Winner(response?.data.wild_card_winners[i]); break;
                //         case afcTeams[3].name: case afcTeams[4].name: isMounted && setAfcWC3Winner(response?.data.wild_card_winners[i]); break;
                //         case nfcTeams[1].name: case nfcTeams[6]: isMounted && setNfcWC1Winner(response?.data.wild_card_winners[i]); break;
                //         case nfcTeams[2].name: case nfcTeams[5]: isMounted && setNfcWC2Winner(response?.data.wild_card_winners[i]); break;
                //         case nfcTeams[3].name: case nfcTeams[4]: isMounted && setNfcWC3Winner(response?.data.wild_card_winners[i]); break;
                //         default: break;
                //     }
                // }

                // SetupAFCDivisionalRound();
                // SetupNFCDivisionalRound();

                // for (let i = 0; i < response?.data.divisional_round_winners.length; i++) {
                //     switch (response?.data.divisional_round_winners[i]) {
                //         case afcRank0: case afcDRLast: isMounted && setAfcDR1Winner(response?.data.divisional_round_winners[i]); break;
                //         case afcDRAway: case afcDRHome: isMounted && setAfcDR2Winner(response?.data.divisional_round_winners[i]); break;
                //         case nfcRank0: case nfcDRLast: isMounted && setNfcDR1Winner(response?.data.divisional_round_winners[i]); break;
                //         case nfcDRAway: case nfcDRHome: isMounted && setNfcDR2Winner(response?.data.divisional_round_winners[i]); break;
                //         default: break;
                //     }
                // }

                // SetupAFCChampionship();
                // SetupNFCChampionship();

                // for (let i = 0; i < response?.data.conference_champions.length; i++) {
                //     switch (response?.data.conference_champions[i]) {
                //         case afcCCAway: case afcCCHome: isMounted && setAfcCCWinner(response?.data.conference_champions[i]); break;
                //         case nfcCCAway: case nfcCCHome: isMounted && setNfcCCWinner(response?.data.conference_champions[i]); break;
                //         default: break;
                //     }
                // }

                // SetupAFCSuperBowl();
                // SetupNFCSuperBowl();

                isMounted && setAfcWCTeams(response?.data.wild_card_winners);
                isMounted && setAfcDRTeams(response?.data.divisional_round_winners);
                isMounted && setAfcCCTeams(response?.data.conference_champions);
                isMounted && setNfcWCTeams(response?.data.wild_card_winners);
                isMounted && setNfcDRTeams(response?.data.divisional_round_winners);
                isMounted && setNfcCCTeams(response?.data.conference_champions);
                isMounted && setSBWinner(response?.data.super_bowl_champion);
                isMounted && setFss(response?.data.final_score_sum);
                isMounted && setIsUpdate(true);
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

        getBracket();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, [afcTeams, nfcTeams]);

    useEffect(() => {
        setErrMsg('');
    }, [nfcWC1Winner, nfcWC2Winner, nfcWC3Winner, nfcDR1Winner, nfcDR2Winner, nfcCCWinner, nfcDRLast, nfcDRAway, nfcDRHome, nfcCCAway, nfcCCHome, afcWC1Winner, afcWC2Winner, afcWC3Winner, afcDR1Winner, afcDR2Winner, afcCCWinner, afcDRLast, afcDRAway, afcDRHome, afcCCAway, afcCCHome, sbWinner, fss]);

    const onSubmit = async (values: any) => {
        values.preventDefault();
        console.log("Values: ", values);
        setErrMsg("");

        console.log(nfcWC1Winner, nfcWC2Winner, nfcWC3Winner, nfcDR1Winner, nfcDR2Winner, nfcCCWinner, afcWC1Winner, afcWC2Winner, afcWC3Winner, afcDR1Winner, afcDR2Winner, afcCCWinner, sbWinner, fss);
        if (!nfcWC1Winner || !nfcWC2Winner || !nfcWC3Winner || !nfcDR1Winner || !nfcDR2Winner || !nfcCCWinner || !afcWC1Winner || !afcWC2Winner || !afcWC3Winner || !afcDR1Winner || !afcDR2Winner || !afcCCWinner || !sbWinner || !fss) {
            setErrMsg("Missing selections");
            return;
        }

        const toSubmit = {
            "wild_card_winners": [nfcWC1Winner, nfcWC2Winner, nfcWC3Winner, afcWC1Winner, afcWC2Winner, afcWC3Winner],
            "divisional_round_winners": [nfcDR1Winner, nfcDR2Winner, afcDR1Winner, afcDR2Winner],
            "conference_champions": [nfcCCWinner, afcCCWinner],
            "super_bowl_champion": sbWinner,
            "final_score_sum": fss
        };
        console.log("tosubmit: ", toSubmit);

        try {
            if (isUpdate) {
                const response = await axiosPrivate.put(
                    "/brackets/",
                    toSubmit,
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                );
                console.log(JSON.stringify(response?.data));
            } else {
                const response = await axiosPrivate.post(
                    "/brackets/",
                    toSubmit,
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                );
                console.log(JSON.stringify(response?.data));
                setIsUpdate(true);
            }

            setErrMsg("Saved!");
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

    return (

        <Box component="form" noValidate justifyContent="center">
            <Grid container justifyContent="center">

                {/* AFC Wild Card */}
                <Grid container justifyContent="center" wrap='nowrap' sx={{ marginTop: 0 }}>
                    <Grid>
                        <Item>
                            <ToggleButtonGroup {...afcWC1Control}>
                                <ToggleButton sx={{ padding: 0 }} value={afcRank6}>
                                    <img
                                        src={icon(afcRank6)}
                                        height={50}
                                        alt={emoji(afcRank6)}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                                <ToggleButton sx={{ padding: 0 }} value={afcRank1}>
                                    <img
                                        src={icon(afcRank1)}
                                        height={50}
                                        alt={emoji(afcRank1)}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Item>
                    </Grid>
                    <Grid>
                        <Item>
                            <ToggleButtonGroup {...afcWC2Control}>
                                <ToggleButton sx={{ padding: 0 }} value={afcRank5}>
                                    <img
                                        src={icon(afcRank5)}
                                        height={50}
                                        alt={emoji(afcRank5)}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                                <ToggleButton sx={{ padding: 0 }} value={afcRank2}>
                                    <img
                                        src={icon(afcRank2)}
                                        height={50}
                                        alt={emoji(afcRank2)}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Item>
                    </Grid>
                    <Grid>
                        <Item>
                            <ToggleButtonGroup {...afcWC3Control}>
                                <ToggleButton sx={{ padding: 0 }} value={afcRank4}>
                                    <img
                                        src={icon(afcRank4)}
                                        height={50}
                                        alt={emoji(afcRank4)}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                                <ToggleButton sx={{ padding: 0 }} value={afcRank3}>
                                    <img
                                        src={icon(afcRank3)}
                                        height={50}
                                        alt={emoji(afcRank3)}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                            </ToggleButtonGroup>
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
                            <ToggleButtonGroup {...afcDR1Control}>
                                <ToggleButton sx={{ padding: 0 }} value={afcDRLast}>
                                    <img
                                        {...afcDRLastControl}
                                        height={50}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                                <ToggleButton sx={{ padding: 0 }} value={afcRank0}>
                                    <img
                                        src={icon(afcRank0)}
                                        height={50}
                                        alt={emoji(afcRank0)}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Item>
                    </Grid>
                    <Grid>
                        <Item>
                            <ToggleButtonGroup {...afcDR2Control}>
                                <ToggleButton sx={{ padding: 0 }} value={afcDRAway}>
                                    <img
                                        {...afcDRAwayControl}
                                        height={50}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                                <ToggleButton sx={{ padding: 0 }} value={afcDRHome}>
                                    <img
                                        {...afcDRHomeControl}
                                        height={50}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Item>
                    </Grid>
                </Grid>
                <Grid>
                    <Typography variant="caption">AFC Divisional Round</Typography>
                </Grid>

                {/* AFC Championship */}
                <Grid container justifyContent="center" wrap='nowrap' sx={{ marginTop: 0 }}>
                    <Item>
                        <ToggleButtonGroup {...afcCCControl}>
                            <ToggleButton sx={{ padding: 0 }} value={afcCCAway}>
                                <img
                                    {...afcCCAwayControl}
                                    height={50}
                                    loading="lazy"
                                />
                            </ToggleButton>
                            <ToggleButton sx={{ padding: 0 }} value={afcCCHome}>
                                <img
                                    {...afcCCHomeControl}
                                    height={50}
                                    loading="lazy"
                                />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Item>
                </Grid>
                <Grid sx={{ marginTop: 0 }}>
                    <Typography variant="caption">AFC Championship</Typography>
                </Grid>

                {/* SuperBowl */}
                <Grid container justifyContent="center" wrap='nowrap' sx={{ marginTop: 0 }}>
                    <Item>
                        <ToggleButtonGroup {...sbControl}>
                            <ToggleButton sx={{ padding: 0 }} value={afcSB}>
                                <img
                                    {...afcSBControl}
                                    height={50}
                                    loading="lazy"
                                />
                            </ToggleButton>
                            <ToggleButton sx={{ padding: 0 }} value={nfcSB}>
                                <img
                                    {...nfcSBControl}
                                    height={50}
                                    loading="lazy"
                                />
                            </ToggleButton>
                        </ToggleButtonGroup>
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
                        value={fss}
                        InputProps={{ inputProps: { min: 0, max: 999 } }}
                    />
                </Grid>
                <Grid>
                    <Typography variant="caption">Super Bowl</Typography>
                </Grid>

                {/* NFC Championship */}
                <Grid container justifyContent="center" wrap='nowrap' sx={{ marginTop: 0 }}>
                    <Item>
                        <ToggleButtonGroup {...nfcCCControl}>
                            <ToggleButton sx={{ padding: 0 }} value={nfcCCAway}>
                                <img
                                    {...nfcCCAwayControl}
                                    height={50}
                                    alt={"NFC"}
                                    loading="lazy"
                                />
                            </ToggleButton>
                            <ToggleButton sx={{ padding: 0 }} value={nfcCCHome}>
                                <img
                                    {...nfcCCHomeControl}
                                    height={50}
                                    alt={"NFC"}
                                    loading="lazy"
                                />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Item>
                </Grid>
                <Grid>
                    <Typography variant="caption">NFC Championship</Typography>
                </Grid>

                {/* NFC Divisional Round */}
                <Grid container justifyContent="center" wrap='nowrap' sx={{ marginTop: 0 }}>
                    <Grid>
                        <Item>
                            <ToggleButtonGroup {...nfcDR1Control}>
                                <ToggleButton sx={{ padding: 0 }} value={nfcDRLast}>
                                    <img
                                        {...nfcDRLastControl}
                                        height={50}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                                <ToggleButton sx={{ padding: 0 }} value={nfcRank0}>
                                    <img
                                        src={icon(nfcRank0)}
                                        height={50}
                                        alt={emoji(nfcRank0)}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Item>
                    </Grid>
                    <Grid>
                        <Item>
                            <ToggleButtonGroup {...nfcDR2Control}>
                                <ToggleButton sx={{ padding: 0 }} value={nfcDRAway}>
                                    <img
                                        {...nfcDRAwayControl}
                                        height={50}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                                <ToggleButton sx={{ padding: 0 }} value={nfcDRHome}>
                                    <img
                                        {...nfcDRHomeControl}
                                        height={50}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                            </ToggleButtonGroup>
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
                            <ToggleButtonGroup {...nfcWC1Control}>
                                <ToggleButton sx={{ padding: 0 }} value={nfcRank6}>
                                    <img
                                        src={icon(nfcRank6)}
                                        height={50}
                                        alt={emoji(nfcRank6)}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                                <ToggleButton sx={{ padding: 0 }} value={nfcRank1}>
                                    <img
                                        src={icon(nfcRank1)}
                                        height={50}
                                        alt={emoji(nfcRank1)}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Item>
                    </Grid>
                    <Grid>
                        <Item>
                            <ToggleButtonGroup {...nfcWC2Control}>
                                <ToggleButton sx={{ padding: 0 }} value={nfcRank5}>
                                    <img
                                        src={icon(nfcRank5)}
                                        height={50}
                                        alt={emoji(nfcRank5)}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                                <ToggleButton sx={{ padding: 0 }} value={nfcRank2}>
                                    <img
                                        src={icon(nfcRank2)}
                                        height={50}
                                        alt={emoji(nfcRank2)}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Item>
                    </Grid>
                    <Grid>
                        <Item>
                            <ToggleButtonGroup {...nfcWC3Control}>
                                <ToggleButton sx={{ padding: 0 }} value={nfcRank4}>
                                    <img
                                        src={icon(nfcRank4)}
                                        height={50}
                                        alt={emoji(nfcRank4)}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                                <ToggleButton sx={{ padding: 0 }} value={nfcRank3}>
                                    <img
                                        src={icon(nfcRank3)}
                                        height={50}
                                        alt={emoji(nfcRank3)}
                                        loading="lazy"
                                    />
                                </ToggleButton>
                            </ToggleButtonGroup>
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
                    onClick={onSubmit}
                >
                    Save
                </Button>
            </Grid>

            <Grid display="flex" justifyContent="center">
                <Typography variant="caption">{errMsg}</Typography>
            </Grid>
        </Box>

    );
}
