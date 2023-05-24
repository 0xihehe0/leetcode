/*
 * @Author: 姚进玺 yaojinxi@bovosz.com
 * @Date: 2023-05-24 16:04:20
 * @LastEditors: 姚进玺 yaojinxi@bovosz.com
 * @LastEditTime: 2023-05-24 17:54:50
 * @FilePath: /leetcode/167/twoSum.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


/**暴力解法，直接双循环求下标
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < numbers.length; j ++ ) {
            if (numbers[i] + numbers[j] === target && i !== j) {
                return [i + 1, j + 1];
            }
        }
    }
};

/**双指针解法，从头到尾分别计算得出答案
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let short = 0
  let long = numbers.length - 1
  while (long > short) {
    if(numbers[long] + numbers[short] < target) {
      short ++
    }
    if(numbers[long] + numbers[short] > target) {
      long --
    }
    if(numbers[long] + numbers[short] === target){
      return [short+1, long+1]
    }
  }
};

let numbers = [0,0,3,4]
let target = 0;
console.log(twoSum(numbers, target));
