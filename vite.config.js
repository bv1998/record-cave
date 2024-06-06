import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        plugins: [vue()],
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
        },
        define: {
            "process.env.CLIENT_ID": JSON.stringify(env.CLIENT_ID),
            "process.env.CLIENT_SECRET": env.CLIENT_SECRET,
        },
    };
});
