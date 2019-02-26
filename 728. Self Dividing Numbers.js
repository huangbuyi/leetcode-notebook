/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  var res = []
  for (var i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      res.push(i)
    }
  }
  return res
};

var isSelfDividing = function (num) {
  var n = num
  while (n >= 1) {
    var div = n % 10
    if (div === 0 || num % div !== 0) return false
    n = Math.floor(n / 10)
  }
  return true
}