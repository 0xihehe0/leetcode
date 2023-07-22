/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2023-06-25 16:35:23
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2023-07-21 23:20:00
 * @FilePath: \leetcode\leetcode\383\canConstruct.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const cnt = new Array(26).fill(0);
    for (const c of magazine) {
        cnt[c.charCodeAt() - 'a'.charCodeAt()]++;
    }
    for (const c of ransomNote) {
        cnt[c.charCodeAt() - 'a'.charCodeAt()]--;
        if (cnt[c.charCodeAt() - 'a'.charCodeAt()] < 0) {
            return false;
        }
    }
    return true
};

let ransomNote = 'azazazqwe',
    magazine = 'zbaa';
console.log(canConstruct(ransomNote, magazine));
