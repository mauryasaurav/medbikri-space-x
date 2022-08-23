import Axios from "axios";

let SERVER_URL = "https://api.spacexdata.com/v4/";

/* Common Axios request */
export async function axiosRequest(method, url, data = null) {
    return Axios({
        method: method,
        url: SERVER_URL + url,
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    })
        .then((res) => res)
        .catch((err) => {
            throw err;
        });
}