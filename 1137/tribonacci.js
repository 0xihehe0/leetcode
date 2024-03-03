/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-03-03 20:44:19
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-03-03 20:53:42
 * @FilePath: \leetcode\1137\tribonacci.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var tribonacci = function (n) {
    let a = 0,
        b = 1,
        sum,
        all = 0;
    for (var i = 0; i < n; i++) {
        all = a + all;
        sum = a + b;
        a = b;
        b = sum;
    }
    console.log(all);
    return a;
};

let n = 4;
console.log(tribonacci(n));
