import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#127C95',
    },
    secondary: {
      main: '#4790A1',
    },
    error: {
      main: '#DA1E28',
    },
    success: {
      main: '#CDFADC',
    },
    background: {
      default: '#F5F5F5',
    },
    // alertError: {
    //   main: '#FFC0C0',
    // },
  },
});

export default theme;