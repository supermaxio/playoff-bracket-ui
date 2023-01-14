
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
import { useNavigate } from 'react-router-dom';

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

export default function Users() {
    const [userList, setUserList] = useState<User[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get(
                    "/users/"
                );

                for (let i = 0; i < response.data.length; i++) {
                    response.data[i].Username = response.data[i].Username.toUpperCase();
                }

                setUserList(response.data);
            } catch (err: any) {
                console.log("error in get users");
                console.log(err);
            }
        };

        const intervalId = setInterval(() => {
            // code to be executed every 10 seconds
            getUsers();
        }, 10000);

        getUsers();

        return () => {
            clearInterval(intervalId);
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
                        <TableCell align="right">Tie Value</TableCell>
                    </TableRow>
                </TableHead>
                {userList?.length
                    ? (

                        <TableBody>
                            {userList.map((row) => (
                                <TableRow key={row.Username}>
                                    <TableCell>
                                        <Link color="primary"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate('/users/' + row.Username);
                                            }}
                                            href={'/users/' + row.Username}
                                            sx={{ mt: 3 }}>
                                            {row.Username}
                                        </Link>
                                    </TableCell>
                                    <TableCell>{row.Score}</TableCell>
                                    <TableCell>{row.Rank}</TableCell>
                                    <TableCell align="right">{row.TieBreaker}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    ) : <></>
                }
            </Table>
        </React.Fragment>
    );
}