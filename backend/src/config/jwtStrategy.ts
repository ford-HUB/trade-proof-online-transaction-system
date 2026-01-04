import { Strategy, ExtractJwt } from "passport-jwt";
import type { Request } from "express";
import { prisma } from "./prisma.instance";
import { RoleType } from "../prisma/enums";

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
            return req.cookies?.jwt;
        },
    ]),
    secretOrKey: process.env.JWT_SECRET_KEY as string,
}

export const jwtStrategy = new Strategy(jwtOptions, async (payload, done) => {
    try {
        if (!payload || !payload.id) {
            return done(null, false);
        }
    
        const getUser = await prisma.account.findUnique({
            where: { account_id: payload.id },
            select: {
                account_id: true,
                email: true,
                role: {
                    select: {
                        name: true
                    }
                }
            }
        })

        const user = {
            account_id: getUser?.account_id,
            email: getUser?.email,
            role: getUser?.role?.name as RoleType
        }
    
        return done(null, user ? user : false);
    } catch (error) {
        console.log(error)
        return done(error, false)
    }
});