/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2023-05-10 23:12:12
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2023-05-10 23:25:55
 * @FilePath: \leetcode\226\invertTree.js
 * @Description: 利用递归每次颠倒左右的顺序即可反转二叉树
 */
var invertTree = function(root) {
    if(!root){
        return null
    }
    return {
        right:invertTree(root.left),
        left: invertTree(root.right),
        val:root.val
    }  
}