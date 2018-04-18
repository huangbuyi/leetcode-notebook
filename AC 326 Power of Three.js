/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  return Math.log10(n) / Math.log10(3) % 1 === 0
};

/* 
立即想到的就是用指数函数，但又想答案不可能那么简单，结果是我想太多了。
*/