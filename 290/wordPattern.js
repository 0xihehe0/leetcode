/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2023-06-27 11:09:32
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2023-06-27 11:43:29
 * @FilePath: \leetcode\leetcode\290\wordPattern.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let pArr = pattern.split('');
    let sArr = s.split(' ');
    if (pArr.length !== sArr.length) {
        return false;
    }
    for (let i = 0; i < pArr.length; i++) {
        if (pArr.indexOf(pArr[i]) !== sArr.indexOf(sArr[i])) {
            return false;
        }
    }
    return true;
};

let pattern = 'ab',
    s = 'happy hacking';
console.log(wordPattern(pattern, s));
