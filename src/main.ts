/*
 * @Descripttion:
 * @Author: hanb
 * @Date: 2022-02-28 16:45:32
 * @LastEditors: hanb
 * @LastEditTime: 2022-03-01 15:21:29
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/route";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount("#app");
