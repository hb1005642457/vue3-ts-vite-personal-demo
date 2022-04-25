/*
 * @Descripttion:
 * @Author: hanb
 * @Date: 2022-02-28 16:45:32
 * @LastEditors: hanb
 * @LastEditTime: 2022-04-25 17:47:06
 */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/route";
import { createPinia } from "pinia";
import naive from "naive-ui";

const app = createApp(App);

app.use(naive);

app.use(router);
app.use(createPinia());

app.mount("#app");
