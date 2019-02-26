/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  var words = []
  var format = function (num) {
    var singles = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
      decades = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'],
      tens = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'],
      words = []

    if (num >= 100) {
      words.push(singles[num / 100 >> 0], 'Hundred')
      num = num - (num / 100 >> 0) * 100
    }
    if (num >= 20) {
      words.push(tens[(num / 10 >> 0) - 2])
      num = num - (num / 10 >> 0) * 10
    }
    if (num >= 10) {
      words.push(decades[num - 10])
      num = 0
    }
    if (num > 0) {
      words.push(singles[num])
    }
    return words
  }

  if (num >= 1000000000) {
    words = words.concat(format(num / 1000000000 >> 0))
    words.push('Billion')
    num = num - (num / 1000000000 >> 0) * 1000000000
  }

  if (num >= 1000000) {
    words = words.concat(format(num / 1000000 >> 0))
    words.push('Million')
    num = num - (num / 1000000 >> 0) * 1000000
  }

  if (num >= 1000) {
    words = words.concat(format(num / 1000 >> 0))
    words.push('Thousand')
    num = num - (num / 1000 >> 0) * 1000
  }

  if (num > 0) {
    words = words.concat(format(num))
  }

  return words.join(' ') || 'Zero'
};

/* 
英文的数是三位三位的，X Billion X Million X Thousand X，所以，先写一个转换三位数的函数，以重复使用。
然后，从高位依次转化到低位。我用了数组来保存数的字符，就不用考虑哪里要加空格了。
看其它人的，解题思路类似。以上代码还可以简化。
*/

var assert = require('assert')
assert.equal(numberToWords(0), "Zero")
assert.equal(numberToWords(9), "Nine")
assert.equal(numberToWords(10), "Ten")
assert.equal(numberToWords(100), "One Hundred")
assert.equal(numberToWords(123), "One Hundred Twenty Three")
assert.equal(numberToWords(1000), "One Thousand")
assert.equal(numberToWords(1000000), "One Million")
assert.equal(numberToWords(1000000000), "One Billion")
assert.equal(numberToWords(12345), "Twelve Thousand Three Hundred Forty Five")
assert.equal(numberToWords(1234567), "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven")
assert.equal(numberToWords(1234567890), "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety")
assert.equal(numberToWords(Math.pow(2, 31) - 1), "Two Billion One Hundred Forty Seven Million Four Hundred Eighty Three Thousand Six Hundred Forty Seven")