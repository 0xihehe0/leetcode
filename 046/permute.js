/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let resList = [];
    let list = [];
    let booleanList = [];
    backTrack(list, nums, booleanList, resList);
    return resList;
};

function backTrack(list, nums, booleanList, resList) {
    if (list.length === nums.length) {
        let newList = list.slice();
        resList.push(newList);
        return;
    }
    let duplicated = new Set();
    for (let i = 0; i < nums.length; i++) {
        let value = nums[i];

        if (!booleanList[i] && duplicated.has(value)) {
            booleanList[i] = true;
            list.push(value);
            duplicated.add(value);
            backTrack(list, nums, booleanList, resList);
            booleanList[i] = false;
            list.pop();
        }
    }
}

let nums = [1, 2, 3];
let res = permute(nums);
for (let i = 0; i < res.length; i++) {
    console.log(res[i]);
}
