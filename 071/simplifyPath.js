/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-03-07 20:06:21
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-03-07 20:14:40
 * @FilePath: \leetcode\071\simplifyPath.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let strArr = path.split('/');
    let stack = [];
    for (const str of strArr) {
        if (str === '..') {
            if (stack.length) {
                stack.pop();
            }
        } else if (str.length && str !== '.') {
            stack.push(str);
        }
    }
    return "/" + stack.join("/");
};

let path = '/a/./b/../../c/';
console.log(simplifyPath(path));
