/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let resList = [];
    let start = 0;
    let checkList = [];
    candidates.sort((a, b) => a - b);
    checkCombine(resList, target, start, checkList, candidates);
    return resList;
};

function checkCombine(resList, target, start, checkList, candidates) {
    if (target === 0) {
        resList.push([...checkList]);
        return;
    }

    for (let i = start; i < candidates.length; i++) {
        let value = candidates[i];
        if (i > start && value === candidates[i - 1]) {
            continue;
        }
        if (target - value < 0) {
            break;
        }
        checkList.push(value);
        checkCombine(resList, target - value, i + 1, checkList, candidates);
        checkList.pop();
    }
}

let candidates = [10, 1, 2, 7, 6, 1, 5],
    target = 8;
console.log(combinationSum2(candidates, target));
