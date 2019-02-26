/*
最开始的想法是用平均值，后面随便就举出了个反例：99个1和1个51。
后面猜测是用中值，想了一会才想出证明方法：
先假设移动到值 x，总共要移动 s 次，比 x 小的值有 a 个，总共有 n 个元素。
如果 x = x + 1，
于是 s = s + a - (n - a) 也就是 s = s + 2a - n
2a < n 时，s 总是减少的，2a > n 时，s 总是的增加的
因此，a = n / 2 时，也就是 a 等于中位数时，s 最小，
另外，偶数项，中位数上下取整 s 值都是相同的。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  var nums = nums.sort(function (a, b) { return a - b })
  var median = nums[Math.floor(nums.length / 2)]
  var count = 0

  for (var i = 0; i < nums.length; i++) {
    count += Math.abs(nums[i] - median)
  }

  return count
};


