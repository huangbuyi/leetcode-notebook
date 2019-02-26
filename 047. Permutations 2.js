/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 重复排序与非重复排列看起来相似，实际上有很大不同，是两种算法，试试对一个数字做逐步排列的测试
var permuteUnique = function (nums) {
  var len = nums.length,
    res = []

  // 要注意，这里通过传递的不是数组的引用
  var combine = function (n, nums) {
    if (n === len - 1) {
      res.push(nums)
      return
    }

    for (let i = n; i < len; i++) {
      if (i === n || nums[n] !== nums[i]) {
        var t = nums[n]
        nums[n] = nums[i]
        nums[i] = t
        // 以不重复排列不同，这里是n，而非i，且交换后不能交换回去 
        combine(n + 1, nums.slice(0))
      }
    }
  }


  combine(0, nums.sort())
  return res
};