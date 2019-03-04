/* 
动态规划，因为存在循环，分为抢劫、不抢劫第一个房子两种情况。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  
  var pSum, ppSum, res
  pSum = ppSum = nums[0]
  for (var i = 2; i < nums.length - 1; i++) {
    var t = pSum
    pSum = Math.max(ppSum + nums[i], pSum)
    ppSum = t
  }
  res = pSum
  
  ppSum = 0
  pSum = nums[1]
  for (var i = 2; i < nums.length; i++) {
    var t = pSum
    pSum = Math.max(ppSum + nums[i], pSum)
    ppSum = t
  }
  return Math.max(pSum, res)
};