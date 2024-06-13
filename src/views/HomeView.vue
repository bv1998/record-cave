<script>
// import { getToken } from "@/js/global";
import api from "@/js/api";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import albums from "@/js/api/albums";
// import authorizeUser from "@/js/api/user";
import playlists from "@/js/api/playlists";
export default {
    data() {
        return {
            albums: {
                limit: 25,
                offset: 0,
                total: 1,
                items: [],
            },
            playlists: {
                limit: 50,
                offset: 0,
                id: "37i9dQZEVXbMDoHDwVN2tF",
                tracks: [],
            },
            more: null,
            user: null,
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
                        this.albums.limit,
                        this.albums.offset
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
        async getTop50Playlist() {
            try {
                const response = await api.playlists.getTop50Playlist(
                    this.playlists.offset,
                    this.playlists.limit
                );
                this.playlists.tracks.push(...response.data.items);
            } catch (e) {
                console.log(e);
            }
        },
        // async authorizeUser() {
        //     try {
        //         this.user = await api.user.authorizeUser();
        //         console.log(this);
        //     } catch {
        //         console.log("User Could Not Pull");
        //     }
        // },
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
        this.getTop50Playlist();
        // this.authorizeUser();
    },
};
</script>

<template>
    <main>
        <h1>Hello Bryan,</h1>
        <h2 class="mb-5">Let’s Dig Your Crates</h2>
        <!-- todo: break this out for a component that will pull into swiper -->

        <div class="swiper-section--wraper p-5">
            <h3>Fresh Off The Press</h3>

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
                    <p>{{ item.artists[0].name }}</p>
                </swiper-slide>
            </swiper>
        </div>
        <div class="swiper-section--wraper p-5">
            <h3>Most Popular Tracks In The USA</h3>
            <div v-for="track in playlists.tracks">
                <p>{{ track }}</p>
            </div>
            <!-- <swiper
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
                    <p>{{ item.artists[0].name }}</p>
                </swiper-slide>
            </swiper> -->
        </div>
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
