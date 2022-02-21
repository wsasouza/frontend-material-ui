import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages';
import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        path: '/',
        icon: 'home',
        label: 'Home',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
