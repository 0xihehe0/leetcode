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

var levelOrderBottom = function (root) {
    let checkArr = [];
    if (!root) {
        return checkArr;
    }
    let arr = [root];
    while (arr.length !== 0) {
        let tmp = [];
        let size = arr.length
        for (let i = 1; i <= size; i++) {
            let node = arr.shift();
            console.log(node);
            tmp.push(node.val);
            if (node.left) {
                arr.push(node.left);
            }
            if (node.right) {
                arr.push(node.right);
            }
        }
        checkArr.unshift(tmp);
    }
    return checkArr;
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

console.log(levelOrderBottom(n1));
