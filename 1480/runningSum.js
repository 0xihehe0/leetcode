/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr = [];
    if(nums.length === 0) {
        return [0];
    }
    let total = 0
    for (let i = 0; i < nums.length; i++) { 
        let value = nums[i];
        total = value + total
        arr.push(total);
    }
    return arr;
};

let nums = [3,1,4,5]
console.log(runningSum(nums));