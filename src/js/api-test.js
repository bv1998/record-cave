// import globalVariable from "/data-process/global-vars.js";
// async function fetchToken() {
//     try {
//         const response = await fetch("https://accounts.spotify.com/api/token", {
//             method: "POST",
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             body: "grant_type=client_credentials&client_id=47d0266d9d2240c197be82d6b1e7728&client_secret=5115f8a80896482d8e8689fca7a7a7c7",
//         });

//         const data = await response.json();
//         const accessToken = data.access_token;
//         console.log(accessToken);
//         return accessToken;
//     } catch (error) {
//         console.error("Error fetching token:", error);
//     }
// }

// const token = fetchToken();
// const token =
//     "BQD7vxtWbFIYxeJLcvJxaJrJEI2E6pDvEdGiR8gxYczDSNQgRMckG9y6QQpF-uqL8iWTDUonzDXuMdaLR2hpJe4Mpvafqoz_tIMW3N5dtjd7xm6HS5E";
// var imageURL = "";
// export async function fetchWebApi(endpoint, method, body) {
//     const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//         headers: {
//             Authorization: `Bearer ${globalVariable.token}`,
//         },
//         method,
//         body: JSON.stringify(body),
//     });
//     return await res.json();
// }
// async function fetchAlbumData(id, method) {
//     const res = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
//         headers: {
//             Authorization: `Bearer ${globalVariable.token}`,
//         },
//         method,
//     });
//     return await res.json();
// }

// async function getAlbumInfo() {
//     try {
//         const albumData = await fetchAlbumData("2dGlEut1TyhAyApZ0ADIsd", "GET");
//         return albumData;
//     } catch (error) {
//         console.error("Error fetching Album:", error);
//         return [];
//     }
// }

// async function fetchAndUseAlbumInfo() {
//     const albumInfo = await getAlbumInfo();
//     console.log(albumInfo.images[0].url);
//     imageURL = albumInfo.images[1].url;
//     console.log(imageURL);

//     const albumArt = document.querySelector(".album-art");
//     albumArt.src = imageURL;

//     const pathText = document.querySelector(".path-text");
//     pathText.textContent = imageURL;
// }

// fetchAndUseAlbumInfo();

// export default function fetchData(endpoint, method, body) {
//     const data = fetchWebApi(endpoint, method, body);
//     return data;
// }
