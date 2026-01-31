import bcrypt from "bcrypt"

export const comparePass = async (fpassword, bpassword) => {
    return bcrypt.compare(fpassword, bpassword)
}