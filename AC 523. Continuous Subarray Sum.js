/* 
自己想出来算法 O(N^2)，以下是讨论的算法，略作修改。
思路：设 sum(i) 为前 i 项和
sum(i) % k === sum(j) % k
(sum(j) - sum(i)) % k === 0
注意排除一些特殊情形
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  var sum = 0, lastSum = 0, map = {}

  for (var i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (k !== 0) sum %= k
    if (map[sum]) return true
    map[lastSum] = true
    lastSum = sum
  }

  return false
};