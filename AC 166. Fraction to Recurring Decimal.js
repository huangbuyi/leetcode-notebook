/* 
思路：利用辗转相除法，使用 HashMap 保存被除的数，如果被除的数重复出现，说明小数点开始循环
要注意负数和除数为 0 的情况
*/

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  if (denominator === 0) return "NaN"
  var sign = numerator / denominator < 0 ? '-' : ''
  numerator = Math.abs(numerator)
  denominator = Math.abs(denominator)
  var num = numerator % denominator
  var map = {}
  var res = Math.floor(numerator / denominator).toString()
  if (num !== 0) res += '.'

  while (!map[num] && num !== 0) {
    map[num] = res.length
    num = num * 10
    res += Math.floor(num / denominator)
    if (num >= denominator) num %= denominator
  }

  if (num !== 0) res = res.substring(0, map[num]) + '(' + res.substring(map[num]) + ')'
  return sign + res
};

/*
17
23

0.73913043478260869565217

170
90
210
30
70
10
100
80
110
180
190
60
140
200
160
220
130
150
120
50
40
170
*/
