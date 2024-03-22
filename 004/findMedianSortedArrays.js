/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-03-06 17:11:42
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-03-22 12:20:17
 * @FilePath: \leetcode\004\findMedianSortedArrays.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let allLength = nums1.length + nums2.length;
    let left = Math.floor(allLength / 2);
    let right = Math.ceil(allLength / 2);
    console.log(left, right);
    let p1 = 0;
    let p2 = 0;
    while (p1 + p2 < right) {
        if (nums1[p1] < nums2[p2]) {
            p1++;
        } else {
            p2++;
        }
        console.log(p1, p2);
    }
    // console.log(p1, p2);
};

let nums1 = [1, 2, 3, 4, 5, 6, 7, 11, 13];
let nums2 = [4, 5, 6, 8, 20];
let all = [1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 8, 11, 13, 20];
console.log(findMedianSortedArrays(nums1, nums2));
