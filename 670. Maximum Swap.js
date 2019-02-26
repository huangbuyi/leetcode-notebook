/* 
思路：从第一位开始，搜索它之后的最大值，以及最大值对应的最小位，如果最大值大于第一位数字，交换两个值。
否则，从第二位开始，继续以上搜索。
*/

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  var nums = num.toString().split('')

  for (var i = 0; i < nums.length; i++) {
    var max = 0, maxPos
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] >= max) {
        max = nums[j]
        maxPos = j
      }
    }
    if (nums[i] < max) {
      var t = nums[i]
      nums[i] = max
      nums[maxPos] = t
      break
    }
  }

  return Number(nums.join(''))
};