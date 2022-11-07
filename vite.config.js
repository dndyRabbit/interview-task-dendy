import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // build: {
  //   commonjsOptions: {
  //     esmExternals: true,
  //   },
  // },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      vue: "@vue/compat",
    },
    fallback: {
      https: require.resolve("stream-http"),
    },
  },
  server: {
    https: false,
  },
});