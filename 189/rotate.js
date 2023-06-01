/*
 * @Author: 姚进玺 yaojinxi@bovosz.com
 * @Date: 2023-05-24 10:38:17
 * @LastEditors: 姚进玺 yaojinxi@bovosz.com
 * @LastEditTime: 2023-05-30 18:05:20
 * @FilePath: /leetcode/leetcode/151/reverseWords.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const reverse = (arr,left,right) => {
        while (left < right) {
            let value = arr[left];
            arr[left] = arr[right];
            arr[right] = value;
            left++;
            right--;
        }
        return arr;
    };
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    console.log(nums);
};

let arr = [1,2,3];
let k = 4;
console.log(rotate(arr, k));
