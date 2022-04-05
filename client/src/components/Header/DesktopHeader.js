import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Stack from '@mui/material/Stack';

const DesktopHeader = () => {
  return (
    <>
      <Stack direction='row' spacing={2}>
        <Button variant='contained' startIcon={<LoginIcon />}>
          <Typography variant='body1'>Giriş Yapın</Typography>
        </Button>
        <Button variant='contained' startIcon={<PersonAddAltIcon />}>
          <Typography variant='body1'>Kayıt Ol</Typography>
        </Button>
      </Stack>
    </>
  );
};

export default DesktopHeader;
