/*
 * @Descripttion:
 * @Author: hanb
 * @Date: 2022-03-16 20:39:47
 * @LastEditors: hanb
 * @LastEditTime: 2022-03-16 22:26:19
 */
const a = {
  b: 1,
};
Object.defineProperty(a, "c", {
  enumerable: false,
  configurable: false,
  value: 2,
});
// const a = {
//   b: 1,
//   c: 2,
// };
// const ap = new Proxy(a, {
//   get(target, key) {
//     const result = target[key];
//     if (key === "c") {
//       throw Error("不可访问该属性");
//     }
//     return result;
//   },
//   set(target, key, value) {
//     return Reflect.set(target, key, value);
//   },
// });
console.log(a.c, "123");
module.exports = a;
