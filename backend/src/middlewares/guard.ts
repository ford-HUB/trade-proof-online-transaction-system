import { RoleType } from "../prisma/enums"
import { jwtAuth } from "./authenticate"
import { permission } from "./permission"

export const guard = (...permissionRole: RoleType[]) => {
    return [
        jwtAuth,
        permission(...permissionRole)
    ]
}