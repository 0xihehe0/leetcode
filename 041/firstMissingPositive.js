/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-03-30 15:06:46
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-04-04 13:35:29
 * @FilePath: \leetcode\041\firstMissingPositive.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0) {
            nums[i] = n + 1;
        }
    }

    for (let i = 0; i < n; i++) {
        let num = Math.abs(nums[i]);
        if (num <= n) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }

    return n + 1;
};


let nums = [1,2,0];
console.log(firstMissingPositive(nums));
