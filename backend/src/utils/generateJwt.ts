import jwt from 'jsonwebtoken'
import type { Response } from 'express';

export const generateJwt = (payload: Number, res: Response): void => {
    const generatedToken = jwt.sign({ id: payload }, process.env.JWT_SECRET_KEY as string, {
        expiresIn: '1h',
    });

    res.cookie('jwt', generatedToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 3600000, // 1 hour  
    });
}