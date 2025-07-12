import { ReactNode } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }: { children: ReactNode }) => {
  const { token, user } = useAuth();
  console.log("hhhhh", token, user);
  if (token && user?.role) {
    switch (user?.role) {
      case "SuperAdmin":
        return <Navigate to="/superadmin/dashboard" replace />;
      case "Admin":
        return <Navigate to="/admin/dashboard" replace />;
      case "Staff":
        return <Navigate to={"/home"} replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }
  return <>{children}</>;
};

export default PublicRoutes;
