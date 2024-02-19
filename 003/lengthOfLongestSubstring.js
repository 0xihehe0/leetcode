/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-19 21:02:05
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-19 21:11:11
 * @FilePath: \leetcode\003\lengthOfLongestSubstring.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let res = 0;
    let start = -1;
    for (let i = 0; i < s.length; i++) {
        let value = s[i];
        if(map.has(value)){
            start = start < map.get(value) ? map.get(value) : start
        }
        map.set(value,i)
        res = res > i - start ? res : i - start
    }
    return res
};

let s = "abcabc";
console.log(lengthOfLongestSubstring(s));