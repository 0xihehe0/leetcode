/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-07 21:37:16
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-07 22:05:44
 * @FilePath: \leetcode\387\firstUniqChar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    if(s.length === 0){
        return -1;
    }
    let map = new Map();
    for (const char of s) {
        if(map.has(char)){
            map.set(char,false)
        }else{
            map.set(char,true)
        }
    }
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if(map.get(element)){
            return index;
        }
    }
    return -1
};

let s = 'paper';
console.log(firstUniqChar(s));
