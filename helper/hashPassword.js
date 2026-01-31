import bcrypt from "bcrypt"

export const hashedPassword = async (password) => {
      const saltRounds = 11;
       return await bcrypt.hash(password,saltRounds)
} 