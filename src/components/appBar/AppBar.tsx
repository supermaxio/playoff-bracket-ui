import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import React from 'react';
import { Box, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import useAuth from '../../hooks/useAuth';
import ProfileMenu from '../menu/ProfileMenu';
import { useNavigate } from 'react-router-dom';
import GetIcon from '../icons/icons';


interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const icon = GetIcon;

export default function MainHeader() {
    const { auth }: any = useAuth();
    const navigate = useNavigate();

    const handleHomeIcon = () => {
        navigate("/")
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="absolute">
                <Toolbar
                    sx={{
                        pr: '24px', // keep right padding when drawer closed
                    }}
                >
                    <IconButton
                        
                        edge="start"
                        color="inherit"
                        onClick={handleHomeIcon}
                    >
                        <img src={icon("NFL")} alt="logo" style={{ maxWidth: 40}}/>
                    </IconButton>
                    
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        Playoff Brackets
                    </Typography>
                    {auth?.accessToken
                        ? (
                            <Box>
                                <ProfileMenu />
                            </Box>
                        ) : <></>}
                </Toolbar>
            </AppBar>
        </Box>
    );
};