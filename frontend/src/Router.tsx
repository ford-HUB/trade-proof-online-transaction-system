import React from "react";
import {Routes, Route} from "react-router-dom";
import App from "./App";
import LoginUser from "./pages/auth/user/Login";
import RegisterUser from "./pages/auth/user/Register";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user/login" element={<LoginUser />} />
      <Route path="/user/register" element={<RegisterUser />} />
    </Routes>
  )
}

export default Router;