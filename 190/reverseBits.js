/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-04-05 15:27:49
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-04-05 15:32:20
 * @FilePath: \leetcode\190\reverseBits.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
    let ret = 0;
    for (let i = 0; i < 32; i++) {
        ret <<= 1;
        ret += (n & 1);
        n >>= 1;
    }
    return ret>>>0;
}



let n = "00000010100101000001111010011100"
console.log(reverseBits(n));

