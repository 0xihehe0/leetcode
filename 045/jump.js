/*
 * @Author: 姚进玺 yaojinxi@bovosz.com
 * @Date: 2023-06-05 11:16:39
 * @LastEditors: 姚进玺 yaojinxi@bovosz.com
 * @LastEditTime: 2023-06-05 11:44:21
 * @FilePath: /leetcode/leetcode/045/jump.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let curIndex = 0
  let nextIndex = 0
  let steps = 0
  for(let i = 0; i < nums.length - 1; i++) {
      nextIndex = Math.max(nums[i] + i, nextIndex)
      if(i === curIndex) {
          curIndex = nextIndex
          steps++
      }
  }
  return steps
};

let arr = [2, 3, 1, 1, 4];
jump(arr);
