/* 
有 a 只兔兔说“有 b 只其它兔兔和它同色”
当 a <= b + 1，共有 b + 1 只兔兔。
当 a >= b + 1，有 1 + a / (b + 1) 种颜色，每种都有 b + 1 只兔兔。
*/

/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  var count = {}, res = 0
  for (var i = 0; i < answers.length; i++) {
    var ans = answers[i]
    if (!count[ans]) {
      count[ans] = 0
      res += ans + 1
    }
    count[ans] = ++count[ans] % (ans + 1)
  }
  return res
};