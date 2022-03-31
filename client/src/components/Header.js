import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
// @ts-ignore
import logo from '../../public/logo.png';

const Header = () => {
  return (
    <AppBar
      component='header'
      position='static'
      sx={{ backgroundColor: '#eff1f2', boxShadow: 'none', color: '#000' }}
    >
      <Toolbar
        component='nav'
        sx={{
          p: 2,
          display: 'inline-flex',
          direction: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Image src={logo} />
        <Stack direction='row' spacing={2}>
          <Button variant='outlined' startIcon={<LoginIcon />} sx={{ py: 2 }}>
            <Typography variant='body1'>Giriş Yapın</Typography>
          </Button>
          <Button variant='contained' startIcon={<PersonAddAltIcon />}>
            <Typography variant='body1'>Kayıt Ol</Typography>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
