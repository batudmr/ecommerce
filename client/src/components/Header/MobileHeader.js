import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const MobileHeader = () => {
  return (
    <>
      <IconButton>
        <LoginIcon />
      </IconButton>
      <IconButton>
        <PersonAddAltIcon />
      </IconButton>
    </>
  );
};

export default MobileHeader;
