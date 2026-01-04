import * as zod from 'zod';

export const registerSchema = zod.object({
    body: zod.object({
        username: zod.string().min(3, "Username must be at least 3 characters long"),
        type: zod.enum(["SELLER", "BUYER", "MIDMAN"], "Type is required"),
        email: zod.string().email("Invalid email address"),
        password: zod.string().min(6, "Password must be at least 6 characters long"),
        confirmPassword: zod.string().min(6, "Confirm Password must be at least 6 characters long"),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
    })
});

export const loginSchema = zod.object({
    body: zod.object({
        email: zod.string().email("Invalid email address"),
        password: zod.string().min(6, "Password must be at least 6 characters long"),
    })
});

export const verifySchema = zod.object({
    body: zod.object({
        email: zod.string().email("Invalid email address"),
        token: zod.string().min(1, "Token is required"),
    })
});

export const forgetPasswordSchema = zod.object({
    query: {
        email: zod.string().email("Invalid email address")
    },

    body: zod.object({
        password: zod.string().min(6, "Password must be at least 6 characters long"),
        confirmPassword: zod.string().min(6, "Password must be at least 6 characters long")
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Password do not match"
    })
});

export const requestForgetPasswordSchema = zod.object({
    body: {
        email: zod.string().email("Invalid email address")
    }
})

