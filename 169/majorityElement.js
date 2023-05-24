/*
 * @Author: 姚进玺 yaojinxi@bovosz.com
 * @Date: 2023-05-24 15:11:07
 * @LastEditors: 姚进玺 yaojinxi@bovosz.com
 * @LastEditTime: 2023-05-24 15:53:31
 * @FilePath: /leetcode/169/majorityElement.js
 * @Description: 摩尔投票法
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let count = 1
    let majorNumber = nums[0]
    for (var i = 1; i < nums.length; i++) {
      if(count === 0){
        majorNumber = nums[i]
      }
      if(nums[i] === majorNumber){
        count ++
      }else{
        count --
      }
    }
    return majorNumber
};

let arr = [2, 2, 1, 3, 1, 1, 4, 1, 1, 5, 1, 1, 6];

console.log(majorityElement(arr));
