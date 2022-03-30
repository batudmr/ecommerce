import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// @ts-ignore
import logo from '../../public/logo.png';

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AppBar
      component='header'
      position='static'
      sx={{ backgroundColor: '#eff1f2', boxShadow: 'none', color: '#000' }}
    >
      <Toolbar disableGutters component='nav'>
        <Stack spacing={2} direction='row'>
          <Box>Logo</Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
