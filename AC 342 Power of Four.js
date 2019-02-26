/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  return Math.log10(num) / Math.log10(4) % 1 === 0
};

/*
讨论有更高效的方法：使用位运算
*/