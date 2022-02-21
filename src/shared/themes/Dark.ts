import { createTheme } from '@mui/material';
import { grey, orange } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: orange[700],
      dark: orange[800],
      light: orange[500],
      contrastText: '#fff',
    },
    secondary: {
      main: grey[500],
      dark: grey[400],
      light: grey[300],
      contrastText: '#fff',
    },
    background: {
      default: '#202124',
      paper: '#303134',
    },
  },
  typography: {
    allVariants: {
      color: '#fff',
    },
  },
});
