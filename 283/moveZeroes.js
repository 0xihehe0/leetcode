/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-03-22 18:49:22
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-03-22 19:15:18
 * @FilePath: \leetcode\283\moveZeroes.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (nums == null) {
        return;
    }
    let slow = 0;
    let fast = 0;
    while (fast < nums.length) {
        let slowValue = nums[slow];
        let fastValue = nums[fast];
        if (fastValue !== 0) {
            nums[slow] = fastValue;
            nums[fast] = slowValue;
            slow++;
        }
        fast++;
    }
};

let nums = [0, 1, 0, 2, 4];
console.log(moveZeroes(nums));
