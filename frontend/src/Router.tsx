import React from "react";
import {Routes, Route} from "react-router-dom";
import App from "./App";
import LoginUser from "./pages/user/auth/Login";
import RegisterUser from "./pages/user/auth/Register";
import VerificationUser from "./pages/user/auth/Verification";
import ForgotPasswordUser from "./pages/user/auth/Forgot-password";
import LoginAdmin from "./pages/admin/auth/Login";
import ForgotPasswordAdmin from "./pages/admin/auth/Forgot-password";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />

      {/* USER AUTH */}
      <Route path="/user/login" element={<LoginUser />} />
      <Route path="/user/register" element={<RegisterUser />} />
      <Route path="/user/register/verify" element={<VerificationUser />} />
      <Route path="/user/forgot-password" element={<ForgotPasswordUser />} />

      {/* ADMIN AUTH */}
      <Route path="/admin/login" element={<LoginAdmin />} />
      <Route path="/admin/forgot-password" element={<ForgotPasswordAdmin />} />
    </Routes>
  )
}

export default Router;