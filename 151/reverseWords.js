/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2023-05-12 23:39:40
 * @LastEditors: 姚进玺 yaojinxi@bovosz.com
 * @LastEditTime: 2023-05-30 17:11:46
 * @FilePath: \leetcode\150\new.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var reverseWords = function(s) {
  let t = s.split(' ')
  t = t.filter((item)=>{
    if(item){
      return item
    }
  })
  t = t.reverse()
  t = t.join(' ')
  return t
};
