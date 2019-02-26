/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  var len = nums.length,
    res = [],
    t

  var subset = function (n, nums, amount) {
    if (n === amount) {
      res.push(nums.slice(0, amount))
      return
    }

    // console.log(nums)
    for (let i = n; i < len; i++) {
      if (i === n || nums[n] !== nums[i]) {
        t = nums[i]
        nums[i] = nums[n]
        nums[n] = t
        subset(n + 1, nums.slice(0), amount)
      } else {
        return
      }
    }
  }

  for (let i = 1; i <= len; i++) {
    subset(0, nums, i)
  }

  console.log(res)
  return res
};
subsetsWithDup([1, 2, 2])