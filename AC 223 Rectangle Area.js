/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
  var area = (C - A) * (D - B) + (G - E) * (H - F),
    x1, y1, x2, y2

  if (A >= G || B >= H || C <= E || D <= F) {
    return area
  }

  x1 = A > E ? A : E
  y1 = B > F ? B : F
  x2 = C < G ? C : G
  y2 = D < H ? D : H

  return area - (x2 - x1) * (y2 - y1)
};

/* 
刚开始的思路是考虑每种重叠的情况，很快发现重叠情况太多了（参照测试用例），有问题。
又想了想，其实只要对重叠区域的左下和右上坐标分别做判断即可。
*/

var assert = require('assert')
assert.equal(computeArea(0, 0, 0, 0, 0, 0, 0, 0), 0)
// 分离
assert.equal(computeArea(0, 0, 2, 2, 3, 3, 4, 4), 5)
// 相连
assert.equal(computeArea(0, 0, 2, 2, 2, 0, 4, 2), 8)
// 右重叠
assert.equal(computeArea(0, 0, 2, 2, 1, 0, 3, 2), 6)
// 上重叠
assert.equal(computeArea(0, 0, 2, 2, 0, 1, 2, 3), 6)
// 右上重叠
assert.equal(computeArea(0, 0, 2, 2, 1, 1, 3, 3), 7)
// 左下重叠
assert.equal(computeArea(0, 0, 2, 2, -1, -1, 1, 1), 7)
// 左上重叠
assert.equal(computeArea(0, 0, 2, 2, -1, 1, 1, 3), 7)
// 右下重叠
assert.equal(computeArea(0, 0, 2, 2, 1, -1, 3, 1), 7)
// 完全重叠
assert.equal(computeArea(-2, -2, 2, 2, -2, -2, 2, 2), 16)
// 完全包裹
assert.equal(computeArea(-2, -2, 2, 2, -1, -1, 1, 1), 16)
// 贯穿
assert.equal(computeArea(-2, -2, 2, 2, -3, -1, 3, 1), 20)