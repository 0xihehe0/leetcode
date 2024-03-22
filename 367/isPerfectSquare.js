/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-03-22 18:03:41
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-03-22 18:19:33
 * @FilePath: \leetcode\367\isPerfectSquare.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if(num === 1){
        return true
    }
    let index = 0;
    let mid = Math.floor(num / 2);
    while (index < num) {
        if (mid * mid > num) {
            mid--;
        } else if (mid * mid === num) {
            return true;
        }else{
            return false;
        }
        index ++
    }
    return false;
};

let num = 1;
console.log(isPerfectSquare(num));
