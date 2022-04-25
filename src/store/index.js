/*
 * @Descripttion:
 * @Author: hanb
 * @Date: 2022-03-16 20:39:38
 * @LastEditors: hanb
 * @LastEditTime: 2022-03-18 09:07:33
 */
// const a = require("./beImport.js");
// for (const key in a) {
//   if (Object.hasOwnProperty.call(a, key)) {
//     // const element = a[key];
//     console.log(key, a[key]);
//   }
// }
// console.log(a);
const a = {
  getter(target, key) {
    console.log(target, key);
    return target[key];
  },
};
console.log(a);
