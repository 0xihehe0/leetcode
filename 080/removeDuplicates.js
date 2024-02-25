/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2023-05-28 14:25:10
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-25 23:26:09
 * @FilePath: \leetcode\080\removeDuplicates.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let slow = 0;
    let fast = 0;
    let count = 0
    while (fast < nums.length) {
        if (nums[slow] !== nums[fast]) {
            slow ++;
            nums[slow] = nums[fast];
        }
        fast ++ ;
        console.log(nums);
    }
    
};

let nums = [0,0,1,1,1,1,2,3,3];
removeDuplicates(nums);
