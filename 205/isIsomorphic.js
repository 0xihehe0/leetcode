/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2023-06-25 17:21:48
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2023-06-27 10:43:12
 * @FilePath: \leetcode\205\isIsomorphic.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
   if(s.length !== t.length) return false;
   let sobj = {}
   let tobj = {};
   for (let index = 0; index < s.length; index++) {
    let skey = s[index];
    let tkey = t[index];
    if(sobj[skey] && sobj[skey] !== tkey) return false;
    if(tobj[tkey] && tobj[tkey] !== skey) return false;
    sobj[skey] = tkey
    tobj[tkey] = skey
   }
   return true
};

let s = 'paper',
    t = 'tisle';
console.log(isIsomorphic(s, t));
