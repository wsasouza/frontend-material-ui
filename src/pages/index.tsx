import { Box, Button } from '@mui/material';
import { MenuLateral } from '../shared/components';
import { useAppThemeContext } from '../shared/contexts/ThemeContext';

export function Home() {
  const { toggleTheme } = useAppThemeContext();

  return (
    <>
      <MenuLateral>
        <Button variant="contained" color="primary" onClick={toggleTheme}>
          Click me
        </Button>
      </MenuLateral>
    </>
  );
}
