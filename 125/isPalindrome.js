/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2023-05-16 20:56:12
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2023-05-16 21:01:55
 * @FilePath: \leetcode\125\isPalindrome.js
 * @Description: 两种方案，可以循环字符串来判断如果有不相同的就可以返回；或者是颠倒字符串来判断是否相同
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s
        .replace(/[^a-zA-Z0-9]/g, '')
        .replace(/\s/g, '')
        .toLowerCase();
    for (let index = 0; index < s.length; index++) {
        if (s[index] !== s[s.length - 1 - index]) {
            return false;
        }
    }
    return true;
};

var isPalindrome = function (s) {
    if(s.length === 0){
        return true
    }
    s = s
        .replace(/[^a-zA-Z0-9]/g, '')
        .replace(/\s/g, '')
        .toLowerCase();
    let changeStr = s.split("").reverse().join("");
    if(changeStr === s){
        return true
    }
    return false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
