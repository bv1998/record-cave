<script setup>
import { RouterView } from "vue-router";
import SidebarItem from "@/components/SidebarItem.vue";
import QueueItem from "@/components/QueueItem.vue";
import ControlFooter from "@/components/ControlFooter.vue";
</script>

<template>
    <div class="main-div">
        <div class="sidebar-div">
            <SidebarItem />
        </div>
        <div class="header-content-wrap">
            <div class="account-wrap">
                <img
                    src="./assets/temp-profile-pic.jpg"
                    alt="Main Profile Picture"
                />
            </div>
            <div class="main-wrap">
                <div class="content-div">
                    <RouterView />
                </div>
                <div class="queue-div">
                    <QueueItem />
                </div>
            </div>
        </div>
    </div>
    <div class="footer-div">
        <ControlFooter />
    </div>
</template>

<style scoped>
.account-wrap {
    height: 75px !important;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 30px;
    img {
        height: 54px;
        border-radius: 50%;
    }
}
.header-content-wrap,
.content-div {
    width: 100%;
}
.main-wrap {
    height: 100%;
    display: inline-flex;
    width: 100%;
}
.footer-div {
    background: #1f1a38 !important;
    padding: 9px 36px !important;
    max-height: 72px;
    display: inline-flex;
    width: 100% !important;
    height: 100% !important;
}
</style>
