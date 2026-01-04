import { RoleType } from "../prisma/enums"

export const identifyRole = (role_name: string): RoleType | undefined => {
    switch (role_name) {
        case "ADMIN":
            return RoleType.ADMIN
        case "SELLER":
            return RoleType.SELLER
        case "BUYER":
            return RoleType.BUYER
        default:
            console.log('identify role failed')
            return undefined
    }
}