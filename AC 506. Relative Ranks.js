/* 
很简单的一题
*/
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  var map = {}, res = new Array(nums.length)
  for (var i = 0; i < nums.length; i++) {
      map[nums[i]] = i
  }
  nums.sort((a, b) => b - a)
  for (var i = 0; i < nums.length; i++) {
      if (i === 0) res[map[nums[i]]] = 'Gold Medal'
      else if (i === 1) res[map[nums[i]]] = 'Silver Medal'
      else if (i === 2) res[map[nums[i]]] = 'Bronze Medal'
      else res[map[nums[i]]] = (i + 1).toString()
  }
  return res
};