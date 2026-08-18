import jwt from "jsonwebtoken"
import { config } from "dotenv"
config();
const secret = process.env.JWT_SECRET;
const expiry = process.env.JWT_EXPIRY;
if (!secret) { throw new Error("JWT_SECRET NOT FOUND!"); }

const generateJWT = ({ userid }) => {
    if (!userid) return { success: false, error: "username not found" }

    const token = jwt.sign({ userid }, secret, { expiresIn: expiry })
    return {
        success: true,
        token
    }
}

const checkJWT = ({ token }) => {
    if (!token) return { success: false }

    try {
        const data = jwt.verify(token, secret);
        return {
            success: true,
            data
        }
    } catch (err) {
        return { success: false, msg: "JWT invalid" }
    }
}

export {
    generateJWT,
    checkJWT
}