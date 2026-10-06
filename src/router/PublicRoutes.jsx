import { Navigate, Outlet } from 'react-router';

export const PublicRoutes = () => {
  const isLogged = localStorage.getItem('isLogged') === 'true';

  return isLogged ? <Navigate to="/" replace /> : <Outlet />;
};
