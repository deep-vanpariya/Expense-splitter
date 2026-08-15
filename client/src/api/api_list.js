
const url = import.meta.env.VITE_APIURL;
console.log("url = ", url)
export const createAccApiV1 = url + "v1/user/signup";
export const signInApiV1 = url + "v1/user/signin";
export const createGroupApiV1 = url + "v1/group/create";
export const userCreatedGroupsApiV1 = url + "v1/group/created";
export const deleteSingleGroupApiV1 = url + "v1/group/";