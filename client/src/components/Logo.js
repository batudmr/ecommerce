import Image from 'next/image';
import Box from '@mui/material/Box';
// @ts-ignore
import logo from '../../public/logo.png';

const Logo = () => {
  return (
    <Box>
      <Image src={logo} />
    </Box>
  );
};

export default Logo;
