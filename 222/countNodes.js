/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-04-08 10:38:20
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-04-08 10:40:02
 * @FilePath: \leetcode\222\countNodes.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class TreeNode {
    val; // 节点值
    left; // 左子节点指针
    right; // 右子节点指针
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

var countNodes = function (root) {
    let list = [];
    const dfs = root => {
        if (root === null) {
            return;
        }
        list.push(root.val);
        dfs(root.left);
        dfs(root.right);
    };
    dfs(root);
    return list.length
};

let n1 = new TreeNode(1),
    n2 = new TreeNode(2),
    n3 = new TreeNode(3),
    n4 = new TreeNode(4),
    n5 = new TreeNode(5);
// 构建节点之间的引用（指针）
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;

console.log(countNodes(n1));
