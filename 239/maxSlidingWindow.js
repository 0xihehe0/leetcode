/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-11 12:40:57
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-11 13:41:04
 * @FilePath: \leetcode\239\maxSlidingWindow.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var maxSlidingWindow = function (nums, k) {
    let allArr = [];
    if (nums.length === 0) {
        return allArr;
    }
    let left = 0;
    let right = k;
    while (right <= nums.length) {
        let checkArr = nums.slice(left, right);
        console.log(left, right);
        let max = Math.max(...checkArr);
        allArr.push(max);
        left++;
        right++;
    }
    return allArr;
};

var maxSlidingWindow2 = function (nums, k) {
    let allArr = [];
    if (nums.length === 0) {
        return allArr;
    }
    let left = 0;
    let right = k;
    let checkArr = nums.slice(left, right);
    let max = Math.max(...checkArr);
    allArr.push(max);
    while (right < nums.length) {
        let value = nums[right]
        checkArr.push(value);
        checkArr.shift()
        if(value > max && max !== nums[left]){
            max = value
        }else{
            max = Math.max(...checkArr);
        }
        allArr.push(max);
        console.log(value);
        
        console.log(checkArr);
        left++;
        right++;
    }
    return allArr;
};

let k = 3;
let nums = [1, 3, -1, -3, 5, 3, 6, 7];
// console.log(maxSlidingWindow(nums, k));
console.log(maxSlidingWindow2(nums, k));
