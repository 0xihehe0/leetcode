/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-16 21:04:40
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-03-03 20:30:05
 * @FilePath: \leetcode\509\fib.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let a = 0,
        b = 1,
        sum;
    for (var i = 0; i < n; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }
    return a;
};

let n = 4;
console.log(fib(n));
