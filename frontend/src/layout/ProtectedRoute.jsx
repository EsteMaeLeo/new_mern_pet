import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
  const { useAuth } = useAuth();
  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
