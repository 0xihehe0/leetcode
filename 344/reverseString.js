/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-03-22 22:20:10
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-03-22 22:22:06
 * @FilePath: \leetcode\344\reverseString.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        let value = s[left];
        s[left] = s[right];
        s[right] = value;
        left++;
        right--;
    }
};

let s = ['h', 'e', 'l', 'l', 'o'];
console.log(reverseString(s));
