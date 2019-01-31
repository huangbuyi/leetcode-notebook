/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  var sum = 0
  
  for (var i = 0; i < nums.length; i++) {
      sum += nums[i]
  }
  
  if (sum % k !== 0) return false
  
  var global = sum / k, stack = [], local = 0, i = 0, n = 0, used = []
  
  while (n < k - 1) {
      if (i >= nums.length) {
          if (stack.length === 0) return false
          i = stack.pop()
          used[i] = false
          if (local === 0) { 
              local = global
              n--
          }
          local -= nums[i]
      } else if (!used[i]) {
          local += nums[i]
          stack.push(i)
          used[i] = true
          if (local === global) {
              local = 0
              n++
              i = 0
          }
          if (local > global) {
              local -= nums[i]
              stack.pop()
              used[i] = false
          }
      }
      i++
  }
  
  return n === k - 1
};