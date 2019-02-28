/* 
这题描述看的我头疼。简单来说，有一个数组 A：
[ 
  'cba',
  'daf',
  'ghi'
]
删掉一些列，使得每一列都是升序的。因此，只需要知道有几列是升序，不需要删除。
*/

/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  var res = 0
  for (var i = 0; i < A[0].length; i++) {
    for (var j = 1; j < A.length; j++) {
      if (A[j][i] < A[j - 1][i]) {
        res++
        break
      }
    }
  }
  return res
};