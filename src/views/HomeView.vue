<script setup>
import { getToken } from "@/js/global";

// getToken().then((token) => {
//     fetch("https://api.spotify.com/v1/me", {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             user_name = data.id;
//             return data;
//         })
//         .catch((error) => console.error(error));
// });

import { sendProfileData } from "@/js/fetchProfile";
const test = sendProfileData();

console.log("test");
</script>

<template>
    <main>
        <!-- <h1>Hello {{ user_name }},</h1> -->
        <h2>Let’s Dig Your Crates</h2>
    </main>
</template>

<style>
main {
    padding: 0 30px;
}
</style>
