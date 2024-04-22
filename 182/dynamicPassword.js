/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-04-21 19:35:09
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-04-22 11:40:22
 * @FilePath: \leetcode\182\dynamicPassword.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var dynamicPassword = function (password, target) {
    let str1 = password.slice(0, target)
    let str2 = password.slice(target, password.length)
    return str2 + str1
}

let password = 's3cur1tyC0d3',
    target = 4;

console.log(dynamicPassword(password, target));
