var assert = require('assert')
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix || !matrix[0]) return []
    var m = matrix.length,
        n = matrix[0].length
    
    var _sprial = function (r) {
        var top = [], right = [], bottom = [], left = [], i

        if (2 * r >= m || 2 * r >= n) {
            return []
        }
        
        for (i = r; i < n - 1 - r; i++) {
            top.push(matrix[r][i])
            bottom.unshift(matrix[m - 1 - r][1 + i])
        }
        
        for (i = r; i < m - 1 - r; i++) {
            right.push(matrix[i][n - 1 - r])
            left.unshift(matrix[1 + i][r])
        }
        
        if (2 * r === m - 1) {
            return top.concat(matrix[r][n - 1 - r])
        }
        
        if (2 * r === n - 1) {
            return right.concat(matrix[m - 1 - r][r])
        }
        

        
        return Array().concat(top, right, bottom, left, _sprial(r + 1))
    }
    return _sprial(0)
};

assert.deepEqual(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]),[1,2,3,6,9,8,7,4,5])
assert.deepEqual(spiralOrder([[1,2,3,4],[4,5,6,7],[7,8,9,10]]),[1,2,3,4,7,10,9,8,7,4,5,6])
assert.deepEqual(spiralOrder([[1,2,3,4],[4,5,6,7],[7,8,9,10],[7,8,9,10]]),[1,2,3,4,7,10,10,9,8,7,7,4,5,6,9,8])
assert.deepEqual(spiralOrder([[1,2],[4,5],[7,8],[9,8],[7,8]]),[1,2,5,8,8,8,7,9,7,4])
assert.deepEqual(spiralOrder([[1],[2],[3],[4],[5]]),[1,2,3,4,5])
assert.deepEqual(spiralOrder([[1,2,3,4,5]]),[1,2,3,4,5])
assert.deepEqual(spiralOrder([[]]),[])
assert.deepEqual(spiralOrder([]),[])
assert.deepEqual(spiralOrder([[1]]),[1])
assert.deepEqual(spiralOrder([[1,2],[3,4]]),[1,2,4,3])
assert.deepEqual(spiralOrder([[2,5],[8,4],[0,-1]]),[2,5,4,-1,0,8])
assert.deepEqual(spiralOrder([[1,2,3,4,5,6,7,8,9,10]]),[1,2,3,4,5,6,7,8,9,10])