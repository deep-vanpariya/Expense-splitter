import { client } from "./userDB.js"

const createUser = async ({ username, email, encryptPass }) => {
    const insertQuery = "INSERT INTO users(username,email,password) VALUES($1,$2,$3);"

    try {
        const data = await client.query(insertQuery, [username, email, encryptPass])
        return {
            success: true,
            data
        }

    } catch (err) {
        console.error("Error While Inserting")
        return {
            success: false,
            error: err.message
        }
    }
}

const getSingleUser = async ({ username }) => {
    const findQuery = "SELECT * FROM users WHERE username = $1 ;"

    try {

        const { rows } = await client.query(findQuery, [username]);
        if (rows.length == 0) return { success: false, error: "No User Found!" };

        return {
            success: true,
            data: rows[0]
        }
    } catch (err) {
        console.error("Error While Finding User!")
        return {
            success: false,
            error: err.message
        }
    }

}
export {
    createUser,
    getSingleUser
}