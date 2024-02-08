/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2023-06-25 17:21:48
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-08 19:11:09
 * @FilePath: \leetcode\205\isIsomorphic.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic1 = function (s, t) {
    if (s.length !== t.length) return false;
    let sobj = {};
    let tobj = {};
    for (let index = 0; index < s.length; index++) {
        let skey = s[index];
        let tkey = t[index];
        if (sobj[skey] && sobj[skey] !== tkey) return false;
        if (tobj[tkey] && tobj[tkey] !== skey) return false;
        sobj[skey] = tkey;
        tobj[tkey] = skey;
    }
    return true;
};

var isIsomorphic2 = function (s, t) {
    if (s.length !== t.length) return false;
    let maps = new Map();
    let mapt = new Map();
    for (let i = 0; i < s.length; i++) {
        let value1 = s[i];
        let value2 = t[i];
        if (maps.has(value1)) {
            if (maps.get(value1) !== value2) {
                return false;
            }
        } else {
            maps.set(value1, value2);
            console.log(maps);
        }
        
        if(mapt.has(value2)){
            if(mapt.get(value2) !== value1) {
                return false;
            }
        }else{
            
            mapt.set(value2,value1)
            console.log(mapt);
        }
    }
    return true;
};

let s = 'egg',
    t = 'add';
console.log(isIsomorphic1(s, t));
console.log(isIsomorphic2(s, t));
