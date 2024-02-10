/*
 * @Author: 姚进玺 yaojinxi@bovosz.com
 * @Date: 2023-06-05 16:04:12
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-10 22:15:32
 * @FilePath: /leetcode/leetcode/015/threeSum.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let allArr = [];

  for (let i = 0; i < nums.length - 2; i++) {
      // Skip the duplicate elements
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let left = i + 1;
      let right = nums.length - 1;
      
      while (left < right) {
          let sum = nums[i] + nums[left] + nums[right];
          
          if (sum === 0) {
              allArr.push([nums[i], nums[left], nums[right]]);
              // Skip the duplicate elements
              while (left < right && nums[left] === nums[left + 1]) left++;
              while (left < right && nums[right] === nums[right - 1]) right--;
              left++;
              right--;
          } else if (sum < 0) {
              left++;
          } else {
              right--;
          }
      }
  }

  return allArr;
};


let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
