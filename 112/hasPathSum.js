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

var hasPathSum = function (root, targetSum) {
    if (root === null) return false;
    if (root.left === null && root.right === null) {
        return targetSum === root.val;
    }

    return (
        hasPathSum(root.left, targetSum - root.val) ||
        hasPathSum(root.right, targetSum - root.val)
    );
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

let targetSum = 7;
console.log(hasPathSum(n1, targetSum));
