import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import GetIcon, { GetEmoji } from '../icons/icons';
import { Grid, Paper, styled, TextField } from '@mui/material';
import useAuth from '../../hooks/useAuth';
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
    const [afcWC1Winner, setAfcWC1Winner] = useState<string>("");
    const [afcWC2Winner, setAfcWC2Winner] = useState<string>("");
    const [afcWC3Winner, setAfcWC3Winner] = useState<string>("");
    const [afcDR1Winner, setAfcDR1Winner] = useState<string>("");
    const [afcDR2Winner, setAfcDR2Winner] = useState<string>("");
    const [nfcWC1Winner, setNfcWC1Winner] = useState<string>("");
    const [nfcWC2Winner, setNfcWC2Winner] = useState<string>("");
    const [nfcWC3Winner, setNfcWC3Winner] = useState<string>("");
    const [nfcDR1Winner, setNfcDR1Winner] = useState<string>("");
    const [nfcDR2Winner, setNfcDR2Winner] = useState<string>("");
    const [afcCCWinner, setAfcCCWinner] = useState<string>("");
    const [nfcCCWinner, setNfcCCWinner] = useState<string>("");
    const [sbWinner, setSBWinner] = useState<string>("");
    const [fss, setFss] = useState<number>(0);

    const [afcTeams, setAfcTeams] = useState<Team[]>([]);
    const [nfcTeams, setNfcTeams] = useState<Team[]>([]);
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

    const { setAuth }: any = useAuth();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const icon = GetIcon;
    const emoji = GetEmoji;

    const handleAfcWC1Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleAfcWC1Change and the value is: ${newAlignment}`); setAfcWC1Winner(newAlignment); };
    const handleAfcWC2Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleAfcWC2Change and the value is: ${newAlignment}`); setAfcWC2Winner(newAlignment); };
    const handleAfcWC3Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleAfcWC3Change and the value is: ${newAlignment}`); setAfcWC3Winner(newAlignment); };
    const handleAfcDR1Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleAfcDR1Change and the value is: ${newAlignment}`); setAfcDR1Winner(newAlignment); };
    const handleAfcDR2Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleAfcDR2Change and the value is: ${newAlignment}`); setAfcDR2Winner(newAlignment); };
    const handleNfcWC1Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleNfcWC1Change and the value is: ${newAlignment}`); setNfcWC1Winner(newAlignment); };
    const handleNfcWC2Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleNfcWC2Change and the value is: ${newAlignment}`); setNfcWC2Winner(newAlignment); };
    const handleNfcWC3Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleNfcWC3Change and the value is: ${newAlignment}`); setNfcWC3Winner(newAlignment); };
    const handleNfcDR1Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleNfcDR1Change and the value is: ${newAlignment}`); setNfcDR1Winner(newAlignment); };
    const handleNfcDR2Change = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleNfcDR2Change and the value is: ${newAlignment}`); setNfcDR2Winner(newAlignment); };
    const handleAfcCCChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => { console.log(`called handleAfcCCChange  and the value is: ${newAlignment}`); setAfcCCWinner(newAlignment); };
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
    const nfcDR1Control = { value: nfcDR1Winner, onChange: handleNfcDR1Change, exclusive: true, disabled: nfcDRDisabled };
    const nfcDR2Control = { value: nfcDR2Winner, onChange: handleNfcDR2Change, exclusive: true, disabled: nfcDRDisabled };
    const afcCCControl = { value: afcCCWinner, onChange: handleAfcCCChange, exclusive: true, disabled: afcCCDisabled };
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

    function SetupRank(rankArray: string[], winnerArray: string[]): number[] {
        const compareArray = [];

        for (let i = 0; i < winnerArray.length; i++) {
            compareArray.push(rankArray.indexOf(winnerArray[i]));
        }

        compareArray.sort();
        console.log(JSON.stringify(compareArray));
        return compareArray;
    }

    function SetupAFCDivisionalRound() {
        console.log("updated afc dr");
        const rankArray = [afcRank0, afcRank1, afcRank2, afcRank3, afcRank4, afcRank5, afcRank6];
        const winningOrder = SetupRank(rankArray, [afcWC1Winner, afcWC2Winner, afcWC3Winner]);
        const legalValues = ["[4,5,6]", "[3,5,6]", "[2,4,6]", "[2,3,6]", "[1,4,5]", "[1,3,5]", "[1,2,4]", "[1,2,3]"];

        if (legalValues.indexOf(JSON.stringify(winningOrder)) == -1) {
            setAfcDRLast("AFC"); setAfcDRAway("AFC"); setAfcDRHome("AFC");
        } else {
            setAfcDRHome(rankArray[winningOrder[0]]);
            setAfcDRAway(rankArray[winningOrder[1]]);
            setAfcDRLast(rankArray[winningOrder[2]]);
            setAfcDRDisabled(false);
        }
    }

    function SetupNFCDivisionalRound() {
        console.log("updated nfc dr");
        const rankArray = [nfcRank0, nfcRank1, nfcRank2, nfcRank3, nfcRank4, nfcRank5, nfcRank6];
        const winningOrder = SetupRank(rankArray, [nfcWC1Winner, nfcWC2Winner, nfcWC3Winner]);
        const legalValues = ["[4,5,6]", "[3,5,6]", "[2,4,6]", "[2,3,6]", "[1,4,5]", "[1,3,5]", "[1,2,4]", "[1,2,3]"];

        if (legalValues.indexOf(JSON.stringify(winningOrder)) == -1) {
            setNfcDRLast("NFC"); setNfcDRAway("NFC"); setNfcDRHome("NFC");
        } else {
            setNfcDRHome(rankArray[winningOrder[0]]);
            setNfcDRAway(rankArray[winningOrder[1]]);
            setNfcDRLast(rankArray[winningOrder[2]]);
            setNfcDRDisabled(false);
        }
    }

    function SetupAFCChampionship() {
        console.log("updated afc cc");
        const rankArray = [afcRank0, afcDRHome, afcDRAway, afcDRLast];
        const winningOrder = SetupRank(rankArray, [afcDR1Winner, afcDR2Winner]);
        const legalValues = ["[0,1]", "[0,2]", "[1,3]", "[2,3]"];

        if (legalValues.indexOf(JSON.stringify(winningOrder)) == -1) {
            setAfcCCAway("AFC"); setAfcCCHome("AFC"); setAfcSB("AFC"); setAfcCCDisabled(true); setSBDisabled(true); setAfcCCWinner(""); setSBWinner("");
        } else {
            setAfcCCHome(rankArray[winningOrder[0]]);
            setAfcCCAway(rankArray[winningOrder[1]]);
            setAfcCCDisabled(false);
        }
    }

    function SetupNFCChampionship() {
        console.log("updated nfc cc");
        const rankArray = [nfcRank0, nfcDRHome, nfcDRAway, nfcDRLast];
        const winningOrder = SetupRank(rankArray, [nfcDR1Winner, nfcDR2Winner]);
        const legalValues = ["[0,1]", "[0,2]", "[1,3]", "[2,3]"];

        if (legalValues.indexOf(JSON.stringify(winningOrder)) == -1) {
            setNfcCCAway("NFC"); setNfcCCHome("NFC"); setNfcSB("NFC"); setNfcCCDisabled(true); setSBDisabled(true); setNfcCCWinner(""); setSBWinner("");
        } else {
            setNfcCCHome(rankArray[winningOrder[0]]);
            setNfcCCAway(rankArray[winningOrder[1]]);
            setNfcCCDisabled(false);
        }
    }

    function SetupAFCSuperBowl() {
        switch (afcCCWinner) {
            case afcCCAway: setAfcSB(afcCCAway); if (nfcCCWinner) { setSBDisabled(false); } break;
            case afcCCHome: setAfcSB(afcCCHome); if (nfcCCWinner) { setSBDisabled(false); } break;
            default: setAfcSB("AFC"); setSBDisabled(true); setSBWinner(""); break;
        }
    }

    function SetupNFCSuperBowl() {
        switch (nfcCCWinner) {
            case nfcCCAway: setNfcSB(nfcCCAway); if (afcCCWinner) { setSBDisabled(false); } break;
            case nfcCCHome: setNfcSB(nfcCCHome); if (afcCCWinner) { setSBDisabled(false); } break;
            default: setNfcSB("NFC"); setSBDisabled(true); setSBWinner(""); break;
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
    }, [afcWC1Winner, afcWC2Winner, afcWC3Winner, afcDR1Winner, afcDR2Winner, afcCCWinner, afcDRLast, afcDRAway, afcDRHome, afcCCAway, afcCCHome]);

    useEffect(() => {
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

                const afcTeams = response.data[0].teams;
                const nfcTeams = response.data[1].teams;

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

                try {
                    const response = await axiosPrivate.get(
                        "/brackets/",
                        {
                            signal: controller.signal,
                            headers: { 'Content-Type': 'application/json' },
                            withCredentials: true
                        }
                    );
                    // verify new or saved bracket
                    if (response?.data.super_bowl_champion == "") {
                        return;
                    }

                    isMounted && setAfcWC1Winner(response?.data.afc_wild_card_1_winner);
                    isMounted && setAfcWC2Winner(response?.data.afc_wild_card_2_winner);
                    isMounted && setAfcWC3Winner(response?.data.afc_wild_card_3_winner);
                    isMounted && setNfcWC1Winner(response?.data.nfc_wild_card_1_winner);
                    isMounted && setNfcWC2Winner(response?.data.nfc_wild_card_2_winner);
                    isMounted && setNfcWC3Winner(response?.data.nfc_wild_card_3_winner);

                    //set dr
                    const afcWinningOrder = SetupRank(
                        [afcTeams[0].name, afcTeams[1].name, afcTeams[2].name, afcTeams[3].name, afcTeams[4].name, afcTeams[5].name, afcTeams[6].name],
                        [response.data.afc_wild_card_1_winner, response.data.afc_wild_card_2_winner, response.data.afc_wild_card_3_winner]
                    );
                    const namedAfcWCWinningOrder = [afcTeams[afcWinningOrder[0]].name, afcTeams[afcWinningOrder[1]].name, afcTeams[afcWinningOrder[2]].name];

                    isMounted && setAfcDRHome(namedAfcWCWinningOrder[0]);
                    isMounted && setAfcDRAway(namedAfcWCWinningOrder[1]);
                    isMounted && setAfcDRLast(namedAfcWCWinningOrder[2]);
                    isMounted && setAfcDRDisabled(false);

                    const nfcWinningOrder = SetupRank(
                        [nfcTeams[0].name, nfcTeams[1].name, nfcTeams[2].name, nfcTeams[3].name, nfcTeams[4].name, nfcTeams[5].name, nfcTeams[6].name],
                        [response.data.nfc_wild_card_1_winner, response.data.nfc_wild_card_2_winner, response.data.nfc_wild_card_3_winner]
                    );

                    const namedNfcWCWinningOrder = [nfcTeams[nfcWinningOrder[0]].name, nfcTeams[nfcWinningOrder[1]].name, nfcTeams[nfcWinningOrder[2]].name];
                    isMounted && setNfcDRHome(namedNfcWCWinningOrder[0]);
                    isMounted && setNfcDRAway(namedNfcWCWinningOrder[1]);
                    isMounted && setNfcDRLast(namedNfcWCWinningOrder[2]);
                    isMounted && setNfcDRDisabled(false);

                    isMounted && setAfcDR1Winner(response?.data.afc_divisional_round_1_winner);
                    isMounted && setAfcDR2Winner(response?.data.afc_divisional_round_2_winner);
                    isMounted && setNfcDR1Winner(response?.data.nfc_divisional_round_1_winner);
                    isMounted && setNfcDR2Winner(response?.data.nfc_divisional_round_2_winner);

                    //set cc
                    const nfcDRTeams = [nfcTeams[0].name, namedNfcWCWinningOrder[0], namedNfcWCWinningOrder[1], namedNfcWCWinningOrder[2]];
                    const nfcDRWinningOrder = SetupRank(nfcDRTeams, [response.data.nfc_divisional_1_winner, response.data.nfc_divisional_2_winner]);

                    isMounted && setNfcCCHome(nfcDRTeams[nfcDRWinningOrder[0]]);
                    isMounted && setNfcCCAway(nfcDRTeams[nfcDRWinningOrder[1]]);
                    isMounted && setNfcCCDisabled(false);

                    const afcDRTeams = [afcTeams[0].name, namedAfcWCWinningOrder[0], namedAfcWCWinningOrder[1], namedAfcWCWinningOrder[2]];
                    const afcDRWinningOrder = SetupRank(afcDRTeams, [response.data.afc_divisional_1_winner, response.data.afc_divisional_2_winner]);

                    isMounted && setAfcCCHome(afcDRTeams[afcDRWinningOrder[0]]);
                    isMounted && setAfcCCAway(afcDRTeams[afcDRWinningOrder[1]]);
                    isMounted && setAfcCCDisabled(false);

                    isMounted && setAfcCCWinner(response?.data.afc_conference_champion);
                    isMounted && setNfcCCWinner(response?.data.nfc_conference_champion);

                    // set sb
                    isMounted && setAfcSB(response?.data.afc_conference_champion);
                    isMounted && setNfcSB(response?.data.nfc_conference_champion);
                    isMounted && setSBDisabled(false);

                    isMounted && setFss(response?.data.final_score_sum);

                    await new Promise(f => setTimeout(f, 100));
                    isMounted && setSBWinner(response?.data.super_bowl_champion);
                } catch (err: any) {
                    console.log("error in get brackets");
                    console.log(err);
                    setAuth({});
                    navigate("/login");
                }

            } catch (err: any) {
                console.log("error in get rankings");
                console.log(err);
                setAuth({});
                navigate("/login");
            }
        };

        getTeams();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [nfcWC1Winner, nfcWC2Winner, nfcWC3Winner, nfcDR1Winner, nfcDR2Winner, nfcCCWinner, nfcDRLast, nfcDRAway, nfcDRHome, nfcCCAway, nfcCCHome, afcWC1Winner, afcWC2Winner, afcWC3Winner, afcDR1Winner, afcDR2Winner, afcCCWinner, afcDRLast, afcDRAway, afcDRHome, afcCCAway, afcCCHome, sbWinner, fss]);

    const onSubmit = async (values: any) => {
        values.preventDefault();
        console.log("Values: ", values);
        setErrMsg("");

        console.log(nfcWC1Winner, nfcWC2Winner, nfcWC3Winner, nfcDR1Winner, nfcDR2Winner, nfcCCWinner, afcWC1Winner, afcWC2Winner, afcWC3Winner, afcDR1Winner, afcDR2Winner, afcCCWinner, sbWinner, fss);
        if (!nfcWC1Winner || !nfcWC2Winner || !nfcWC3Winner || !nfcDR1Winner || !nfcDR2Winner || !nfcCCWinner || !afcWC1Winner || !afcWC2Winner || !afcWC3Winner || !afcDR1Winner || !afcDR2Winner || !afcCCWinner || !sbWinner || !fss) {
            setErrMsg("ERROR: Missing selections");
            return;
        }

        const toSubmit = {
            "afc_wild_card_1_winner": afcWC1Winner,
            "afc_wild_card_2_winner": afcWC2Winner,
            "afc_wild_card_3_winner": afcWC3Winner,
            "nfc_wild_card_1_winner": nfcWC1Winner,
            "nfc_wild_card_2_winner": nfcWC2Winner,
            "nfc_wild_card_3_winner": nfcWC3Winner,
            "afc_divisional_round_1_winner": afcDR1Winner,
            "afc_divisional_round_2_winner": afcDR2Winner,
            "nfc_divisional_round_1_winner": nfcDR1Winner,
            "nfc_divisional_round_2_winner": nfcDR2Winner,
            "afc_conference_champion": afcCCWinner,
            "nfc_conference_champion": nfcCCWinner,
            "super_bowl_champion": sbWinner,
            "final_score_sum": fss
        };

        console.log("tosubmit: ", toSubmit);

        try {
            const response = await axiosPrivate.put(
                "/brackets/",
                toSubmit,
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));

            setErrMsg("Saved successfully!");
        } catch (err: any) {
            if (!err?.response) {
                console.log("Error: ", err);
                setErrMsg('ERROR: No server response');
            } else if (err && err instanceof Error) {
                setErrMsg(err.message);
                console.log("Error: ", err);
            } else {
                console.log("Error: ", err);
                setErrMsg('ERROR: Submit failed');
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

                            {afcTeams?.length
                                ? (
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

                                ) : <ToggleButtonGroup>
                                    <ToggleButton sx={{ padding: 0 }} value='1'>
                                        <img
                                            src={icon("AFC")}
                                            height={50}
                                            alt={emoji("AFC")}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                    <ToggleButton sx={{ padding: 0 }} value='1'>
                                        <img
                                            src={icon("AFC")}
                                            height={50}
                                            alt={emoji("AFC")}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            }
                        </Item>
                    </Grid>
                    <Grid>
                        <Item>

                            {afcTeams?.length
                                ? (
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

                                ) : <ToggleButtonGroup>
                                    <ToggleButton sx={{ padding: 0 }} value='1'>
                                        <img
                                            src={icon("AFC")}
                                            height={50}
                                            alt={emoji("AFC")}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                    <ToggleButton sx={{ padding: 0 }} value='1'>
                                        <img
                                            src={icon("AFC")}
                                            height={50}
                                            alt={emoji("AFC")}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            }
                        </Item>
                    </Grid>
                    <Grid>
                        <Item>

                            {afcTeams?.length
                                ? (
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

                                ) : <ToggleButtonGroup>
                                    <ToggleButton sx={{ padding: 0 }} value='1'>
                                        <img
                                            src={icon("AFC")}
                                            height={50}
                                            alt={emoji("AFC")}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                    <ToggleButton sx={{ padding: 0 }} value='1'>
                                        <img
                                            src={icon("AFC")}
                                            height={50}
                                            alt={emoji("AFC")}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            }
                        </Item>
                    </Grid>
                </Grid>
                <Grid>
                    <Typography variant="caption">AFC Wild Card Round - 3 points</Typography>
                </Grid>

                {/* AFC Divisional Round */}
                <Grid container justifyContent="center" wrap='nowrap' sx={{ marginTop: 0 }}>
                    <Grid>
                        <Item>

                            {afcTeams?.length
                                ? (
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

                                ) : <ToggleButtonGroup>
                                    <ToggleButton sx={{ padding: 0 }} value='1'>
                                        <img
                                            src={icon("AFC")}
                                            height={50}
                                            alt={emoji("AFC")}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                    <ToggleButton sx={{ padding: 0 }} value='1'>
                                        <img
                                            src={icon("AFC")}
                                            height={50}
                                            alt={emoji("AFC")}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            }
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
                    <Typography variant="caption">AFC Divisional Round - 6 points</Typography>
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
                    <Typography variant="caption">AFC Championship - 12 points</Typography>
                </Grid>

                {/* SuperBowl */}
                <Grid container justifyContent="center" wrap='nowrap' sx={{ margin: 0 }}>
                    <Grid>
                        <Box>
                            <img src={icon("SB")} alt="logo" style={{ maxWidth: 100 }} />
                        </Box>

                    </Grid>
                    <Grid>

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

                    </Grid>
                    <Grid>
                        <TextField
                            {...fssControl}
                            sx={{
                                width: 100
                            }}
                            margin="normal"
                            required
                            id="finalscore"
                            label="Final score"
                            name="finalscore"
                            type="number"
                            size="small"
                            value={fss}
                            InputProps={{ inputProps: { min: 0, max: 999 } }}
                        />
                    </Grid>

                </Grid>
                <Grid>
                    <Typography variant="caption">Super Bowl - 24 points</Typography>
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
                    <Typography variant="caption">NFC Championship 12 points</Typography>
                </Grid>

                {/* NFC Divisional Round */}
                <Grid container justifyContent="center" wrap='nowrap' sx={{ marginTop: 0 }}>
                    <Grid>
                        <Item>

                            {nfcTeams?.length
                                ? (
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

                                ) : <ToggleButtonGroup>
                                    <ToggleButton sx={{ padding: 0 }} value='1'>
                                        <img
                                            src={icon("NFC")}
                                            height={50}
                                            alt={emoji("NFC")}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                    <ToggleButton sx={{ padding: 0 }} value='1'>
                                        <img
                                            src={icon("NFC")}
                                            height={50}
                                            alt={emoji("NFC")}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            }
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
                    <Typography variant="caption">NFC Divisional Round - 6 points</Typography>
                </Grid>

                {/* NFC Wild Card */}
                <Grid container justifyContent="center" wrap='nowrap' sx={{ marginTop: 0 }}>
                    <Grid>
                        <Item>

                            {nfcTeams?.length
                                ? (
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

                                ) :
                                <ToggleButtonGroup>
                                    <ToggleButton sx={{ padding: 0 }} value='1'>
                                        <img
                                            src={icon("NFC")}
                                            height={50}
                                            alt={emoji("NFC")}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                    <ToggleButton sx={{ padding: 0 }} value='1'>
                                        <img
                                            src={icon("NFC")}
                                            height={50}
                                            alt={emoji("NFC")}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            }
                        </Item>
                    </Grid>
                    <Grid>
                        <Item>

                            {nfcTeams?.length
                                ? (
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

                                ) : <ToggleButtonGroup>
                                    <ToggleButton sx={{ padding: 0 }} value='1'>
                                        <img
                                            src={icon("NFC")}
                                            height={50}
                                            alt={emoji("NFC")}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                    <ToggleButton sx={{ padding: 0 }} value='1'>
                                        <img
                                            src={icon("NFC")}
                                            height={50}
                                            alt={emoji("NFC")}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            }
                        </Item>
                    </Grid>
                    <Grid>
                        <Item>

                            {nfcTeams?.length
                                ? (
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

                                ) : <ToggleButtonGroup>
                                    <ToggleButton sx={{ padding: 0 }} value='1'>
                                        <img
                                            src={icon("NFC")}
                                            height={50}
                                            alt={emoji("NFC")}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                    <ToggleButton sx={{ padding: 0 }} value='1'>
                                        <img
                                            src={icon("NFC")}
                                            height={50}
                                            alt={emoji("NFC")}
                                            loading="lazy"
                                        />
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            }
                        </Item>
                    </Grid>
                </Grid>
                <Grid>
                    <Typography variant="caption">NFC Wild Card Round - 3 points</Typography>
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
