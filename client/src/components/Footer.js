import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import MailIcon from '@mui/icons-material/Mail';
import Logo from './Logo';
import IconButton from '@mui/material/IconButton';

import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// @ts-ignore
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid
      container
      padding={4}
      direction='row'
      sx={{ backgroundColor: '#f5f5f5' }}
    >
      <Grid
        container
        item
        direction='column'
        xs={12}
        md={4}
        justifyContent='space-around'
      >
        <Grid item alignSelf='center' mb={1}>
          <Logo />
        </Grid>
        <Grid item mb={1}>
          <Typography variant='body1' textAlign='center'>
            Etiler Mah. 1268 Sokak No:2 Daire:301 Konak/İzmir
          </Typography>
        </Grid>
        <Grid item mb={1}>
          <Chip
            sx={{ width: '100%' }}
            icon={<LocalPhoneIcon />}
            label='+90 533 035 66 53'
          />
        </Grid>
        <Grid item mb={1}>
          <Chip
            sx={{ width: '100%' }}
            icon={<MailIcon />}
            label='emsaletesettur@gmail.com'
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction='column'
        xs={12}
        md={4}
        alignItems='center'
      >
        <Grid item>
          <Typography variant='h3' textAlign='center' my={2}>
            Daha Fazla Bilgi
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' color='gray' textAlign='center' my={2}>
            Hakkımızda
          </Typography>
          <Typography variant='body1' color='gray' textAlign='center' my={2}>
            Gizlilik ve Kullanım Şartları
          </Typography>
          <Typography variant='body1' color='gray' textAlign='center' my={2}>
            Kargo ve Taşıma Bilgileri
          </Typography>
          <Typography variant='body1' color='gray' textAlign='center' my={2}>
            Üyelik Sözleşmesi
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction='column'
        xs={12}
        md={4}
        alignItems='center'
      >
        <Grid item>
          <Typography variant='h3' textAlign='center' my={2}>
            Sosyal Medyalarımızı Takip Edin
          </Typography>
        </Grid>
        <Grid item>
          <IconButton size='large'>
            <YouTubeIcon fontSize='large' />
          </IconButton>
          <IconButton size='large'>
            <InstagramIcon fontSize='large' />
          </IconButton>
          <IconButton size='large'>
            <FacebookIcon fontSize='large' />
          </IconButton>
          <IconButton size='large'>
            <TwitterIcon fontSize='large' />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
