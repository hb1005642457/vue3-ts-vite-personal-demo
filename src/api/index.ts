/*
 * @Descripttion:
 * @Author: hanb
 * @Date: 2022-04-25 15:46:43
 * @LastEditors: hanb
 * @LastEditTime: 2022-04-25 16:52:21
 */
import instance from "./request";
export function testApi() {
  return instance({
    url: "/user-list/list",
    method: "get",
  });
}
