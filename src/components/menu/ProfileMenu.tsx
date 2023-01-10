import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import useLogout from '../../hooks/useLogout';
import useAuth from '../../hooks/useAuth';

export default function ProfileMenu() {
  const { auth }: any = useAuth();
  const navigate = useNavigate();
  const logout = useLogout();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMyBracket = () => {
    setAnchorEl(null);
    navigate("/");
  };

  const handleDashboard = () => {
    setAnchorEl(null);
    navigate("/dashboard");
  };

  const handleSignout = async () => {
    await logout();
    setAnchorEl(null);
    navigate("/login");
  };

  return (
    <div>
      <Button
        color="inherit"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {auth?.username}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/* <MenuItem onClick={handleDashboard}>Dashboard</MenuItem> */}
        <MenuItem onClick={handleMyBracket}>My bracket</MenuItem>
        <MenuItem onClick={handleSignout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}