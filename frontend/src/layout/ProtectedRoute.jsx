import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
  const { auth, load } = useAuth();
  console.log(auth);
  console.log(load);
  console.log(auth.profile?._id);
  if (load) return "loading...";
  return (
    <>
      <Header />
        {auth.profile?._id ? <Outlet /> : <Navigate to="/" />}
      <Footer />
    </>
  );
};

export default ProtectedRoute;
