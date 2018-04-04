/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
  return Math.floor(Math.sqrt(n))
};

/* 
多计算几项，很容易找到规律。
原理是，第 N 个数，被转换次数等于 N 可整除的数的个数。例如第 15 个灯泡，在 1、3、5、15 时被转换，经过 4（偶数次）次转化后就是 off。
N = t1 * tn | t2 * tn-1 | t3 * tn-2 .... | ti * ti+1，可见乘数都是两两成对的，除非 ti = ti+1，乘数个数就是偶数。
因为只有平方数的乘数是奇数，例如 16 乘数 1、2、4、8、16，所以只有平方数的灯泡状态为 On。只需求解平方数个数即可。
*/

var assert = require('assert')
assert.equal(bulbSwitch(0), 0)
assert.equal(bulbSwitch(1), 1)
assert.equal(bulbSwitch(2), 1)
assert.equal(bulbSwitch(3), 1)
assert.equal(bulbSwitch(4), 2)
assert.equal(bulbSwitch(5), 2)
assert.equal(bulbSwitch(6), 2)
assert.equal(bulbSwitch(7), 2)
assert.equal(bulbSwitch(8), 2)
assert.equal(bulbSwitch(9), 3)
assert.equal(bulbSwitch(15), 3)
assert.equal(bulbSwitch(16), 4)
assert.equal(bulbSwitch(100), 10)
assert.equal(bulbSwitch(9527), 97)