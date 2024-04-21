/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-04-21 19:01:53
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-04-21 19:04:27
 * @FilePath: \leetcode\541\reverseStr.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var reverseStr = function (s, k) {
    const n = s.length;
    const arr = Array.from(s);
    for (let i = 0; i < n; i += 2 * k) {
        reverse(arr, i, Math.min(i + k, n) - 1);
    }
    return arr.join('');
};

const reverse = (arr, left, right) => {
    while (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
};

let s = 'abcdefg',
    k = 2;
console.log(reverseStr(s, k));
