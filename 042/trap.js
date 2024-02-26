/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-25 23:36:58
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-26 16:45:58
 * @FilePath: \leetcode\042\trap.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftMax = 0
    let rightMax = 0;
    let all = 0;
    let leftIndex = 0;
    let rightIndex = height.length - 1;
   while(leftIndex < rightIndex){
    leftMax = Math.max(leftMax,height[leftIndex])
    rightMax = Math.max(rightMax,height[rightIndex])
    if(height[leftIndex] < height [rightIndex]){
        all = all + (leftMax - height[leftIndex])
        leftIndex ++
    }else{
        all = all + (rightMax - height[rightIndex])
        rightIndex --
    }
   }
   return all
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height));
