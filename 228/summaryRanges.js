/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-28 23:44:30
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-29 23:32:45
 * @FilePath: \leetcode\228\summaryRanges.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const ret = [];
    let i = 0;
    const n = nums.length;
    while (i < n) {
        const low = i;
        i++;
        while (i < n && nums[i] === nums[i - 1] + 1) {
            i++;
        }
        const high = i - 1;
        const temp = ['' + nums[low]];
        if (low < high) {
            temp.push('->');
            temp.push('' + nums[high]);
        }
        ret.push(temp.join(''));
    }
    return ret;
};


let nums = [0, 1, 2, 6, 7, 9];
console.log(summaryRanges(nums));
