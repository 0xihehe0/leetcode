/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-11 14:12:52
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-11 17:30:55
 * @FilePath: \leetcode\704\search.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(target < nums[mid]) {
            right = mid - 1;
        }else if(target > nums[mid]) {
            left = mid + 1
        }else if(target === nums[mid]) {
            return mid
        }
    }
    return -1
};

let nums = [-1, 0, 3, 5, 9, 12],
    target = 12;
console.log(search(nums, target));
