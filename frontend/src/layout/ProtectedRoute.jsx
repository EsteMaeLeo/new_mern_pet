import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
  const { auth } = useAuth();
  console.log("from protected")
  return (
    <>
    <h1>This ADMIN</h1>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
