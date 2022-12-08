import { Navigate, Outlet } from 'react-router-dom';

export interface ProtectedRouteProps {
  user: any;
  redirectPath: string;
  children: React.ReactNode;
}

const ProtectedRoute = ({
  user,
  redirectPath = '/landing',
  children,
}: ProtectedRouteProps) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
