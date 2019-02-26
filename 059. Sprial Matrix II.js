var assert = require('assert')
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  var res = Array(n).fill(undefined).map(function () { return [] }),
    count = 1

  // 在矩阵四边插入值，递归到内一层的矩阵
  var _insert = function (m) {
    if (2 * m + 1 === n) {
      res[m][m] = count
      return
    }
    if (2 * m >= n) return

    var size = n - 1 - m, i
    for (i = m; i < size; i++) {
      //console.log(res)

      res[m][i] = count
      res[i][size] = size - m + count
      res[size][n - 1 - i] = 2 * (size - m) + count
      res[n - 1 - i][m] = 3 * (size - m) + count
      count++
    }
    count += 3 * (size - m)
    _insert(m + 1)
  }

  _insert(0)
  return res
};

assert.deepEqual(generateMatrix(3), [[1, 2, 3], [8, 9, 4], [7, 6, 5]])