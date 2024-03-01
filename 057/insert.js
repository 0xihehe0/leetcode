/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-03-01 17:29:54
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-03-01 17:53:50
 * @FilePath: \leetcode\057\insert.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);
    let checkArr = [];
    let check = [];
    check = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        value = intervals[i];
        if (check[1] >= value[0]) {
            check[1] = Math.max(check[1], value[1]);
        } else {
            checkArr.push(check);
            check = value;
        }
    }
    checkArr.push(check);
    return checkArr;
};

let intervals = [],
    newInterval = [2, 5];

console.log(insert(intervals, newInterval));
