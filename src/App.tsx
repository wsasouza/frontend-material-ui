import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { DrawerProvider } from './shared/contexts';
import { AppThemeProvider } from './shared/contexts/ThemeContext';

export function App() {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}
