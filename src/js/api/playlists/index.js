import caller from "../caller";
export default {
    getTop50Playlist(limit, offset) {
        return caller.get("/playlists/37i9dQZEVXbLRQDuF5jeBp/tracks", {
            params: {
                limit,
                offset,
            },
        });
    },
};
