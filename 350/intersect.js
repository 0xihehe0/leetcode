/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-04-04 14:06:41
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-04-04 14:32:45
 * @FilePath: \leetcode\350\intersect.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect1 = function (nums1, nums2) {
    nums1 = nums1.sort(function (a, b) {
        return a - b;
    });
    nums2 = nums2.sort(function (a, b) {
        return a - b;
    });
    let p1 = 0;
    let p2 = 0;
    let res = [];
    while (p1 < nums1.length && p2 < nums2.length) {
        let value1 = nums1[p1];
        let value2 = nums2[p2];
        if (value1 < value2) {
            p1++;
        } else if (value1 > value2) {
            p2++;
        } else {
            res.push(value1);
            p1++;
            p2++;
        }
    }
    return res;
};

var intersect2 = function (nums1, nums2) {
    list = new Map();
    for (var i = 0; i < nums1.length; i++) {
        let count = 0;
        if(list.has(nums1[i])) {
            list.set(nums1[i],count + 1);
        }
        
    }
};

let nums1 = [1, 4, 4, 5, 12, 56];

let nums2 = [4, 4, 5, 121, 24];

console.log(intersect1(nums1, nums2));
console.log(intersect2(nums1, nums2));
