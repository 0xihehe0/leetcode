/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-03-21 23:39:49
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-03-22 00:12:36
 * @FilePath: \leetcode\153\findMin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    if (nums[left] < nums[right]) {
        return nums[left];
    }

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        console.log(mid, right, left);
        if (nums[mid] < nums[right]) {
            right = mid;
        } else if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right--;
        }
    }
    return nums[left];
};

let nums = [3, 3, 1, 3];
console.log(findMin(nums));
