/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  var hash = {}, max = 0
  nums.sort(function (a, b) {
    return a - b
  })

  for (var i = 0; i < nums.length; i++) {
    var num = nums[i]
    hash[num] = 1
    for (var j = 0; hash[nums[j]] <= num / 2; j++) {
      hash[num] = Max(hash[num], hash[nums[j]] + 1)
    }
    max = Math.max(hash[nums], max)
  }
};

largestDivisibleSubset([1, 2, 3])