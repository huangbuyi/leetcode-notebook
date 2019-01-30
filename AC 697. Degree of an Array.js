/* 
最小长度子数组必定以频率最高元素作为起点和末尾，所以除了频率最大值，还要知道元素的起始位置，如果存在多个最大频元素，取最小长度。
这样，就只需一次遍历即可。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  var max = 0, map = {}, smallestLength = nums.length
  
  for (var i = 0; i < nums.length; i++) {
      var num = nums[i]
      if (!map[num]) {
          map[num] = [0, i]
      }
      
      if (++map[num][0] > max) {
          max = map[num][0]
          smallestLength = i - map[num][1]
      } else if (map[num][0] === max) {
          smallestLength = Math.min(i - map[num][1], smallestLength)
      }
  }
  
  return smallestLength + 1
};