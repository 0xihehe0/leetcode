/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-04-11 16:44:46
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-04-11 16:50:35
 * @FilePath: \leetcode\235\lowestCommonAncestor.js
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

var lowestCommonAncestor = function (root, p, q) {
    let list = [];
    const dfs = root => {
        if (root === null) {
            return;
        }

        dfs(root.left);
        list.push(root.val);
        dfs(root.right);
    };

    dfs(root);
    console.log(list);
};

let n1 = new TreeNode(4),
    n2 = new TreeNode(2),
    n3 = new TreeNode(5),
    n4 = new TreeNode(1),
    n5 = new TreeNode(3);
// 构建节点之间的引用（指针）
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;

let p = 3;
let q = 4;
console.log(lowestCommonAncestor(n1, p, q));
