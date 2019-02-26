/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  var sum = 0
  for (var i = 0; i < 32; i++) {
    var bitCount = 0
    for (var j = 0; j < nums.length; j++) {
      bitCount += nums[j] & 1
      nums[j] >>= 1
    }
    sum += bitCount * (nums.length - bitCount)
  }
  return sum
};