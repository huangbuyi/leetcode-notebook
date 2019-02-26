/* 
思路：排除 nums.length = 0 情况，Wiggle 默认长度为 1。连续增加或连续减少(包含相等)的数，只能算一个 wiggle 长度:
详细地说，如果连续数字 nums[i] <= nums[i + 1] <= .... <= nums[j] 或 nums[i] >= nums[i + 1] >= ... >= nums[j]，i~j算一个 wiggle 长度
因此，只需统计从 >= 变成 <，和从 <= 变成 > 的次数。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  var res = Math.min(1, nums.length), last
  for (var i = 1; i < nums.length; i++) {
    var t = nums[i] - nums[i - 1]
    if (t !== 0) {
      if (last === undefined || t * last < 0) res++
      last = t
    }
  }
  return res
};