import { Button } from '@mui/material';
import { MenuLateral } from '../shared/components';
import { useDrawerContext } from '../shared/contexts';
import { useAppThemeContext } from '../shared/contexts/ThemeContext';

export function Home() {
  const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <MenuLateral>
        <Button variant="contained" color="primary" onClick={toggleTheme}>
          Tema
        </Button>
        <Button variant="contained" color="primary" onClick={toggleDrawerOpen}>
          Menu lateral
        </Button>
      </MenuLateral>
    </>
  );
}
