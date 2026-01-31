
import jwt from "jsonwebtoken"
import "dotenv/config"
import userModel from "../models/userModel.js";

// IS ADMIN
export const isSignIn = async (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    //const token = req.headers['authorization'].split(" ")[1];

    if (!token) return res.status(400).json({ message: 'Access Denied: No Token Provided' });
    try {
        let decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY)
        if (decoded) {
            req.user = decoded._id
            next()
        }

    } catch (error) {
        res.status(403).json({ message: "Invalid token or token expired!" })
    }

}


// admin access
export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user)
        // console.log(user)
        if (user.role !== "admin")
            res.status(401).send({
                success: false,
                message: "Unathorised access"
            })
        else {
            next()
        }
    } catch (error) {
        console.log(error);
    }
}