/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
  var i = 0, j = 0
  while (i < data.length) {
    var c = data[i]
    if (c < 128) {

    } else if (c < 192) {
      if (--j < 0) {
        return false
      }
    } else if (j === 0 && c < 224) {
      j = 1
    } else if (j === 0 && c < 240) {
      j = 2
    } else if (j === 0 && c < 248) {
      j = 3
    } else {
      return false
    }
    i++
  }
  return j === 0
};

var assert = require('assert')
assert.equal(validUtf8([197, 130, 1]), true)
assert.equal(validUtf8([235, 140, 4]), false)
assert.equal(validUtf8([1]), true)
assert.equal(validUtf8([128]), false)
assert.equal(validUtf8([255]), false)
assert.equal(validUtf8([129]), false)
assert.equal(validUtf8([129, 128]), false)
assert.equal(validUtf8([192, 128]), true)
assert.equal(validUtf8([224, 128, 128]), true)
assert.equal(validUtf8([240, 128, 128, 128]), true)
assert.equal(validUtf8([240, 128, 128, 128, 192, 128, 224, 128, 128]), true)
assert.equal(validUtf8([0]), true)
assert.equal(validUtf8([224, 128, 128, 128]), false)