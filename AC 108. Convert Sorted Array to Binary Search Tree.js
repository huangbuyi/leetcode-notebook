/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  var build = function (lh, rh) {
      var mh = Math.floor((lh + rh) / 2)
      var node = {}
      node.val = nums[mh]
      node.left = lh < mh ? build(lh, mh - 1) : null
      node.right = rh > mh ? build(mh + 1, rh) : null
      return node
  }
  return nums.length > 0 ? build(0, nums.length - 1) : null
};