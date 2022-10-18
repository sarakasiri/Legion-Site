import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import MenuIcon from '@mui/icons-material/Menu';
import { Instagram , WhatsApp , Telegram} from '@mui/icons-material';

import logo from '../../assets/images/logo.png';

import './styles/styles.css' ;

const pages = ["بازی میراژ" , "صفحه اصلی" , "وبلاگ"];
const settings = [<Instagram /> , <WhatsApp /> , <Telegram />];



const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar className='appBar' color='inherit'>
      <Container maxWidth="lg" >
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              
              <MenuIcon />
              </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none' },
              }}> 
              
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            <Box sx={{ flexGrow: 1 , display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 1 , pl: 6 , color: 'black', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <img src={logo} className="logo" />

          <Box sx={{ flexGrow: 1, ml:32 , display: { xs: 'none', md: 'flex' } }}>
              {settings.map((setting) => (
                <Button
                key={setting}
                sx={{ my: 1 , pl: 7 , color: 'black', display: 'block' }}
                >
                  {setting}
                </Button>
              ))}
            </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
