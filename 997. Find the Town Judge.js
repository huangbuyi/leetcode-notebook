/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  if (N === 1 && trust.length === 0) return 1
  var trusts = {}, trusted = {}
  for (var i = 0; i < trust.length; i++) {
    var a = trust[i][0], b = trust[i][1]
    trusts[a] = true
    trusted[b] = trusted[b] ? trusted[b] + 1 : 1
  }
  for (var b in trusted) {
    if (trusted[b] === N - 1 && !trusts[b]) return b
  }
  return -1
};