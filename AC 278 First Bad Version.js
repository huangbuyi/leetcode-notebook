/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      var lh = 0, rh = n, md
      while (lh < rh) {
          md = Math.floor((lh + rh) / 2)
          if (isBadVersion(md)) {
              rh = md
          } else {
              lh = md + 1
          }
      }
      return lh
  };
};

/* 
二分法，复杂度 O(lgN)
*/

var findBadVersion = solution(function (n) {
  return n >= 10
})
var assert = require('assert')
assert.equal(findBadVersion(20), 10)
assert.equal(findBadVersion(10), 10)
assert.equal(findBadVersion(1000), 10)