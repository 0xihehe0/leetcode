/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-03-03 21:33:51
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-03-03 21:40:57
 * @FilePath: \leetcode\162\findPeakElement.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.lenght === 0) {
        return 0;
    }
    let checkValue = 0;
    for (var i = 0; i < nums.length; i++) {
        let value = nums[i];
        if(value > nums[checkValue]) {
            checkValue = i;
        }
    }
    return checkValue;
};

let nums = [1, 2];
console.log(findPeakElement(nums));
