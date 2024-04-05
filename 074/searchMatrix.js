/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-04-05 10:43:08
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-04-05 11:22:07
 * @FilePath: \leetcode\074\searchMatrix.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let leftCol = 0;
    let rightCol = matrix.length - 1;
    while (leftCol < rightCol) {
        let mid = Math.floor((leftCol + rightCol + 1) / 2);
        console.log(mid);
        if (matrix[mid][0] <= target) {
            if (leftCol === mid) {
                break;
            }
            leftCol = mid;
        } else {
            rightCol = mid - 1;
        }
    }

    let checkArr = matrix[leftCol];

    let leftIndex = 0;
    let rightIndex = checkArr.length - 1;

    while (leftIndex <= rightIndex) {
        let mid = Math.floor((leftIndex + rightIndex) / 2);
        if (checkArr[mid] === target) {
            return true;
        } else if (checkArr[mid] > target) {
            rightIndex = mid - 1;
        } else {
            leftIndex = mid + 1;
        }
    }
    return false;
};

let matrix = [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60]
    ],
    target = 13;
console.log(searchMatrix(matrix, target));
