import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const logged = sessionStorage.getItem('user');
  return <>{logged ? children : <Navigate to="login" />}</>;
}
