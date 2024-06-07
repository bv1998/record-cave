import caller from "../caller";

export default {
    getAlbums(offset = 0, limit = 50, market) {
        return caller.get("me/albums", {
            params: {
                limit,
                offset,
                market,
            },
        });
    },
};
