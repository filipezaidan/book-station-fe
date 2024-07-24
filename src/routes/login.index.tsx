import { Login } from "@/pages/Login";
import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/login/")({
  component: LoginWrapper,
});

function LoginWrapper() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return <Login />;
}
