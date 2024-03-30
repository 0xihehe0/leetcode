/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-03-30 13:05:02
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-03-30 13:38:24
 * @FilePath: \leetcode\012\intToRoman.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const valueSymbols = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];
    const roman = [];

    for (const [value, symbol] of valueSymbols) {
        while (num >= value) {
            num -= value;
            roman.push(symbol);
        }

        if (num == 0) {
            break;
        }
    }

    return roman.join('');
};

let num = 3;

console.log(intToRoman(num));
