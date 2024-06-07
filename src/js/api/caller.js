import axios, * as others from "axios";

const caller = (endpoint, token) =>
    axios.create({
        baseURL: `https://api.spotify.com/v1/${endpoint}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export default caller;
