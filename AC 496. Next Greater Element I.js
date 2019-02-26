/* 
想法和高赞一致。通过一个 stack 来避免重复计算，假设有一个序列：
5 4 3 2 1 6
前五个元素的值都是6，因此，可以用一个 stack 来保存降序序列。遇到比尾数大的值，出栈直到序列中的值都大于它。
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  var stack = [], map = {}, res = []
  for (var i = 0; i < nums2.length; i++) {
    while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
      var key = stack.pop()
      map[key] = nums2[i]
    }
    stack.push(nums2[i])
  }

  return nums1.map(function (i) {
    return map[i] ? map[i] : -1
  })
};