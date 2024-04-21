/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-04-21 19:35:09
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-04-21 19:44:10
 * @FilePath: \leetcode\182\dynamicPassword.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var dynamicPassword = function (password, target) {
    console.log(password.slice(1, password.length));
    for (var i = 0; i < target; i++) {
        let value = password[i]
        password = password.slice(1, password.length)
        console.log(password[i]);
        password + '1';
    }
};

let password = 's3cur1tyC0d3',
    target = 4;

console.log(dynamicPassword(password, target));
