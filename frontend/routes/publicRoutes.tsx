import React from "react"
import LandingPage from "../src/LandingPage"
import LoginUser from "../src/pages/user/auth/Login"
import RegisterUser from "../src/pages/user/auth/Register"
import VerificationUser from "../src/pages/user/auth/Verification"
import ForgotPasswordUser from "../src/pages/user/auth/Forgot-password"
import type { RouteObject } from "react-router-dom"

export const publicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <LandingPage/>
    },
    {
        path: '/login',
        element: <LoginUser />
    },
    {
        path: '/register',
        element: <RegisterUser />
    },
    {
        path: '/verification',
        element: <VerificationUser />
    },
    {
        path: '/forgot-password',
        element: <ForgotPasswordUser />
    }
]