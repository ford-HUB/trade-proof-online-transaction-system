import passport from '../config/passport.config'
import type { Request, Response, NextFunction } from 'express'

export const jwtAuth = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', { session: false }, (error: any, user: any, info: any) => {
        if (error || !user) {
            return res.status(401).json({ messsage: 'authentication failed' })
        }

        req.user = user
        next()
    })(req, res, next)
}
