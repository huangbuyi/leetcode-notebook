/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var hash1 = {}, hash2 = {}, res = []
  for (var i = 0; i < nums1.length; i++) {
    hash1[nums1[i]] = true
  }
  for (var i = 0; i < nums2.length; i++) {
    if (hash1[nums2[i]]) {
      hash2[nums2[i]] = true
    }
  }
  for (var key in hash2) {
    res.push(hash2[key])
  }
  return res
};

