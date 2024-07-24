import { useAuth } from "@/contexts/AuthContext";
import { Navigate, Outlet } from "@tanstack/react-router";

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
