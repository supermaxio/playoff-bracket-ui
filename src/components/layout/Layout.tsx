import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import MainHeader from "../appBar/AppBar";

const Layout = () => {
    return (
        <main className="App">
            <Box sx={{ display: 'flex' }}>
                <MainHeader />
                <Outlet />
            </Box>
        </main>
    );
};

export default Layout;