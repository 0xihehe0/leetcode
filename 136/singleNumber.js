/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-04-05 16:17:19
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-04-05 16:58:13
 * @FilePath: \leetcode\136\singleNumber.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let x = 0;
    for (var i = 0; i < nums.length; i++) {
        x ^= nums[i];
    }
    return x
};

let nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
