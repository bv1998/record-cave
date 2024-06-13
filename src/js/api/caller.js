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

const base64Credentials = btoa(
    `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
);

let accessToken = localStorage.getItem("accessToken");
let tokenExpiration = localStorage.getItem("tokenExpiration");

const getSpotifyToken = async () => {
    try {
        if (!accessToken || Date.now() >= tokenExpiration) {
            const response = await fetch(
                "https://accounts.spotify.com/api/token",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Authorization: `Basic ${base64Credentials}`,
                    },
                    body: "grant_type=client_credentials",
                }
            );

            const data = await response.json();
            accessToken = data.access_token;
            const expirationTime = Date.now() + data.expires_in * 1000;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("tokenExpiration", expirationTime);
        }
        return accessToken;
    } catch (error) {
        console.error("Error fetching Spotify token:", error);
        throw error;
    }
};

// console.log(getSpotifyToken());

function getBearerToken() {
    return localStorage.getItem("accessToken");
}

export default caller;
