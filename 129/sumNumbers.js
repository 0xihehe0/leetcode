/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-04-11 15:19:32
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-04-11 16:07:13
 * @FilePath: \leetcode\129\sumNumbers.js
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

var sumNumbers = function (root) {
    let sums = [];

    // 定义一个辅助函数，用于递归搜索树
    function dfs(node, currentSum) {
        if (!node) return; // 如果当前节点为空，直接返回

        // 更新当前路径的和
        currentSum = currentSum * 10 + node.val;

        // 检查当前节点是否是叶子节点
        if (!node.left && !node.right) {
            // 是叶子节点，将当前路径的和添加到结果数组中
            sums.push(currentSum);
        } else {
            // 不是叶子节点，继续搜索
            dfs(node.left, currentSum); // 递归搜索左子树
            dfs(node.right, currentSum); // 递归搜索右子树
        }
    }

    // 从根节点开始递归搜索，初始和为0
    dfs(root, 0);

    let count = 0
    for (var i = 0; i <sums.length; i++) {
        count += sums[i]
    }

    return count;
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

console.log(sumNumbers(n1));
