/*
 * @Author: 姚进玺 yaojinxi@bovosz.com
 * @Date: 2023-05-24 12:21:59
 * @LastEditors: 姚进玺 yaojinxi@bovosz.com
 * @LastEditTime: 2023-05-24 14:22:06
 * @FilePath: /leetcode/026/removeDuplicates.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return nums.length;
    }
    let fast = 1;
    let slow = 1;
    while (fast < nums.length) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};

let arr = [1, 1, 2, 3, 4, 4, 4];
removeDuplicates(arr);
