/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-04-21 19:10:02
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-04-21 19:26:30
 * @FilePath: \leetcode\122\pathEncryption.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var pathEncryption = function (path) {
    let list = '';
    for (var i = 0; i < path.length; i++) {
        let value = path[i];
        if (value === '.') {
            value = ' ';
        }
        list += value;
    }

    return list
};

let path = 'a.aef.qerf.bb';
console.log(pathEncryption(path));
