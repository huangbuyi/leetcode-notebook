/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  var cow = 0, bull = 0, count = new Array(10).fill(0)
  for (var i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bull++
    }
    count[secret[i]]++
  }

  for (var i = 0; i < guess.length; i++) {
    if (count[guess[i]] > 0) {
      cow++
      count[guess[i]]--
    }
  }

  return `${bull}A${cow - bull}B`
};

/* 
需要一个数组计数数字出现的次数，才能确定 cow 值
*/

var assert = require('assert')
assert.equal(getHint('1807', '7810'), '1A3B')
assert.equal(getHint('1111', '0000'), '0A0B')
assert.equal(getHint('1111', '1100'), '2A0B')
assert.equal(getHint('1111', '1111'), '4A0B')
assert.equal(getHint('1234', '2341'), '0A4B')