import { customAlphabet } from "nanoid"
import { prisma } from "../config/prisma.instance"

let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const generatedCode = customAlphabet(alphabet, 7)

export const generatedToken = async (): Promise<string> => {

    let existCode = true
    let code = ''

    while (existCode) {
        code = generatedCode();
        const found = await prisma.verificationToken.findUnique({ where: { token: code } })
        existCode = !!found; // if found, loop again
    }

    return Promise.resolve(code);

}