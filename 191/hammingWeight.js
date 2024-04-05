/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-04-05 15:45:41
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-04-05 15:55:52
 * @FilePath: \leetcode\191\hammingWeight.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let ret = 0;
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) !== 0) {
            ret++;
        }
    }
    return ret;
};


let n = 2147483645;
console.log(hammingWeight(n));
