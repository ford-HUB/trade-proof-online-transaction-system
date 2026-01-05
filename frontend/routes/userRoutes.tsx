import React from "react";
import type { RouteObject } from "react-router-dom";
import DashboardUser from "../src/pages/user/Dashboard";

export const userRoutes: RouteObject[] = [
    {
        path: '/dashboard',
        element: <DashboardUser />
    }
]