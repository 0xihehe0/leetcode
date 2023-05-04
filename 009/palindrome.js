/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2023-04-30 10:03:44
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2023-04-30 10:09:51
 * @FilePath: \009\palindrome.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }
    let value = x.toString();
    let status = true
    for (let i = 0; i < value.length / 2; i++) {
        if (value[i]!= value[value.length - 1 - i]) {
            return false;
        }
    } return status
};

let num = 404
console.log(isPalindrome(num));