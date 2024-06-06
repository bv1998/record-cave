import { ref } from "vue";
import { nowPlayingObj } from "./fetchProfile";

const data = ref(null);
export const globalVariable = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    playing: nowPlayingObj,
};

const base64Credentials = btoa(
    `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
);

export const getToken = () =>
    fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${base64Credentials}`,
        },
        body: `grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`,
    })
        .then((response) => response.json())
        .then((data) => {
            return data.access_token;
        })
        .catch((error) => console.error(error));
