import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <h1>Vet and patients Manager</h1>
      <main className="container mx-auto grid grid-cols-2">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
