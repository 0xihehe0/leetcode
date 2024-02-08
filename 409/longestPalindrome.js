/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-08 14:30:25
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-08 15:45:47
 * @FilePath: \leetcode\409\longestPalindrome.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if(s.length <=1){
        return s.length;
    }
    let map = new Map();
    let all = 0
    let isOdd = false;
    for (const i of s) {
        map.set(i, (map.get(i) || 0)   + 1)
    }
    console.log(map);
    for (const [k, v] of map.entries()) {
        if(v % 2 === 0){
            all += v
        }else{
            all += v-1;
            isOdd = true
        }
    }
    if(isOdd){
       all += 1
    }
    
   return all
};

let s = 'abccccdd'

console.log(longestPalindrome(s));