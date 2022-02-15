import { createTheme } from '@mui/material';
import { grey, orange } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: orange[700],
      dark: orange[800],
      light: orange[500],
      contrastText: '#000',
    },
    secondary: {
      main: grey[500],
      dark: grey[400],
      light: grey[300],
      contrastText: '#000',
    },
    background: {
      default: '#d3d3d3',
      paper: '#dcdcdc',
    },
  },
});
