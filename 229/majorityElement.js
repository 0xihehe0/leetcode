/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-03-22 22:33:52
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-03-22 22:49:44
 * @FilePath: \leetcode\229\majorityElement.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let checkValue = Math.floor(nums.length / 3);
    let res = [];
    let list = new Map();
    let count = 1;
    for (var i = 0; i < nums.length; i++) {
        if (!list.has(nums[i])) {
            list.set(nums[i], count);
        } else {
            let value = list.get(nums[i]);
            list.set(nums[i], value + 1);
        }
    }

    list.forEach((element,i) => {
        if(element > checkValue){
            res.push(i);
        }
    });

    return res
};

let nums = [1, 1, 1, 2];
console.log(majorityElement(nums));
