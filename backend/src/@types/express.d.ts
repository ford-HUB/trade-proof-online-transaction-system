import type { RoleType } from "../prisma/enums";

declare global {
    namespace Express {
        interface User {
            account_id: number,
            email: string,
            role: RoleType
        }
    }
}

export {};

