/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let list = [];
    for (var i = 0; i < tokens.length; i++) {
        let value = tokens[i];
        if (isNumber(value)) {
            list.push(parseInt(value));
        } else {
            let num1 = list.pop();
            let num2 = list.pop();
            if (value === '+') {
                list.push(num1 + num2);
            } else if (value === '-') {
                list.push(num2 - num1);
            } else if (value === '*') {
                list.push(num1 * num2);
            } else if (value === '/') {
                list.push(
                    num2 / num1 > 0
                        ? Math.floor(num2 / num1)
                        : Math.ceil(num2 / num1)
                );
            }
        }
    }
    return list.pop();
};

const isNumber = token => {
    return !('+' === token || '-' === token || '*' === token || '/' === token);
};

let tokens = ['2', '1', '+', '3', '*'];
console.log(evalRPN(tokens));
