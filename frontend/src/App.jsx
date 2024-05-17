import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ConfimUser from "./pages/ConfimUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />}/>
          <Route path="forgot-password" element={<ForgotPassword />}/>
          <Route path="confirm" element={<ConfimUser />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
