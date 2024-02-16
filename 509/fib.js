/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n == 1 || n == 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
};

let n = 4;
console.log(fib(n));
