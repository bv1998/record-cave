<script setup></script>

<template>
    <div class="queue-wrapper">
        <div class="now-playing-wrapper">
            <img
                src="../assets/svg/record-vinyl-solid.svg"
                alt="Album Cover"
                class="now-playing-cover"
            />
            <p class="now-playing-title">Nothing Playing</p>
            <p class="now-playing-artist">No Artists</p>
        </div>
        <div class="queue-lineup">
            <p class="queue-label">Next In Queue:</p>
        </div>
    </div>
</template>

<style scoped>
.queue-wrapper {
    padding: 32px 5px 0 32px;
    height: calc(100% - 99px);
    background: transparent linear-gradient(180deg, #7a89c2 0%, #1f1a38 100%);
    border-radius: 10px;
}

.now-playing-wrapper {
    padding: 0 60px;
    margin-bottom: 36px;
    .now-playing-cover {
        width: 300px;
        box-shadow: 0px 3px 6px #000000;
        border-radius: 10px;
        margin-bottom: 24px;
    }
    .now-playing-title {
        font-weight: 700;
        font-size: 30px;
        line-height: 1 !important;
        margin-bottom: 2px !important;
        color: white !important;
    }
    .now-playing-artist {
        font-weight: 700;
        font-size: 20px;
        line-height: 1 !important;
        margin-bottom: 0 !important;
        color: white !important;
    }
}
.queue-lineup {
    .queue-label {
        font-weight: 700;
        font-size: 16px;
        line-height: 1 !important;
        margin-bottom: 0 !important;
        color: white !important;
    }
}
</style>
