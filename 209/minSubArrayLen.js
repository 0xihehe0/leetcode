/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-25 20:38:42
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-25 22:01:05
 * @FilePath: \leetcode\209\minSubArrayLen.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0;
    let right = 1;
    let minSum = nums.length;
    let total = nums[left];
    if (total >= target) {
        return 1;
    }
    total = total + nums[right];

    while (right <= nums.length - 1 && left <=nums.length - 1) {
        if (total < target) {
            right++;
            total = total + nums[right];
        } else if (total >= target) {
            minSum = right - left < minSum ? right - left : minSum;
            total = total - nums[left];
            left ++;
        }
        console.log(left,right,total);
    }
    
    if (minSum === nums.length) {
        return 0;
    }

    return minSum + 1 ;
};

let target = 6,
    nums = [2,2,10];
console.log(minSubArrayLen(target, nums));
