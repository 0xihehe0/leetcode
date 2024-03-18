/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let list = new Map();
    for (var i = 0; i < nums.length; i++) {
        list.set(nums[i], nums[i]);
    }

    for (var i = 0; i <= nums.length; i++) {
        if (!list.has(i)) {
            return i
        }
    }
};

let nums = [3, 0, 1];
console.log(missingNumber(nums));
