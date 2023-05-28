/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slow = 0
    let fast = 0
    while(slow < fast){
        if(nums[slow] === nums[slow -2] ){
            slow ++ 
        }
    }
};

let nums = [1,1,1,2,2,3]
removeDuplicates(5)