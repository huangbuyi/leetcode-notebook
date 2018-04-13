/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  
};

var assert = require('assert')
assert.equal(calculate('1+1'), 2)
assert.equal(calculate(' 1 + 1 '), 2)
assert.equal(calculate(' 1 - 1 '), 0)
assert.equal(calculate(' 1 * 1 '), 1)
assert.equal(calculate(' 1 / 1 '), 1)
assert.equal(calculate(' 2-1 + 2 '), 3)
assert.equal(calculate('(1+(4+5+2)-3)+(6+8)'), 23)