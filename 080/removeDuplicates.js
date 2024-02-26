/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2023-05-28 14:25:10
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-26 15:28:20
 * @FilePath: \leetcode\080\removeDuplicates.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let slow = 2;
    let fast = 2;
    if(nums.length <= 2) {
        return nums.length
    }
    while (fast < nums.length) {
        if(nums[slow - 2] != nums[fast]) {
            nums[slow] = nums[fast];
            slow ++ 
        }
        fast++;
    }
    return slow;
}

let nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
removeDuplicates(nums);
