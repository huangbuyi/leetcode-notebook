/* 
一遍过的感觉好爽。注意看提示，不要被示例迷惑去搞二维数组，提示说了 N 是 10^9 级别的。
让 querie 和每个 lamp 逐次比较也是错误的，因为两者都是 20000，O(N^2) 会超过时间限制。
因此，使用 HashMap 才是最合适的选择，分三步：
1. 计数每个 Lamp 的 x、y、x - y(对角线)、x + y(反对角线)。
2. 如果 query 所在位置 x、y、x - y、x + y 存在，结果 = 1。
3. 删除相邻八个格子，加上本身九个格子内的 Lamp。
本算法的 Runtime 和 Memory Usage 都是 100%。
*/

/**
 * @param {number} N
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var off = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]]

var gridIllumination = function(N, lamps, queries) {
  var lamp = {}, X = {}, Y = {}, D1 = {}, D2 = {}, res = new Array(queries.length).fill(0)
  
  for (var i = 0; i < lamps.length; i++) {
    var x = lamps[i][0], y = lamps[i][1]
    lamp[x + '-' + y] = true
    X[x] = X[x] ? X[x] + 1 : 1
    Y[y] = Y[y] ? Y[y] + 1 : 1
    D1[x - y] = D1[x - y] ? D1[x - y] + 1 : 1
    D2[x + y] = D2[x + y] ? D2[x + y] + 1 : 1
  }
  
  for (var i = 0; i < queries.length; i++) {
    var x = queries[i][0], y = queries[i][1]
    if (X[x] || Y[y] || D1[x - y] || D2[x + y]) res[i] = 1
    for (var j = 0; j < off.length; j++) {
      var tx = x + off[j][0], ty = y + off[j][1], key = tx + '-' + ty
      if (lamp[key]) {
        delete lamp[key]
        X[tx]--
        Y[ty]--
        D1[tx - ty]--
        D2[tx + ty]--
      }
    }
  }
  
  return res
};