import { Navigate, Outlet, useLocation } from "react-router";
import { useSelector } from "react-redux";
import { selectRole } from "../../features/auth/authSlice";
const RequireAuth = ({ allowedRoles }) => {
  const role = useSelector(selectRole);
  const location = useLocation();

  const content = allowedRoles.includes(role) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
  return content;
};

export default RequireAuth;
