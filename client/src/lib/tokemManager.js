const createCookie = ({ cookieName, cookieValue, seconds = 3600 }) => {
    document.cookie = `${cookieName}=${cookieValue}; max-age=${seconds};path=/;`
}
const deleteCookie = ({ cookieName }) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
const readCookie = ({ cookieName }) => {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const arr = cookies[i].split("=");
        if (arr[0] == cookieName) {
            return arr[1];
        }
    }

    window.location.href = "http://localhost:5173/signin";
    alert("Create Group Fail Token Not Found");
    return false;
}

export {
    createCookie, deleteCookie, readCookie
}