/* 
解题思路和系列第一题差不多，都是用 stack 保存降序序列，先查找元素之后的最大值。
不同的是，由于循环的存在，需要遍历第二遍，查找 stack 中剩余元素是否存循环的最大值。
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  var stack = [], res = new Array(nums.length).fill(-1)
  for (var i = 0; i < nums.length; i++) {
      while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
          res[stack.pop()] = nums[i]
      }
      stack.push(i)
  }
  
  for (var i = 0; i < nums.length && stack.length > 0; i++) {
      while (nums[i] > nums[stack[stack.length - 1]]) {
          res[stack.pop()] = nums[i]
      }
  }
  
  return res
};