/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-04-06 11:37:37
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-04-06 13:51:24
 * @FilePath: \leetcode\390\lastRemaining.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var lastRemaining = function (n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    return checkHalf(result, true);
};

function checkHalf(n, type) {
    if (n.length === 1) {
        return n[0];
    }
    console.log(n);
    let nextArray = [];
    if (type) {
        for (let i = 0; i < n.length; i++) {
            if (i % 2 !== 0) {
                nextArray.push(n[i]);
            }
        }
    } else {
        n = n.reverse();
        for (let i = 0; i < n.length; i++) {
            if (i % 2 !== 0) {
                nextArray.unshift(n[i]);
            }
        }
    }
    return checkHalf(nextArray, !type);
}

let n = 6;
console.log(lastRemaining(n));
