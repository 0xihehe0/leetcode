/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let list = new Set();
    for (let i of nums) {
        list.add(i);
    }
    let longStreak = 0;

    for (const num of list) {
        if (!list.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            while (list.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longStreak = Math.max(longStreak, currentStreak);
        }
    }

    return longStreak;
};

let nums = [1, 200, 4, 2500, 2, 3, 55, 4];
console.log(longestConsecutive(nums));
