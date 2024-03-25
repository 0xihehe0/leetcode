/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-03-25 15:16:03
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-03-25 15:35:26
 * @FilePath: \leetcode\977\sortedSquares.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let k = nums.length - 1;
    let res = new Array(nums.length).fill(0);
    while (left <= right) {
        let leftValue = nums[left] * nums[left];
        let rightValue = nums[right] * nums[right];
        if (leftValue < rightValue) {
            res[k] = rightValue;
            k--;
            right--;
        } else {
            res[k] = leftValue;
            left++;
            k--;
        }
    }
    return res;
};

let nums = [-7,-3,2,3,11];
console.log(sortedSquares(nums));
