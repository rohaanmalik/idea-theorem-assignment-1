import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      color: '#333333',
    },
  },
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
  },
});

export default theme;