/*
 * @Descripttion:
 * @Author: hanb
 * @Date: 2022-03-01 10:52:07
 * @LastEditors: hanb
 * @LastEditTime: 2022-03-01 10:54:53
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/pages/login/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
