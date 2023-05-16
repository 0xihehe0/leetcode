/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2023-05-16 21:12:19
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2023-05-16 21:25:01
 * @FilePath: \leetcode\392\isSubsequence.js
 * @Description: 运用双指针来处理，第一个用于判断
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if(s.length ===0 ){
        return true
    }
    let valueOne = 0
    let valueTwo = 0
    while (t.length > valueTwo) {
        
        if(s[valueOne] === t[valueTwo]){
            valueOne ++
        }
        valueTwo ++
        if(valueOne > s.length - 1){
            return true
        }
    }
    return false
};

let s = 'abc'
let t = 'ahbdc'
console.log(isSubsequence(s,t));