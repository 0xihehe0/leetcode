/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-04-06 11:15:48
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-04-06 11:20:43
 * @FilePath: \leetcode\326\isPowerOfThree.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AElet
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n < 1) {
        return false;
    }
    if (n === 1) {
        return true;
    }
    if (n % 3 !== 0) {
        return false;
    }
    return isPowerOfThree(n / 3);
};

let n = 40;

console.log(isPowerOfThree(n));
