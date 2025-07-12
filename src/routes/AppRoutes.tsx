import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/layouts/ProtectedRoute";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";
import SuperAdminDashboard from "../pages/superadmin/SuperAdminDashboard";
import PublicRoutes from "../components/layouts/PublicRoutes";

const AppRoutes = () => (
  <Routes>
    <Route
      path="/login"
      element={
        <PublicRoutes>
          <LoginPage />
        </PublicRoutes>
      }
    />

    <Route element={<ProtectedRoute />}>
      <Route path="/superadmin/dashboard" element={<SuperAdminDashboard />} />
      {/* <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/home" element={<StaffDashboard />} /> */}
    </Route>

    <Route path="*" element={<Navigate to={"/login"} />} />
  </Routes>
);

export default AppRoutes;
