/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-14 20:25:00
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-14 20:28:03
 * @FilePath: \leetcode\287\findDuplicate.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var findDuplicate = function(nums) {
    let list = new Map();
    for (let i = 0; i < nums.length; i++){
        let value = nums[i];
        if(list.has(value)){
            return value;
        }else{
            list.set(value, (list.get(value) || 0)   + 1)
        }
    }
};

let nums = [3,1,3,4,2];
console.log(findDuplicate(nums));