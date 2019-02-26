/**
 * @param {number[]} nums
 * @return {number}
 */

// 考虑负数情况，取三个最大值，两个最小值，最大值是必取的
var maximumProduct = function (nums) {
  var maxs = [],
    mins = [],
    i
  maxs[0] = maxs[1] = maxs[2] = -Infinity
  mins[0] = mins[1] = Infinity


  for (i = 0; i < nums.length; i++) {
    if (nums[i] > maxs[2]) {
      maxs[2] = nums[i]
      maxs.sort(desc)
    }

    if (nums[i] < mins[1]) {
      mins[1] = nums[i]
      mins.sort(aesc)
    }
  }

  return maxs[0] * Math.max(maxs[1] * maxs[2], mins[0] * mins[1])
};

var desc = function (a, b) {
  return b - a
}

var aesc = function (a, b) {
  return a - b
}