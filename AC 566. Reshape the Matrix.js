/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  if (nums.length * nums[0].length !== r * c) return nums
  var res = new Array(r).fill(undefined).map(function() {
      return new Array(c)
  })
  
  for (var i = 0; i < nums.length; i++) {
      for (var j = 0; j < nums[0].length; j++) {
          var ri = i * nums[0].length + j
          var rj = ri % c
          ri = Math.floor(ri / c)
          res[ri][rj] = nums[i][j]
      }
  }
  
  return res
};