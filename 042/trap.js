/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-25 23:36:58
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-26 15:41:58
 * @FilePath: \leetcode\042\trap.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftSide = Math.max(height[0],height[1])
    let rightSide = Math.max(height[height.length - 1],height[height.length - 2])
    console.log(leftSide,rightSide);
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1]
trap(height);