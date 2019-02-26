/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  var res = '', i = 0, min

  while (i + k < num.length) {
    var j = i
    min = i
    for (; j <= i + k; j++) {
      if (num[j] < num[min]) {
        min = j
      }
    }

    if (res !== '' || num[min] !== '0') {
      res += num[min]
    }
    k -= min - i
    i = min + 1
  }

  return res || '0'
};

/* 
我的思路：从 i ~ i + k 位找出最小值，移除最小值之前的数字，k 减去废弃的位数
讨论中有更简单的思路：遍历数组，用队列保存数字，如果数字比队列末的数字小，就出列直到条件不成立或达到可移除的位数。
本质是保证在可以出个数内，保持升序排列。要注意移除前置零。
*/



var assert = require('assert')
// assert.equal(removeKdigits('12345', 2), '123')
assert.equal(removeKdigits('15432', 2), '132')
assert.equal(removeKdigits('100', 1), '0')
assert.equal(removeKdigits('10203040', 3), '40')
assert.equal(removeKdigits('10000', 3), '0')
assert.equal(removeKdigits('1432219', 3), '1219')
assert.equal(removeKdigits('10200', 1), '200')
assert.equal(removeKdigits('10', 2), '0')
assert.equal(removeKdigits('123', 0), '123')
assert.equal(removeKdigits('123', 0), '123')
assert.equal(removeKdigits('465321656584683164564565643516549886978979843213298700540465404650350400302', 30), '111486978979843213298700540465404650350400302')