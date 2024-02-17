/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-16 23:05:13
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-17 23:47:40
 * @FilePath: \leetcode\1480\runningSum.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr = [];
    if(nums.length === 0) {
        return [0];
    }
    let total = 0
    for (let i = 0; i < nums.length; i++) { 
        let value = nums[i];
        total = value + total
        arr.push(total);
    }
    return arr;
};

let nums = [3,1,4,5]
console.log(runningSum(nums));
runningSum(nums)