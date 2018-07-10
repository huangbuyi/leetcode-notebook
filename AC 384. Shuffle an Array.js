/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.input = nums
  this.output = this.input.slice(0)
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  this.output = this.input.slice(0)
  return this.output
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  var output = this.output
  for (var i = output.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var t = output[i]
    output[i] = output[j]
    output[j] = t
  }
  return output
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */


/*
Fisher–Yates shuffle algorithm:
https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
*/