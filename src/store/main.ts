/*
 * @Descripttion:
 * @Author: hanb
 * @Date: 2022-03-01 15:21:49
 * @LastEditors: hanb
 * @LastEditTime: 2022-03-01 15:46:31
 */
import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "mian",
  state: () => ({
    name: "super manager",
  }),
});
