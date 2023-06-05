/*
 * @Author: 姚进玺 yaojinxi@bovosz.com
 * @Date: 2023-06-05 12:05:40
 * @LastEditors: 姚进玺 yaojinxi@bovosz.com
 * @LastEditTime: 2023-06-05 14:52:43
 * @FilePath: /leetcode/leetcode/028/strStr.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let needLength = needle.length;
    let index = 0
    const sliceCheck = (m,n)=>{
      return haystack.slice(m,n)
    }
    while(index <= haystack.length - needLength ){
      if(sliceCheck(index,needLength + index) === needle){
        return index
      }
      index ++
    }
    return -1
};

let haystack = "sadbutsad", needle = "sad"
console.log(strStr(haystack, needle));
