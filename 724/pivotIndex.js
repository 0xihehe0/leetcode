/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-12 23:16:23
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-12 23:38:52
 * @FilePath: \leetcode\724\pivotIndex.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var pivotIndex = function (nums) {
    let mid = 0;

    while (mid < nums.length) {
        let leftValue = 0;
        let rightValue = 0;
        for (let i = 0; i < nums.length; i++) {
            let value = nums[i];
            if (i > mid) {
                rightValue += value;
            } else if (i < mid) {
                leftValue += value;
            }
        }
        console.log(leftValue, rightValue);
        if (leftValue !== rightValue) {
            mid++;
        }else {
            return mid;
        }
    }
    return -1;
};

let nums = [-1,-1,-1,1,1,1]
console.log(pivotIndex(nums));
