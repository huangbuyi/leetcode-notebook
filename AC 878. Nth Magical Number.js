/**
 * @param {number} N
 * @param {number} A
 * @param {number} B
 * @return {number}
 */

// Least Common Multiple 求最小公倍数
var getLCM = function (A, B) {
  // 先求最小公约数
  var a = Math.max(A, B)
  var b = Math.min(A, B)
  while (b > 0) {
      var t = b
      b = a % b
      a = t
  }
  // 相乘除以最小公约数等于最小公倍数
  return A * B / a
}

var nthMagicalNumber = function(N, A, B) {
  var lcm = getLCM(A, B)
  var low = 0
  var high = Math.min(A, B)  * N
  
  while (low < high) {
      var middle = Math.floor((low + high) / 2)
      var nth = Math.floor(middle / A) + Math.floor(middle / B) - Math.floor(middle / lcm)
      if (nth < N) {
          low = middle + 1
      } else {
          high = middle
      }
  }
  return low % (1e+9 + 7 )
};

/* 
看了讨论才get到思路的，反正打死我也想不出这种解法。核心思想是二分法搜索，计算出整数是第几个 magical number，然后缩小搜索范围。算法关键在于计算一个数是第几个 magical number。
这里使用了排除法：magical number = 能被 A 整除的数 + 能被 B 整数的数 - 能被 A 和 B 同时整除的数，因为最后一项被计算了两遍。
这里做了一点改进，减小了搜索的上届。
*/

