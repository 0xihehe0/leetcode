/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums.length === 0) {
        return [-1, -1];
    }
    if (nums.length === 1 && nums[0] === target) {
        return [0, 0];
    }
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = parseInt(left + (right - left) / 2);
        if (target < nums[mid]) {
            right = mid - 1;
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else {
            return checkFirstLast(nums, target, mid);
        }
    }
    return [-1, -1];
};

function checkFirstLast(nums, target, mid) {
    let left = mid;
    let right = mid;
    // Expand to the left
    while (left > 0 && nums[left - 1] === target) {
        left--;
    }
    // Expand to the right
    while (right < nums.length - 1 && nums[right + 1] === target) {
        right++;
    }
    return [left, right];
}

let nums = [2,2],
    target = 2;
console.log(searchRange(nums, target));
