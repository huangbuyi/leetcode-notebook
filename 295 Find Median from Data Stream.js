/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.sorted = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    var sorted = this.sorted, left = 0, right = sorted.length - 1, middle = -1
    while (left <= right) {
      middle = Math.floor((left + right) / 2)
      if (num >= sorted[middle] && num <= sorted[middle + 1]) {
        break
      }
      
      if (num < sorted[middle]) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }
    console.log(sorted)
    sorted.splice(middle + 1, 0, num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  var sorted = this.sorted, halfLen = sorted.length / 2 >> 0
  return sorted.length % 2 === 0 ? (sorted[halfLen] + sorted[halfLen - 1]) / 2 : sorted[halfLen]
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = Object.create(MedianFinder).createNew()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

var assert = require('assert')
var finder = new MedianFinder()
finder.addNum(1)
assert.equal(finder.findMedian(), 1)
finder.addNum(2)
assert.equal(finder.findMedian(), 1.5)
finder.addNum(3)
assert.equal(finder.findMedian(), 2)
finder.addNum(10)
finder.addNum(9)
finder.addNum(6)
finder.addNum(7)
finder.addNum(8)
assert.equal(finder.findMedian(), 6.5)
finder.addNum(4)
assert.equal(finder.findMedian(), 6)

finder.sorted = []
finder.addNum(0)
finder.addNum(0)
assert.equal(finder.findMedian(), 0)

finder.sorted = []
finder.addNum(0)
finder.addNum(2)
finder.addNum(1)
finder.addNum(1)
finder.addNum(1)
assert.equal(finder.findMedian(), 1)


finder.sorted = []
finder.addNum(-1)
finder.addNum(-2)
finder.addNum(-3)
finder.addNum(-4)
finder.addNum(-5)
assert.equal(finder.findMedian(), -3)

