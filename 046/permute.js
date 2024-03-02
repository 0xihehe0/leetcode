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

    for (let i = 0; i < nums.length; i++) {
        let value = nums[i];
        
        if (!booleanList[i]) {
            booleanList[i] = true;
            list.push(value);
            console.log(list);
            backTrack(list, nums, booleanList, resList);
            console.log(list);
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
