/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-02-21 12:06:01
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-02-21 15:55:58
 * @FilePath: \leetcode\102\levelOrder.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let checkArr = [];
    if(!root){
        return checkArr;
    }
    let arr = [];
    arr.push(root);
    while (arr.length !== 0) {
        checkArr.push([]);
        for (let i = 1; i <= arr.length; i++) {
            let node = arr.shift();
            checkArr[checkArr.length - 1].push(node.val);
            if(node.left){
                arr.push(node.left)
            }
            if(node.right){
                arr.push(node.right)
            }
        }

    }
    return checkArr
};


let root = [3,9,20,null,null,15,7];
console.log(levelOrder(root));
