/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-03-21 23:11:02
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-03-21 23:25:11
 * @FilePath: \leetcode\118\generate.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = [];
    for (var i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);
        for (var j = 1; j < row.length - 1; j++) {
            row[j] = res[i - 1][j - 1] + res[i - 1][j];
        }
        res.push(row);
    }
    return res
};

let numRows = 4;
console.log(generate(numRows));
