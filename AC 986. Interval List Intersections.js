/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} A
 * @param {Interval[]} B
 * @return {Interval[]}
 */
var intervalIntersection = function(A, B) {
  var res = [], i = 0, j = 0
  
  while (i < A.length && j < B.length) {
      var a = A[i], b = B[j]
      if (a.end >= b.start && b.end >= a.start) res.push(new Interval(Math.max(a.start, b.start), Math.min(a.end, b.end)))
      if (a.end < b.end) i++
      else j++
  }
  
  return res
};