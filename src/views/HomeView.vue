<script>
// import { getToken } from "@/js/global";
import api from "@/js/api";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import albums from "@/js/api/albums";
export default {
    data() {
        return {
            albums: {
                limit: 25,
                offset: 0,
                total: 1,
                items: [],
            },
            more: null,
        };
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    methods: {
        async getNewReleases() {
            try {
                if (this.albums.total > this.albums.offset) {
                    const response = await api.browse.getNewReleases(
                        this.albums.offset,
                        this.albums.limit
                    );

                    this.albums.offset =
                        response.data.albums.offset + this.albums.limit;
                    this.albums.total = response.data.albums.total;
                    this.albums.items.push(...response.data.albums.items);
                    this.more = false;
                }
            } catch (e) {
                console.log(e);
            }
        },
    },

    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log("slide change");
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
    created() {
        this.getNewReleases();
    },
};
</script>

<template>
    <main>
        <!-- <h1>Hello {{ user_name }},</h1> -->
        <h2>Let’s Dig Your Crates</h2>
        <swiper
            :slides-per-view="5"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide v-for="item in albums.items">
                <img
                    class="swiper-album-art"
                    :src="item.images[2].url"
                    alt="Album Art"
                />
                <p>{{ item.name }}</p>
            </swiper-slide>
        </swiper>
    </main>
</template>

<style>
main {
    padding: 0 30px;
}
.swiper-album-art {
    max-width: 100%;
    width: auto;
    border-radius: 10px;
    max-height: 175px;
}
</style>
