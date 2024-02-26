/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-26 21:28:29
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-26 21:44:27
 * @FilePath: \leetcode\027\removeElement.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const n = nums.length;
    let left = 0;
    for (let right = 0; right < n; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left++;
        }
    }
    console.log(nums);
    return left;
};


let val = 2;
let nums = [0,1,2,2,3,0,4,2];
removeElement(nums,val)