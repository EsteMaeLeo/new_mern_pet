import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <h1>From Auth Layout</h1>
      <Outlet />
    </>
  );
};

export default AuthLayout;
