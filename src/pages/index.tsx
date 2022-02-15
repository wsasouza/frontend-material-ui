import { Button } from '@mui/material';
import { useAppThemeContext } from '../shared/contexts/ThemeContext';

export function Home() {
  const { toggleTheme } = useAppThemeContext();

  return (
    <Button variant="contained" color="primary" onClick={toggleTheme}>
      Click me
    </Button>
  );
}
