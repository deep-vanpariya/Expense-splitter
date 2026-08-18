import { client } from "./userDB.js"
const createGroup = async ({ userid, groupname }) => {
    // "INSERT INTO expense_group(creator,groupname) VALUES($1,$2) RETURNING id"

    const query = `WITH ins1 AS(INSERT INTO expense_group(creator,groupname) VALUES($1,$2) RETURNING id AS groupid,creator as memberid),
       ins2 AS (INSERT INTO expense_group_members(groupid,memberid) SELECT groupid,memberid FROM ins1 RETURNING groupid) 
       SELECT groupid from ins2`

    try {
        const result = await client.query(query, [userid, groupname]);
        console.log(result);
        return { success: true, data: result.rows[0] }
    } catch (error) {
        return { success: false, error }
    }

}
const getUserCreatedGroupes = async ({ userid }) => {
    const query = "SELECT * FROM  expense_group WHERE creator = $1 ;"
    try {
        const { rows } = await client.query(query, [userid]);
        // Only for Future use 
        // if we wanto send other message when user does not have any groups created
        if (rows.length == 0) return { success: true, data: rows };

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

const deleteSingleGroup = async ({ userid, groupid }) => {
    const query = "DELETE FROM expense_group WHERE creator = $1 AND id = $2 ;"

    try {
        const { rowCount } = await client.query(query, [userid, groupid]);
        if (rowCount == 0) return { success: false, error: "No Row Deleted" };

        return {
            success: true,
            rowCount
        }
    } catch (err) {
        return {
            success: false,
            error: err
        }
    }
}
const leaveFromGroup = async ({ userid, groupid }) => {
    const query = `WITH delete_member AS(DELETE FROM expense_group_members WHERE memberid = $1 AND groupid = $2 RETURNING groupid,memberid),
    update_group AS(UPDATE expense_group SET member_count = member_count - 1 WHERE id IN (SELECT groupid from delete_member) RETURNING id, member_count)
    delete_group AS (DELETE FROM expense_group WHERE id IN (SELECT id FROM update_group WHERE member_count <=0) RETURNING id);
    SELECT (SELECT memberid FROM delete_member AS member_removed_from_group,
            SELECT member_count FROM update_group AS member_count_in_group,
            SELECT id FROM delete_group AS deleted_user_id) 
    `
    try {

        const result = await client.query(query)
        return {
            success: true,
            result
        }
    }
    catch (err) {
        return {
            success: false,
            error: err
        }
    }
}
const getAllGroupsUserIn = async ({ userid }) => {
    const query = `WITH sel1 AS (SELECT groupid FROM expense_group_members WHERE memberid = $1),
    sel2 AS (SELECT id,groupname FROM expense_group WHERE id IN (SELECT groupid FROM sel1)) select * from sel2
    `

    try {
        const { rows } = await client.query(query, [userid]);
        // Only for Future use 
        // if we wanto send other message when user does not have any groups created
        if (rows.length == 0) return { success: true, data: rows };

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
export {
    createGroup,
    getUserCreatedGroupes,
    deleteSingleGroup,
    getAllGroupsUserIn
}