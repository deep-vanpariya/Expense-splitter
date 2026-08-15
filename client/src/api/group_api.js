import axios from "axios";
import { createGroupApiV1, userCreatedGroupsApiV1 } from "./api_list";
import { readCookie } from "../lib/tokemManager";

const createGroup = async ({ groupname, handleConf }) => {
    const token = readCookie({ cookieName: "token" })
    const payload = { groupname }
    const headers = { Authorization: token }
    try {
        const res = await axios.post(createGroupApiV1, payload, { headers })
        const { groupid } = res.data;
        return {
            success: true,
            groupid
        }
    }
    catch (res) {
        throw ("Not Created")
    }
}

const getUserCreatedGroups = ({ setGroups }) => {
    const token = readCookie({ cookieName: "token" })
    const headers = { Authorization: token }
    axios.get(userCreatedGroupsApiV1, { headers }).then((res) => {
        console.log(res.data)
        setGroups(() => res.data.groups)
    }).catch((err) => {
        console.log(err)
    })
}
const deleteSingleGroup = () => {

}
export {
    createGroup,
    getUserCreatedGroups
}