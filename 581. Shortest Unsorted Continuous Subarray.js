/* 
下面算法虽然也是 O(N) 和 O(1)，但热门讨论的算法简单多了。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  var lh = 0, rh = nums.length - 1
  while (nums[lh] <= nums[lh + 1]) lh++
  while (nums[rh] >= nums[rh - 1]) rh--
  
  var i = lh + 1
  while (i <= rh) {
    if (nums[i] < nums[lh]) {
      lh--
    } else {
      i++
    }
  }
  
  i = rh - 1
  while (i >= 0) {
    if (nums[i] > nums[rh]) {
      rh++
    } else {
      i--
    }
  }
  
  return Math.max(rh - lh - 1, 0)
};