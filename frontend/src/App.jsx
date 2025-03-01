import AuthLayout from "./layout/AuthLayout";
import ProtectedRoute from "./layout/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ConfimUser from "./pages/ConfimUser";
import NewPassword from "./pages/NewPassword";
import AdminPatient from "./pages/AdminPatient";
import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { PatientProvider } from "./context/PatientProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PatientProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="forgot-password/:token" element={<NewPassword />} />
              <Route path="confirm/:id" element={<ConfimUser />} />
            </Route>

            <Route path="/admin" element={<ProtectedRoute />}>
              <Route index element={<AdminPatient />} />
              <Route path="profile" element={<EditProfile />} />
              <Route path="change-profile" element={<ChangePassword />} />
            </Route>
          </Routes>
        </PatientProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
