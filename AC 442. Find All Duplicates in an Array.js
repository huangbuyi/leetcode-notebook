/*
我的想法是，把值和数组的 index 对应起来，因为值得范围是1~N，所以把 k 保存到 nums[k - 1]。
最后 nums[k - 1] !== k 的就是重复的值。
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    var j = nums[i] - 1
    while (nums[i] !== i + 1 && nums[i] !== nums[j]) {
      nums[i] = nums[j]
      nums[j] = j + 1
      j = nums[i] - 1
    }
  }

  return nums.filter(function (item, index) {
    return item !== index + 1
  })
};