import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/HomeView.vue"),
        },
        {
            path: "/callback",
            name: "api-home",
            component: () => import("../views/HomeView.vue"),
        },
        {
            path: "/search",
            name: "search",
            component: () => import("../views/SearchView.vue"),
        },
        {
            path: "/playlists",
            name: "playlists",
            component: () => import("../views/PlaylistView.vue"),
        },
        {
            path: "/loved-songs",
            name: "loved-songs",
            component: () => import("../views/LovedView.vue"),
        },
        {
            path: "/history",
            name: "history",
            component: () => import("../views/HistoryView.vue"),
        },
        {
            path: "/artists",
            name: "artists",
            component: () => import("../views/ArtistView.vue"),
        },
        {
            path: "/settings",
            name: "settings",
            component: () => import("../views/SettingsView.vue"),
        },
    ],
});

export default router;
