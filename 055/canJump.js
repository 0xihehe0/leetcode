/*
 * @Author: 姚进玺 yaojinxi@bovosz.com
 * @Date: 2023-05-31 11:13:52
 * @LastEditors: 姚进玺 yaojinxi@bovosz.com
 * @LastEditTime: 2023-06-01 17:48:09
 * @FilePath: /leetcode/leetcode/055/canJump.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // 必须到达end下标的数字
  let end = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    console.log(end - i,nums[i]);
      if (end - i <= nums[i]) {
          end = i;
      }
  }

  return end == 0;
};


let nums = [2,3,1,1,4]
console.log(canJump(nums));
