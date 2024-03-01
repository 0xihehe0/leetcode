/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-29 23:38:35
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-29 23:53:35
 * @FilePath: \leetcode\274\hIndex.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => a - b);
    let h = 0, i = citations.length - 1; 
    while (i >= 0 && citations[i] > h) {
        h++; 
        i--;
    }
    return h;
};


let citations = [3, 0, 6, 1, 5];
console.log(hIndex(citations));
