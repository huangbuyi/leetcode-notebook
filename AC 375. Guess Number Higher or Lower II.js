/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
  var hash = new Array(n).fill(undefined).map(function () {
    return new Array(n)
  })

  var dp = function (s, e) {
    if (s === e) {
      return 0
    }
    if (s + 1 === e) {
      return s
    }
    if (s + 2 === e) {
      return s + 1
    }
    if (hash[s][e]) {
      return hash[s][e]
    }

    var min = Infinity
    for (var i = s + 1; i < e; i++) {
      min = Math.min(min, i + Math.max(dp(s, i - 1), dp(i + 1, e)))
    }
    hash[s][e] = min
    return min
  }
  return dp(1, n)
};

var assert = require('assert')
assert.equal(getMoneyAmount(1), 0)
assert.equal(getMoneyAmount(2), 1)
assert.equal(getMoneyAmount(3), 2)
assert.equal(getMoneyAmount(4), 4)
assert.equal(getMoneyAmount(5), 6)
assert.equal(getMoneyAmount(10), 16)
assert.equal(getMoneyAmount(20), 49)
assert.equal(getMoneyAmount(100), 400)

/*
F(start, end) = Min(...,i + Max(F(start, i - 1), F(i + 1, end)),...) i:start + 1 -> end - 1
边界条件
1. 有一个数：3 直接选中，花销0
2. 有两个数：3,4 最佳策略选小，花销3
3. 有三个数：3,4,5 最佳策略选中间，花销4
*/