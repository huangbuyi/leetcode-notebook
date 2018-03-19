var assert = require('assert')
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var index = [], i
    for (i = 0; i < heights.length; i++) {

    	while (index.length > 0 && height[index[index.length - 1]] > height[i]) {
    		id = index.pop()
    		s = i - 
    	} )
    }

    return max
};

assert.equal(largestRectangleArea([2,1,5,6,2,3]), 10)
assert.equal(largestRectangleArea([1,1,5,5,1,1]), 10)
assert.equal(largestRectangleArea([1,2,3,4,5]), 9)
assert.equal(largestRectangleArea([5,4,3,2,1]), 9)
assert.equal(largestRectangleArea([1,1,3,1,1]), 5)
assert.equal(largestRectangleArea([1,1,1,1,1]), 5)
assert.equal(largestRectangleArea([1,1,1,0,1]), 3)
assert.equal(largestRectangleArea([0,1,1,0,1]), 2)
assert.equal(largestRectangleArea([1,2,3,2,1]), 6)
assert.equal(largestRectangleArea([3,2,1,2,3]), 5)

