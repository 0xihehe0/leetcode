/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2023-05-09 22:41:33
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2023-05-09 22:52:35
 * @FilePath: \leetcode\374\bindaySearch.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var guessNumber = function(n) {
    let high = n
    let low = 1
    while (high >= low) {
        let mid = Math.floor((high - low)/2)
        let res = guess(mid)
        if (res === -1){
            high = mid - 1
        }else if(res === 1){
            low = mid + 1
        }else{
            return mid
        }
    }
};