
import * as React from 'react';
import { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../title/Title';
import { axiosPrivate } from '../../api/axios';
import { User } from '../../objects/User';

// Generate Order Data
function createData(
    username: string,
    score: number,
    tiebreaker: number,
    rank: number,
) {
    return { username, score, tiebreaker, rank };
}

const rows = [
    createData(
        "MAX",
        26,
        75,
        3,
    ),
    createData(
        "MAX",
        26,
        75,
        3,
    ),
    createData(
        "MAX",
        26,
        75,
        3,
    ),
    createData(
        "MAX",
        26,
        75,
        3,
    ),
];

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

export default function Users() {
    const [userList, setUserList] = useState<User[]>([]);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get(
                    "/users/"
                );

                setUserList(response.data);
            } catch (err: any) {
                console.log("error in get users");
                console.log(err);
            }
        };
        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, []);

    return (
        <React.Fragment>
            <Title>Rank</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell>Score</TableCell>
                        <TableCell>Rank</TableCell>
                        <TableCell align="right">Tie Breaker Value</TableCell>
                    </TableRow>
                </TableHead>
                {userList?.length
                    ? (

                        <TableBody>
                            {userList.map((row) => (
                                <TableRow key={row.username}>
                                    <TableCell>
                                        <Link color="primary" href={'/brackets/' + row.username} onClick={preventDefault} sx={{ mt: 3 }}>
                                            {row.username}
                                        </Link></TableCell>
                                    <TableCell>{row.score}</TableCell>
                                    <TableCell>{row.rank}</TableCell>
                                    <TableCell align="right">{row.tiebreaker}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    ) : <></>
                }
            </Table>
        </React.Fragment>
    );
}