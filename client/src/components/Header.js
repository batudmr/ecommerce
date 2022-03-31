import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../components/Logo';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const categories = [
  { name: 'Yeni Ürünler' },
  { name: 'Tesettür Abiye' },
  { name: 'Tesettür Takımlar' },
  { name: 'Tesettür Elbise' },
  { name: 'Tesettür Tulum' },
  { name: 'Tesettür Tunikler' },
  { name: 'Büyük Beden' },
];

const Header = () => {
  return (
    <>
      <AppBar
        component='header'
        position='static'
        sx={{ backgroundColor: '#eff1f2', boxShadow: 'none', color: '#000' }}
      >
        <Container maxWidth='xl'>
          <Toolbar
            component='nav'
            sx={{
              p: 2,
              display: 'flex',
              direction: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Logo />
            <Stack direction='row' spacing={2} sx={{ ml: 'auto' }}>
              <Button
                variant='outlined'
                startIcon={<LoginIcon />}
                sx={{ py: 2 }}
              >
                <Typography variant='body1'>Giriş Yapın</Typography>
              </Button>
              <Button variant='contained' startIcon={<PersonAddAltIcon />}>
                <Typography variant='body1'>Kayıt Ol</Typography>
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          my: 2,
        }}
      >
        <Container maxWidth='xl'>
          <ButtonGroup
            fullWidth
            disableFocusRipple
            size='large'
            variant='text'
            aria-label='text button group'
          >
            {categories.map((category) => (
              <Button sx={{ py: 2 }} key={category.name}>
                {category.name}
              </Button>
            ))}
          </ButtonGroup>
        </Container>
      </Box>
    </>
  );
};

export default Header;
