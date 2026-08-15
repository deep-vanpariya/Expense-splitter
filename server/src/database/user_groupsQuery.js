// CREATE TABLE expense_group(
//   id UUID PRIMARY KEY default uuidv7(),
//   creator VARCHAR(15),
//   groupname VARCHAR(25) NOT NULL,
//   createdat TIMESTAMP DEFAULT NOW(),
//   FOREIGN KEY (creator) REFERENCES users(username)
// )

import { client } from "./userDB.js"
const createGroup = async ({ username, groupname }) => {
    const query = "INSERT INTO expense_group(creator,groupname) VALUES($1,$2) RETURNING id;"

    try {
        const result = await client.query(query, [username, groupname]);
        console.log(result);
        return { success: true, data: result.rows[0] }
    } catch (error) {
        return { success: false, error }
    }

}
const getUserCreatedGroupes = async ({ username }) => {
    const query = "SELECT * FROM  expense_group WHERE creator = $1 ;"
    try {
        const { rows } = await client.query(query, [username]);
        if (rows.length == 0) return { success: false, error: "No User Found!" };

        return {
            success: true,
            data: rows
        }

    } catch (err) {
        return {
            success: false,
            error: "DB error While Sellecting group!!!"
        }
    }
}

const deleteSingleGroup = async ({ username, groupId }) => {
    const query = "DELETE FROM expense_group WHERE creator = $1 AND id = $2 ; "

    try {
        const { rowCount } = await client.query(query, [username, groupId]);
        if (rowCount == 0) return { success: false, error: "No Row Deleted" };

        return {
            success: true,
            rowCount
        }
    } catch (err) {
        return {
            success: false,
            error: "DB error While deleting group!!!"
        }
    }
}
export {
    createGroup,
    getUserCreatedGroupes,
    deleteSingleGroup
}