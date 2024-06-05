<script setup></script>

<template>
    <div class="info-wrap">
        <img
            src="../assets/svg/record-vinyl-solid.svg"
            alt="Album Cover"
            class="now-playing-cover"
        />
        <div class="now-playing-info__wrap">
            <p class="now-playing-title">Nothing Playing</p>
            <p class="now-playing-artist">No Artists</p>
        </div>
        <div class="like-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                    d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                />
            </svg>
        </div>
    </div>
    <div class="controls-wrap"></div>
    <div class="volume-controls-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path
                d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"
            />
        </svg>
    </div>
</template>

<style scoped>
.info-wrap {
    display: inline-flex;
    align-items: center;
    .now-playing-cover {
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 5px;
        height: 54px;
        width: 54px;
        margin-right: 15px;
    }
    .now-playing-title {
        font-weight: 700;
        font-size: 16px;
        line-height: 1 !important;
        margin-bottom: 0px !important;
        color: white !important;
    }
    .now-playing-artist {
        font-weight: 700;
        font-size: 12px;
        line-height: 1 !important;
        margin-bottom: 0 !important;
        color: white !important;
    }
    .like-wrap {
        margin-left: 15px;
        svg {
            width: 23px;
            height: 20px;
            path {
                fill: #f45b69 !important;
            }
        }
    }
}
.volume-controls-wrap {
    svg {
        width: 56px;
        height: 40px;
        path {
            fill: #ebebeb !important;
        }
    }
}
</style>
