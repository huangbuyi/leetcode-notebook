/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  var hash = {}
  for (var i = 0; i < nums.length; i++) {
    var n = nums[i]
    if (!hash[n]) {
      hash[n] = []
    }
    hash[n].push(i)
  }
  this.hash = hash
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  var indexs = this.hash[target]
  var random = Math.floor(indexs.length * Math.random())
  return indexs[random]
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.pick(target)
 */