/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-04-06 11:28:26
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-04-06 11:29:53
 * @FilePath: \leetcode\342\isPowerOfFour.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var isPowerOfFour = function (n) {
    return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;
};

let n = 16;

console.log(isPowerOfFour(n));
