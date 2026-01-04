import { generateJwt } from "../../utils/generateJwt"
import { generatedToken } from "../../utils/generateToken"
import bcrypt from "bcrypt"
import { prisma } from "../../config/prisma.instance"
import type { Request, Response } from "express"
import { IForgetPasswordRequest, ILoginRequest, IRegisterRequest, IRequestForgetPassword, IVerifyRequest } from "../../@types/user/auth/auth.types"
import { sendMail } from "../../services/sendMail"
import { identifyRole } from "../../utils/identifyRole"

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const ValidatedData = res.locals.validatedData as IRegisterRequest;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(ValidatedData.body.password, salt);

        await prisma.$transaction(async (prisma) => {
            const newAccount = await prisma.account.create({
                data: {
                    email: ValidatedData.body.email,
                    password: hashedPassword,
                }
            })

            const newUser = await prisma.user.create({
                data: {
                    username: ValidatedData.body.username,
                    account_id : newAccount.account_id,
                }
            })

            const newRole = await prisma.role.create({
                data: {
                    account_id: newAccount.account_id,
                    name: identifyRole(ValidatedData.body.type as string),
                    description: `This ${ValidatedData.body.type} allowed to access based site based on their respective role`
                }
            })

            const genToken = await generatedToken();
            const newVerificationToken = await prisma.verificationToken.create({
                data: {
                    token: genToken,
                    account_id: newAccount.account_id,
                    expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes from now
                }
            })

            await sendMail(ValidatedData.body.email, 'Account Verification Code', 'VerificationCode.html', {
                receiver_name: ValidatedData.body.username,
                token: genToken,
                }
            )

            if(!newAccount || !newUser || !newVerificationToken || !newRole) {
                throw new Error("Failed to create user account")
            }

            return res.status(201).json({ message: "Account registered successfully" })
        })

    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
        console.log('register account failed: ', error);
    }
}

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const ValidatedData = res.locals.validatedData as ILoginRequest;

        const validEmail = await prisma.account.findUnique({
            where: {
                email: ValidatedData.body.email,
            }
        });

        if(!validEmail) { 
            res.status(404).json({ message: "Invalid Credentials" }) 
            return
        }

        const isPasswordValid = await bcrypt.compare(ValidatedData.body.password, validEmail.password);

        if(!isPasswordValid) { 
            res.status(404).json({ message: "Invalid Credentials" }) 
            return
        }

        generateJwt(validEmail.account_id, res)

        res.status(200).json({ message: "Login successful" })
        return

    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
        console.log('login account failed: ', error);
    }
}

export const verifyAccount = async (req: Request, res: Response): Promise<void> => {
    try {
        const ValidatedData = res.locals.validatedData as IVerifyRequest;

        console.log('ValidatedData: ', ValidatedData);

        const verificationRecord = await prisma.verificationToken.findFirst({
            where: {
                token: ValidatedData.body.token,
                account: {
                    is: {
                        email: ValidatedData.body.email,
                    }
                }
            }
        })

        if (verificationRecord?.expiresAt! < new Date()) {
            res.status(400).json({ message: "Verification code has expired" })
            return
        }

        if (!verificationRecord) {
            res.status(400).json({ message: "Invalid verification code" })
            return
        }

        await prisma.$transaction(async (prisma) => {
            await prisma.account.update({
                where: {
                    account_id: verificationRecord.account_id,
                },
                data: {
                    is_email_verified: true,
                }
            })

            await prisma.verificationToken.deleteMany({
                where: {
                    account_id: verificationRecord.account_id,
                }
            })
        })

        res.status(200).json({ message: "Account verified successfully" })
        return

    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
        console.log('verify account failed: ', error);
    }
}

export const resendVerificationToken = async (req: Request, res: Response): Promise<void> => {
    try {
        const ValidatedData = res.locals.validatedData as IVerifyRequest;

        const checkVtoken = await prisma.verificationToken.findFirst({
            where: {
                token: ValidatedData.body.token,
                expiresAt: {
                    lt: new Date(),
                },
                account: {
                    is: {
                        email: ValidatedData.body.email,
                    }
                }
            },
            include: {
                account: {
                    include: {
                        user: {
                            select: {
                                username: true,
                            }
                        },
                    }
                },
            }
        })

        if (!checkVtoken) {
            res.status(400).json({ message: "Current token is still valid" })
            return
        }

        console.log('Generating new token for: ', checkVtoken.account.user?.username);

        const generatedNewToken = await generatedToken();

        await prisma.verificationToken.updateMany({
            where: {
                account: {
                    is: {
                        email: ValidatedData.body.email,
                    }
                }
            },
            data: {
                token: generatedNewToken,
                expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes from now
            }
        })

        await sendMail(ValidatedData.body.email, 'Resent Account Verification Code', 'VerificationCode.html', {
                receiver_name: checkVtoken.account.user?.username,
                token: generatedNewToken,
            }
        )

        res.status(200).json({ message: "New verification token sent successfully" })
        return

    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
        console.log('resend verification token failed: ', error);
    }
}

export const forgetPassword = async (req: Request, res: Response): Promise<void> => {
    try {
        const ValidatedData = res.locals.validatedData as IForgetPasswordRequest;
        
        const checkingAccount = await prisma.account.findUnique({
            where: {
                email: ValidatedData.query.email
            }
        })

        if (!checkingAccount) {
            res.status(404).json({ message: 'Account is not found in our system' })
            return
        }

        await prisma.account.update({
            where: {
                email: ValidatedData.query.email
            },
            data: {
                password: ValidatedData.body.password
            }
        })

        res.status(200).json({ message: "Password successfully changed" })
        return

    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
        console.log('forget password failed: ', error);
    }
}

export const requestForgetPassword = async (req: Request, res: Response): Promise<void> => {
    try {
        const ValidatedData = res.locals.validatedData as IRequestForgetPassword;
        
        const checkingExisting = await prisma.account.findUnique({
            where: {
                email: ValidatedData.body.email
            },
            include: {
                user: {
                    select: {
                        username: true
                    }
                }
            }
        })

        if (!checkingExisting) {
            res.status(404).json({ message: "Email is not found in our system" })
            return
        }

        const generatedNewToken = await generatedToken()

        await sendMail(checkingExisting.email, 'Forget Password Verification Code', 'VerificationCode.html', {
            receiver_name: checkingExisting.user?.username,
            token: generatedNewToken,
        })

        res.status(200).json({ message: "Forget password is already sent to email" })
        return
        
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
        console.log('forget password failed: ', error);
    }
}

export const checkUser = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json(req.user)
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
        console.log('check user failed: ', error);
    }
}

export const logout = async (req: Request, res: Response): Promise<void> => {
    try {
        res.clearCookie('jwt', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
        })
    
        res.status(200).json({ message: 'Logged out successfully' })
        return
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
        console.log('logout failed: ', error);
    }
}

