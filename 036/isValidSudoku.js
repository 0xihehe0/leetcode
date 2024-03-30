/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (var i = 0; i < board.length; i++) {
        let value = board[i];
        if (!checkRow(value)) {
            return false;
        }
    }

    const numRows = board.length; // 行数
    const numCols = board[0].length; // 列数

    // 遍历每一列
    for (let col = 0; col < numCols; col++) {
        let result = [];
        // 对于当前列，遍历每一行
        for (let row = 0; row < numRows; row++) {
            result.push(board[row][col]);
        }
        if (!checkRow(result)) {
            return false;
        }
    }

    const gridSize = 3; // 因为是 9x9 的数独板，每个子网格是 3x3
    // 遍历每个子网格的起始点
    for (let row = 0; row < board.length; row += gridSize) {
        for (let col = 0; col < board[row].length; col += gridSize) {
            let subgrid = [];

            // 遍历子网格内的元素
            for (let r = row; r < row + gridSize; r++) {
                for (let c = col; c < col + gridSize; c++) {
                    subgrid.push(board[r][c]);
                }
            }
            if (!checkRow(subgrid)) {
                return false;
            }
        }
    }

    return true;
};

const checkRow = list => {
    const exclusions = new Set(['.']); // 包含特定排除项以及空字符串和"."
    const uniqueStrings = new Set();
    for (const item of list) {
        if (!exclusions.has(item)) {
            // 如果当前项不在排除项中
            if (uniqueStrings.has(item)) {
                // 如果已经在uniqueStrings中，表示有重复，直接返回false
                return false;
            }
            uniqueStrings.add(item); // 否则添加到uniqueStrings中
        }
    }
    return true;
};

let board = [
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];
console.log(isValidSudoku(board));
