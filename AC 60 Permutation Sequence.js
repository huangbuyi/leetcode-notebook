var assert = require('assert')
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

/* 思路：n 个数共有 n! 种取法，第一个字符有 n 种取法，从候选元素中取第 k % (n - 1)! 个元素，并剔除已取出的值，然后迭代取下一个值 */
var getPermutation = function (n, k) {
  var s = 1, c = [], res = '', k = k - 1, nums = new Array(n).fill(undefined).map(function (v, i) {
    return i + 1
  })

  // 计算组合数量
  for (var i = 2; i < n; i++) {
    s *= i
  }

  for (var i = n - 1; i > 0; i--) {
    // 取出元素
    c = c.concat(nums.splice(k / s >> 0, 1))
    k %= s
    s /= i
  }

  return c.concat(nums).join('')
};

assert.deepEqual(getPermutation(1, 1), '1')
assert.deepEqual(getPermutation(4, 1), '1234')
assert.deepEqual(getPermutation(4, 2), '1243')
assert.deepEqual(getPermutation(4, 24), '4321')
assert.deepEqual(getPermutation(4, 20), '4132')
assert.deepEqual(getPermutation(9, 666), '123967854')
assert.deepEqual(getPermutation(9, 666), '123967854')