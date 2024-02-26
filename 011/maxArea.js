/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        let maxValue = Math.min(height[left], height[right]);
        let nowArea = maxValue * (right - left);
        maxArea = Math.max(maxArea, nowArea);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};

let height = [2, 3, 4, 5, 18, 17, 6];
console.log(maxArea(height));
