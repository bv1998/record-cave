import caller from "./../caller";

export default {
    getNewReleases(offset, limit, country) {
        return caller.get("browse/new-releases", {
            params: {
                limit,
                offset,
                country,
            },
        });
    },

    getCategories(offset, limit, country, locale) {
        return caller.get("browse/categories", {
            params: {
                limit,
                offset,
                country,
                locale,
            },
        });
    },

    getCategoryPlaylists(category_id, offset, limit, country) {
        return caller.get(`browse/categories/${category_id}/playlists`, {
            params: {
                category_id,
                limit,
                offset,
                country,
            },
        });
    },
};
