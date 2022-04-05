import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#ff8d1a',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
      text: {
        primary: '#000',
      },
    },
    typography: {
      fontFamily: 'Poppins',
      fontSize: 16,
      h1: { fontSize: 56, fontWeight: 900 },
      h2: { fontSize: 32 },
      h3: { fontSize: 26 },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
  })
);

export default theme;
