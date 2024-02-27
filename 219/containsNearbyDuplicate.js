/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-27 22:56:59
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-27 23:06:37
 * @FilePath: \leetcode\219\containsNearbyDuplicate.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    if(k > nums.length) return false
    let map = new Map();
    let isContains = false;
    for (let i = 0; i < nums.length; i++) {
        let value = nums[i];
        if (!map.has(value)) {
            map.set(value, i);
        } else {
            let index = Math.abs(map.get(value) - i);
            map.set(value, i);
            if (index <= k) {
                isContains = true;
            }
        }
    }
    return isContains;
};

let nums = [1, 0, 1, 1],
    k = 1;
console.log(containsNearbyDuplicate(nums, k));
