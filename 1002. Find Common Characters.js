/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  var count = {}, res = ''
  for (var i = 0; i < A[0].length; i++) {
    var c = A[0][i]
    count[c] = count[c] ? count[c] + 1 : 1
  }
  
  for (var i = 1; i < A.length; i++) {
    var tCount = {}
    for (var j = 0; j < A[i].length; j++) {
      var c = A[i][j]
      tCount[c] = tCount[c] ? tCount[c] + 1 : 1
    }
    for (var c in count) {
      count[c] = Math.min(count[c], tCount[c] || 0)
    }
  }
  
  for (var c in count) {
    res += c.repeat(count[c])
  }
  
  return res.split('')
};