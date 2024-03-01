/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-03-01 00:04:18
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-03-01 12:31:24
 * @FilePath: \leetcode\056\merge.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let res = [];
    intervals.sort((a, b) => a[0] - b[0]);
    let check = [];
    check = intervals[0];
    for (let i = 0; i < intervals.length; i++) {
        let value = intervals[i];
        if (check[1] >= value[0]) {
            check[1] = Math.max(value[1], check[1]);
        } else {
            res.push(check);
            check = value;
        }
    }

    res.push(check);
    return res;
};

let intervals = [
    [1, 2],
    [3, 6],
    [4, 7],
    [5, 8],
    [9, 10],
    [15, 18]
];
console.log(merge(intervals));
