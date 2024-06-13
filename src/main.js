import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const accessTokenFinal = null;
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// const getSpotifyAuthorizationCode = async () => {
//     const scopes = [
//         "user-read-private",
//         "user-read-email",
//         "playlist-modify-private",
//         "playlist-read-private",
//         "user-library-read",
//         "user-library-modify",
//     ].join(" ");

//     const params = new URLSearchParams({
//         response_type: "code",
//         client_id: process.env.CLIENT_ID,
//         scope: scopes,
//         redirect_uri: "http://localhost:5173",
//         code_challenge_method: "S256",
//         code_challenge: "challenge",
//     });

//     const authUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;
//     window.location.href = authUrl;
// };

// const handleAuthCallback = async () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const code = urlParams.get("code");

//     if (code) {
//         try {
//             const base64Credentials = btoa(
//                 `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
//             );
//             const response = await fetch(
//                 "https://accounts.spotify.com/api/token",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/x-www-form-urlencoded",
//                         Authorization: `Basic ${base64Credentials}`,
//                     },
//                     body: new URLSearchParams({
//                         grant_type: "authorization_code",
//                         code,
//                         redirect_uri: "http://localhost:5173",
//                     }),
//                 }
//             );

//             const data = await response.json();
//             const accessToken = data.access_token;
//             const refreshToken = data.refresh_token;
//             localStorage.setItem("accessToken", accessToken);
//             localStorage.setItem("refreshToken", refreshToken);
//         } catch (error) {
//             console.error("Error fetching Spotify access token:", error);
//         }
//     }
// };

// const getAccessToken = () => {
//     const accessToken = localStorage.getItem("accessToken");
//     const refreshToken = localStorage.getItem("refreshToken");

//     if (accessToken) {
//         return accessToken;
//     } else if (refreshToken) {
//         refreshAccessToken(refreshToken);
//     } else {
//         window.addEventListener("load", getSpotifyAuthorizationCode);
//     }
// };

// const refreshAccessToken = async (refreshToken) => {
//     try {
//         const base64Credentials = btoa(
//             `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
//         );
//         const response = await fetch("https://accounts.spotify.com/api/token", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded",
//                 Authorization: `Basic ${base64Credentials}`,
//             },
//             body: new URLSearchParams({
//                 grant_type: "refresh_token",
//                 refresh_token: refreshToken,
//             }),
//         });

//         const data = await response.json();
//         const newAccessToken = data.access_token;
//         localStorage.setItem("accessToken", newAccessToken);
//         return newAccessToken;
//     } catch (error) {
//         console.error("Error refreshing Spotify access token:", error);
//     }
// };

// window.addEventListener("load", getAccessToken);

function adjustContentWidth() {
    const mainWrap = document.querySelector(".main-wrap");
    const queDiv = document.querySelector(".queue-div");
    const contentDiv = document.querySelector(".content-div");
    const sidebarDiv = document.querySelector(".sidebar-div");

    const queDivWidth = queDiv.offsetWidth + 60;
    if (contentDiv) {
        contentDiv.style.maxWidth = `calc(100% - ${queDivWidth}px)`;
    }
}

window.addEventListener("resize", adjustContentWidth);
adjustContentWidth();
