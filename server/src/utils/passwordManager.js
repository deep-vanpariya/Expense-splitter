import bcrypt from "bcrypt"
const saltRound = 10;

async function makePasswordencrypt({ password }) {
    if (!password) {
        return {
            success: false,
            error: "Password is Required"
        };
    }

    try {
        const hash = await bcrypt.hash(password, saltRound);
        return {
            success: true,
            hash
        }
    } catch (err) {
        console.error("Error Hasing PassWord ", err.message)
        return {
            success: false,
            error: err.message
        };
    }
}

const checkPassword = async ({ dbPassword, bodyPassword }) => {
    if (!dbPassword || !bodyPassword) {
        return {
            success: false,
            error: "Both DB and BODY Password are Required"
        };
    }

    const result = await bcrypt.compare(bodyPassword, dbPassword);
    if (result == false) return { success: false, error: "Password Incorrect!!" }

    return {
        success: true,
        result
    }

}

export {
    checkPassword,
    makePasswordencrypt
}