/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-15 18:29:04
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-15 19:42:56
 * @FilePath: \leetcode\415\addStrings.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let str = num1.length >= num2.length ? num1 : num2;
    let index = 1;
    let isAdd = false;
    let arr = [];
    while (index <= str.length || isAdd) {
        let value1 = num1[num1.length - index] ? num1[num1.length - index] : 0;
        let value2 = num2[num2.length - index] ? num2[num2.length - index] : 0;
        let all = Number(value1) + Number(value2);
        if (isAdd) {
            all = all + 1;
        }
        if (all) {
            if (all >= 10) {
                all = all % 10;
                isAdd = true;
            } else {
                isAdd = false;
            }
        }
        arr.unshift(all);
        index++;
    }
    let allStr = "";
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        allStr += element
    }
    return allStr
};

let num1 = '0';
let num2 = '0';
console.log(addStrings(num1, num2));
