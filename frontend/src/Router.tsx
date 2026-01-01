import React from "react";
import {Routes, Route} from "react-router-dom";
import App from "./App";
import LoginUser from "./pages/auth/user/login";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user/login" element={<LoginUser />} />
    </Routes>
  )
}

export default Router;