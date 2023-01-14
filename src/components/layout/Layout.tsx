import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import MainHeader from "../appBar/AppBar";
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Copyright from "../miscellaneous/copyright";

const Layout = () => {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    return (
        <main className="App">

            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}>
                    <MainHeader />
                    <Outlet />
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Box>
            </ThemeProvider>
        </main>
    );
};

export default Layout;