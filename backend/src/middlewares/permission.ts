import { RequestHandler } from "express"
import { RoleType } from "../prisma/enums"
import type { Request, Response, NextFunction } from "express"

export const permission = (...allowedRoles: RoleType[]): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction): void => {
        if (!req.user) {
            res.status(401).json({ message: 'Unauthorized' })
            return
        }

        const strictRoles = req.user.role as RoleType

        if (!allowedRoles.includes((strictRoles))) {
            res.status(403).json({ message: 'Forbidden' })
            return
        }

        console.log(req.user)
        next()
    }
}