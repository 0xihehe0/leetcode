/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-03-04 16:53:54
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-03-04 17:10:09
 * @FilePath: \leetcode\039\combinationSum.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let resList = [];
    let total = 0;
    let checkList = [];
    candidates.sort((a, b) => a - b);
    combine(resList, target, total, checkList, candidates);
    return resList;
};

function combine(resList, target, total, checkList, candidates) {
    if (target === 0) {
        resList.push([...checkList]);
        return resList;
    }

    for (let index = total; index < candidates.length; index++) {
        const element = candidates[index];
        if (target - element < 0) {
            break;
        }
        checkList.push(element);
        combine(resList, target - element, index, checkList, candidates);
        checkList.pop();
    }
}

let candidates = [2, 3, 6, 7],
    target = 7;
// console.log(combinationSum(candidates, target));
let nums = combinationSum(candidates, target);
for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    console.log(element);
}
