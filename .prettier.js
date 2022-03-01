/*
 * @Descripttion:
 * @Author: hanb
 * @Date: 2022-03-01 09:36:05
 * @LastEditors: hanb
 * @LastEditTime: 2022-03-01 09:39:58
 */
module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 100,
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: "always",
};
