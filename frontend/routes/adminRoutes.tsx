import React from "react";
import type { RouteObject } from "react-router-dom";
import LoginAdmin from "../src/pages/admin/auth/Login";
import ForgotPasswordAdmin from "../src/pages/admin/auth/Forgot-password";

export const adminRoutes: RouteObject[] = [
    {
        path: '/admin/login',
        element: <LoginAdmin />
    },
    {
        path: '/admin/forgot-password',
        element: <ForgotPasswordAdmin />
    }
]