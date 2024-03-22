/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-03-22 11:11:38
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-03-22 11:21:54
 * @FilePath: \leetcode\349\intersection.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var intersection = function (nums1, nums2) {
    let list = new Map();
    let res = [];
    if (nums1.length === 0 || nums2.length === 0) {
        return res;
    }
    for (var i = 0; i < nums1.length; i++) {
        let value = nums1[i];
        if (!list.has(value)) {
            list.set(value, value);
        }
    }

    for (let index = 0; index < nums2.length; index++) {
        let value = nums2[index];
        if (list.has(value)) {
            res.push(value);
            list.delete(value);
        }
    }

    return res;
};

let nums1 = [1, 2, 2, 3, 3, 4, 4, 5, 5];
let nums2 = [2, 2, 3, 3];
console.log(intersection(nums1, nums2));
