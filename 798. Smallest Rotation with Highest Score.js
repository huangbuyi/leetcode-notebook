/*
自己能想出思路，蛮激动的。思路很简单，计算第 k 次 rotation 的分值变化，分两步：
1 加分：每次 rotation，都有一个值从头部移动到尾部，除了 0 和 n 分值不变，其它值分数 +1
2 减分：每个值 rotation 到某个位置后，分值 -1
最后，计算 k 次 rotation 累计分值的最大值
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var bestRotation = function (A) {
  var change = new Array(A.length + 1).fill(1)
  for (var i = 0; i < A.length; i++) {
    var k = i - A[i] + (i < A[i] ? A.length : 0)
    change[k + 1] -= 1
    if (A[0] === 0 || A[0] === A.length) {
      change[i + 1] -= 1
    }
  }

  var s = 0, max = 0, K = 0
  for (var i = 1; i < A.length; i++) {
    s += change[i]
    if (s > max) {
      max = s
      K = i
    }
  }

  return K
};