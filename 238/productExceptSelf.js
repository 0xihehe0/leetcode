/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-27 12:41:23
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-27 19:09:17
 * @FilePath: \leetcode\238\productExceptSelf.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let leftArr = Array.from({ length: nums.length });
    leftArr[0] = 1;
    let tem = 1;
    for (let i = 1; i < nums.length; i++) {
        leftArr[i] = leftArr[i - 1] * nums[i - 1];
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        tem = tem * nums[i + 1]
        leftArr[i] = leftArr[i] * tem
    }
    return leftArr
};

let nums = [1, 2, 3, 4, 5];
console.log(productExceptSelf(nums));
