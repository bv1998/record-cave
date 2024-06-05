import { ref } from "vue";

const data = ref(null);
export const globalVariable = {
    username: "bryan_vernon",
    client_id: "47d0266d9d2240c197be82d6b1e77280",
    client_secret: "ec6855423b684a9fb1e7ae117be4408c",
};

const base64Credentials = btoa(
    `${globalVariable.client_id}:${globalVariable.client_secret}`
);

export const getToken = () =>
    fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${base64Credentials}`,
        },
        body: `grant_type=client_credentials&client_id=${globalVariable.client_id}&client_secret=${globalVariable.client_secret}`,
    })
        .then((response) => response.json())
        .then((data) => {
            globalVariable.token = data.access_token;
            return data.access_token;
        })
        .catch((error) => console.error(error));
