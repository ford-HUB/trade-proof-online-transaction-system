import * as zod from "zod";
import type { Request, Response, NextFunction } from "express";

export const validateRequest = (schema: zod.ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse({
            body: req.body,
            query: req.query,
            params: req.params,
        });

        if (!result.success) {
            return res.status(400).json({
                message: "Invalid request",
                errors: result.error.message,
            });
        }

        res.locals.validatedData = result.data;
        next();
    }
}
