/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-03-18 18:46:28
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-03-18 18:53:12
 * @FilePath: \leetcode\050\myPow.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n == 0 || n == 1) {
        return n == 0 ? 1 : x;
    } else if (n < 0) {
        return myPow(1 / x, Math.abs(n));
    } else {
        return n % 2 == 0
            ? myPow(x * x, n / 2)
            : myPow(x * x, Math.floor(n / 2)) * x;
    }
};

let x = 2.0;
let n = 4;

console.log(myPow(x, n));
