import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function ProfileMenu() {
  const { auth, setAuth }: any = useAuth();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMyBracket = () => {
    // signOut();
    setAnchorEl(null);
    navigate("/login");
  };

  const handleSignout = () => {
    // signOut();
    setAuth({});
    setAnchorEl(null);
    navigate("/login");
  };
  
  return (
    <div>
      <Button
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleMyBracket}>My bracket</MenuItem>
        <MenuItem onClick={handleSignout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}