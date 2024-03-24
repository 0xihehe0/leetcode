/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
   // 从 1 开始，不断地乘以 2
   let power = 1;
   while (power < n) {
       power *= 2;
   }
   // 检查最终的 power 是否等于 n
   return power === n;
};


let n = 17;
console.log(isPowerOfTwo(n));
