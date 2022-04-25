/*
 * @Descripttion:
 * @Author: hanb
 * @Date: 2022-02-28 16:45:32
 * @LastEditors: hanb
 * @LastEditTime: 2022-04-25 16:17:47
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx"; // jsx支持
import viteCompression from "vite-plugin-compression"; // 组件按需导入
import path from "path";
import legacy from "@vitejs/plugin-legacy"; // 兼容ie

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // 选项写法
      "/api": {
        // apipost mock平台
        target:
          "https://console-mock.apipost.cn/app/mock/project/94a298f2-13f8-472e-8a3d-5b618f673cfd",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    viteCompression(),
    legacy({
      polyfills: ["es.promise.finally", "es/map", "es/set"],
      modernPolyfills: ["es.promise.finally"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/main.scss";',
      },
    },
  },
});
