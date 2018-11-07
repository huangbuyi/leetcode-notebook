/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  // lefts 保存从小到大的高度和开始位置，存储在最后是最大高度
  var lefts = [], max = 0, area, last
  // 最后一次循环计算面积
  heights.push(0)
  for (var i = 0; i < heights.length; i++) {
    last = [heights[i], i]
    while (lefts.length > 0 && heights[i] <= lefts[lefts.length - 1][0]) {
      last = lefts.pop()
      area = last[0] * (i - last[1])
      max = Math.max(max, area)
    }
    last[0] = heights[i]
    lefts.push(last)
  }
  return max
};

/* 
lefts 保存从小到大的高度和开始位置，存储在最后是最大高度，
当后面柱子高度小于前面柱子，柱子高度记为较小高度，起始位置为前柱子起始位置。
*/