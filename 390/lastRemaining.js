/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-04-06 11:37:37
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-04-06 14:03:21
 * @FilePath: \leetcode\390\lastRemaining.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var lastRemaining = function (n) {
    let remain = n;
    let step = 1;
    let head = 1;
    let left = true;

    while (remain > 1) {
        // 如果是从左到右，或者从右到左但剩余数量是奇数
        if (left || remain % 2 === 1) {
            head += step;
        }
        remain = Math.floor(remain / 2);
        step *= 2;
        left = !left;
    }
    return head;
};

let n = 6;
console.log(lastRemaining(n));
