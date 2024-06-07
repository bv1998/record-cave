import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// const base64Credentials = btoa(
//     `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
// );

// const getSpotifyToken = async () => {
//     try {
//         const response = await fetch("https://accounts.spotify.com/api/token", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded",
//                 Authorization: `Basic ${base64Credentials}`,
//             },
//             body: "grant_type=client_credentials",
//         });

//         const data = await response.json();
//         return data.access_token;
//     } catch (error) {
//         console.error("Error fetching Spotify token:", error);
//         throw error;
//     }
// };

// console.log(getSpotifyToken());

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
