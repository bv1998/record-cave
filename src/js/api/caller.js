import axios, * as others from "axios";

const caller = axios.create({
    baseURL: "https://api.spotify.com/v1",
});

caller.interceptors.request.use(
    (config) => {
        config.headers["Authorization"] = `Bearer ${getBearerToken()}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

function getBearerToken() {
    return "BQAJz0yGgmOCLQ3AUepNfFGSzGvt3Vi7QRhAwtOiH5ueDcolU4ZJRHrTWTpyrhJErPEAgrV5edh_5JgpZPPWGtgzAgTtKi6qdJKVSNjlwzv3WDE0RjM";
}

export default caller;
