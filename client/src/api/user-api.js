import axios from "axios"
import { createAccApiV1, signInApiV1 } from "./api_list.js";
import { createCookie } from "../lib/tokemManager";

const signin = ({ username, password }) => {
    const payload = { username, password }

    return axios.post(signInApiV1, payload).then((res) => {
        const { token } = res.data;
        if (!token) { alert("No token Found"); return { success: false } }

        createCookie({ cookieName: "token", cookieValue: token, seconds: 3600 })
        return { success: true }
    }).catch((err) => {

        console.error(err); return {
            success: false,
            msg: "Signin API call fail"
        }
    })
}
const createacc = ({ username, email, password }) => {
    const payload = { username, email, password };

    return axios.post(createAccApiV1, payload).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.error(err)
    })
}
export {
    signin,
    createacc
}