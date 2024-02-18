/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-18 23:06:27
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-18 23:36:34
 * @FilePath: \leetcode\121\121.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let low = prices[0];
    let profit =  0
    let mostProfit = 0;
    for (var i = 1; i < prices.length; i++) {
        let value = prices[i];
        if(value > low){
            profit = value - low; 
        }
        console.log(profit);
        if (value < low) {
            low = value;
        }
        if(mostProfit < profit){
            mostProfit = profit
        }
    }
    console.log(low,mostProfit);
    return mostProfit
};

let prices = [7,6,4,3,1];
console.log(maxProfit(prices));
