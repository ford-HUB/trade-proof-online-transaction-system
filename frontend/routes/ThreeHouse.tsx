import type { RouteObject } from "react-router-dom"
import { publicRoutes } from './publicRoutes'
import { userRoutes } from './userRoutes'
import { adminRoutes } from './adminRoutes'

export const ThreeHouse:RouteObject[] = [
    ...publicRoutes,
    ...userRoutes,
    ...adminRoutes
]