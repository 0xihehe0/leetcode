/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-04-05 14:42:18
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-04-05 15:13:07
 * @FilePath: \leetcode\067\addBinary.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var addBinary = function (a, b) {
    let res = '';
    let carry = 0;
    let aLength = a.length - 1;
    let bLength = b.length - 1;

    while (aLength >= 0 || bLength >= 0 || carry > 0) {
        let sum = carry;
        if (aLength >= 0) {
            sum += a[aLength] - '0';
            aLength--;
        }
        if (bLength >= 0) {
            sum += b[bLength] - '0';
            bLength--;
        }

        res = (sum % 2) + res;
        carry = Math.floor(sum / 2);
    }

    return res;
};

let a = '11';
let b = '101';

console.log(addBinary(a, b));
