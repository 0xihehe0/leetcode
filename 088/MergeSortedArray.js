/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2023-05-11 12:06:59
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2023-05-20 22:56:44
 * @FilePath: \leetcode\088\MergeSortedArray.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1,
        p2 = n - 1;
    let tail = m + n - 1;
    var cur;
    console.log(p1, p2);
    console.log(tail);
    while (p1 >= 0 || p2 >= 0) {
        console.log(p1, p2);
        if (p1 === -1) {
            cur = nums2[p2--];
        } else if (p2 === -1) {
            cur = nums1[p1--];
        } else if (nums1[p1] > nums2[p2]) {
            cur = nums1[p1--];
        } else {
            console.log(nums2[p2--]);
            cur = nums2[p2--];
        }
        console.log(cur);
        
        nums1[tail--] = cur;
        console.log(nums1);
    }
};

var sorts = function (m, n, nums1, nums2) {
    nums1.splice(m);
};

let nums1 = [1, 2, 3, 4, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;
merge(nums1, m, nums2, n);
