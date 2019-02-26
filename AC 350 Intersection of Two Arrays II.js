/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  var hash1 = {}, res = []
  for (var i = 0; i < nums1.length; i++) {
    hash1[nums1[i]] = 1 + (hash1[nums1[i]] || 0)
  }
  for (var i = 0; i < nums2.length; i++) {
    if (hash1[nums2[i]]) {
      res.push(nums2[i])
      hash1[nums2[i]]--
    }
  }
  return res
};