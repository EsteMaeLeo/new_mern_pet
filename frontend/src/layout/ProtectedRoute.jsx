import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
  const { auth, load } = useAuth();
  console.log(auth);
  console.log(load);
  console.log(auth.profile?._id)
  if (load) return "loading...";
  return (
    <>
      <h1>This ADMIN</h1>
      {auth.profile?._id ? <Outlet /> : <Navigate to="/" />}
    </>
  );
};

export default ProtectedRoute;
