/*
 * @Author: yaojinxi 864554492@qq.com
 * @Date: 2024-03-29 14:11:21
 * @LastEditors: yaojinxi 864554492@qq.com
 * @LastEditTime: 2024-03-29 14:59:19
 * @FilePath: \leetcode\224\calculate.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let stack = [];
    let operand = 0;
    let result = 0; // For the current operation
    let sign = 1; // 1 means positive, -1 means negative

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char >= '0' && char <= '9') {
            // Forming the operand - in case it's more than one digit
            operand = operand * 10 + (char - '0');
        } else if (char === '+') {
            // Calculate the operand and reset it
            result += sign * operand;
            sign = 1;
            operand = 0;
        } else if (char === '-') {
            result += sign * operand;
            sign = -1; // Flip the sign
            operand = 0;
        } else if (char === '(') {
            // Push the result and the sign onto the stack, for later
            // We push the result first, then the sign
            stack.push(result);
            stack.push(sign);

            // Reset the sign and result for the new sub-expression
            sign = 1;
            result = 0;
        } else if (char === ')') {
            // End of sub-expression; add the operand and result together
            result += sign * operand;

            // The result of the current sub-expression is multiplied by the sign before it
            result *= stack.pop(); // stack.pop() is the sign before the parenthesis

            // Then add to the result before the parenthesis
            result += stack.pop(); // stack.pop() is the result calculated before this parenthesis

            // Reset the operand
            operand = 0;
        }
    }

    // Add the last operand to the result
    return result + sign * operand;
};

let s = '2147483647';
console.log(calculate(s));
