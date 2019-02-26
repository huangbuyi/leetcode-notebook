/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  var gasSum = 0, costSum = 0, surplus = 0, startIndex = 0

  gas.map(function (ga, i) {
    gasSum += ga
    costSum += cost[i]
    surplus += ga - cost[i]
    if (gasSum < costSum) {
      gasSum = 0
      costSum = 0
      startIndex = i + 1
    }
  })

  return startIndex >= gas.length || surplus < 0 ? -1 : startIndex
};

/* 
  此类型涉及贪心算法？，思路在于避免重复计算。这里实际只需要三个变量，tank为部分容量，surplus为总剩余，startIndex表示开始站，
  tank累加gas余量，当tank小于零，清零重新计算，并将开始站设为下一站。最后根据surplus来确定是否能到达终点。
  上述代码使用gasSum和costSum，相减即为tank。
*/

var assert = require('assert')

assert.equal(canCompleteCircuit([1, 1, 6, 1, 1], [2, 2, 2, 2, 2]), 2)
assert.equal(canCompleteCircuit([1, 1, 6, 1, 1], [2, 3, 2, 2, 2]), -1)
assert.equal(canCompleteCircuit([2], [1]), 0)
assert.equal(canCompleteCircuit([2], [3]), -1)
assert.equal(canCompleteCircuit([], []), -1)