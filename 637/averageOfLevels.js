/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-04-08 12:13:35
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-04-09 10:53:00
 * @FilePath: \leetcode\637\averageOfLevels.js
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

var averageOfLevels = function (root) {
    let list = [];
    let queue = [root];

    while (queue.length !== 0) {
        let count = 0;
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            count += node.val;
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        list.push(count / size);
        console.log(count / size);
    }

    return list;
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

console.log(averageOfLevels(n1));
