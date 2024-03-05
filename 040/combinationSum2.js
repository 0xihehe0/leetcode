/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let resList = [];
    let start = 0;
    let checkList = [];
    checkCombine(resList, target, start, checkList, candidates);
};

checkCombine((resList, target, start, checkList, candidates) => {
    if (target === 0) {
        resList.push([...checkList]);
        return resList;
    }

    for (let i = start; i < candidates.length; i++) {}
});

let candidates = [10, 1, 2, 7, 6, 1, 5],
    target = 8;
console.log(combinationSum2(candidates, target));
