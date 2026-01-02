import React from "react";
import {Routes, Route} from "react-router-dom";
import App from "./App";
import LoginUser from "./pages/auth/user/Login";
import RegisterUser from "./pages/auth/user/Register";
import VerificationUser from "./pages/auth/user/Verification";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user/login" element={<LoginUser />} />
      <Route path="/user/register" element={<RegisterUser />} />
      <Route path="/user/register/verify" element={<VerificationUser />} />
    </Routes>
  )
}

export default Router;