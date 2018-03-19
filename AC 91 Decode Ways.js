/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  var map = []
  map[s.length] = 1
  map[s.length - 1] = s[s.length - 1] === '0' ? 0 : 1
  for (i = s.length - 2; i >= 0; i--) {
      if (s[i] === '0') {
          map[i] = 0
      } else if (s[i] === '1' || (s[i] === '2' && s[i + 1] <= 6)) {
          map[i] = map[i + 1] + map[i + 2]
      } else {
          map[i] = map[i + 1]
      }
  }

  return s.length === 0 ? 0 : map[0]
}

var assert = require('assert')
assert.equal(numDecodings('110'), 1)
assert.equal(numDecodings('1010'), 1)
assert.equal(numDecodings('12'), 2)
assert.equal(numDecodings('121'), 3)
assert.equal(numDecodings('11111'), 8)
assert.equal(numDecodings('1111111111'), 89)
assert.equal(numDecodings('789789'), 1)
assert.equal(numDecodings('27'), 1)
assert.equal(numDecodings('26'), 2)
assert.equal(numDecodings(''), 0)
assert.equal(numDecodings('1'), 1)
assert.equal(numDecodings('10'), 1)
assert.equal(numDecodings('00000'), 0)
assert.equal(numDecodings('0'), 0)
assert.equal(numDecodings('111100111'), 0)
assert.equal(numDecodings('111111100'), 0)
assert.equal(numDecodings('111111110'), 21)
