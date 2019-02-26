/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  var boxs = new Array(nums.length).fill(undefined).map(function () {
    return [Infinity, -Infinity]
  }),
    min = nums[0],
    max = nums[0],
    maxGap = 0,
    gap = 0,
    lastMax

  // 找出最小值和最大值
  for (var i = 1; i < nums.length; i++) {
    min = Math.min(min, nums[i])
    max = Math.max(max, nums[i])
  }

  if (max === min) {
    return 0
  }

  // 计算区间宽度
  gap = (max - min) / (nums.length - 1)

  // 计算每个区间的最小值和最大值
  for (var i = 0; i < nums.length; i++) {
    var box = boxs[Math.floor((nums[i] - min) / gap)]
    box[0] = Math.min(box[0], nums[i])
    box[1] = Math.max(box[1], nums[i])
  }

  // 找出 maxGap
  for (var i = 0; i < boxs.length; i++) {
    if (boxs[i][0] < Infinity) {
      maxGap = lastMax === undefined ? boxs[i][1] - boxs[i][0] : Math.max(boxs[i][0] - lastMax, maxGap)
      lastMax = boxs[i][1]
    }
  }

  return maxGap
};

/*
从最小值 min 到最大值 max 之间划分出 n - 1 个等宽的区间，区间长度 gap，将除了 min 和 max 之外的 n - 2 个值放入区间中，至少有一个以上的区间是空的，maxGap >= gap。
区间内的数的差值都小于区间，所以只需要考虑区间里最小值和最大值与前后区间之间的差。
*/