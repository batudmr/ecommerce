import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Logo from './Logo';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CategoryTabs from './CategoryTabs';
import DesktopHeader from './Header/DesktopHeader';
import MobileHeader from './Header/MobileHeader';

const categories = [
  { id: 1, name: 'Yeni Ürünler' },
  { id: 2, name: 'Tesettür Abiye' },
  { id: 3, name: 'Tesettür Takımlar' },
  { id: 4, name: 'Tesettür Elbise' },
  { id: 5, name: 'Tesettür Tulum' },
  { id: 6, name: 'Tesettür Tunikler' },
  { id: 7, name: 'Büyük Beden' },
];

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <AppBar
        component='header'
        position='static'
        sx={{ backgroundColor: '#eff1f2', boxShadow: 'none', p: 2 }}
      >
        <Container maxWidth='xl'>
          <Toolbar disableGutters component='nav'>
            <Logo />
            {matches ? <DesktopHeader /> : <MobileHeader />}
            <IconButton>
              <Badge color='primary' badgeContent={0} showZero>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <CategoryTabs categories={categories} />
    </>
  );
};

export default Header;
