import express from "express"
import type { Router } from "express"

const authRoutes: Router = express.Router()

import { validateRequest } from "../../../middlewares/validateRequest"
import { registerSchema, loginSchema, verifySchema, forgetPasswordSchema, requestForgetPasswordSchema } from "../../../validations/user/auth/auth.schema"
import { register, login, verifyAccount, resendVerificationToken, forgetPassword, requestForgetPassword, checkUser, logout } from "../../../controllers/user/auth.controller"
import { RoleType } from "../../../prisma/enums"
import { guard } from "../../../middlewares/guard"

authRoutes.post('/login', validateRequest(loginSchema), login)
authRoutes.post('/register', validateRequest(registerSchema), register)
authRoutes.post('/verify', validateRequest(verifySchema), verifyAccount)
authRoutes.post('/resend-verification-token', validateRequest(verifySchema), resendVerificationToken)
authRoutes.post('/forget-password', validateRequest(forgetPasswordSchema), forgetPassword)
authRoutes.get('/request-forget-password', validateRequest(requestForgetPasswordSchema), requestForgetPassword)
authRoutes.get('/check-user', guard(RoleType.BUYER), checkUser)
authRoutes.get('/logout', logout)

authRoutes.get('/status', (req, res) => {
    res.status(200).json({ message: "Auth route is working" })
})

export default authRoutes