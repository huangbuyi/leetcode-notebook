/* 
题意：给定一些无重叠的矩形，矩形与横、纵坐标平行，随机返回矩形内和矩形边上的整数点坐标，要求概率均匀分布。
思路分两步:
1. 根据权重随机其中一个矩形。以矩形内整数点的个数作为权重，为了提升速度，下面算法使用了累计权重和二分法搜索。
2. 随机矩形内的一个坐标。
*/

/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
  var sum = 0
  this.rects = new Array(rects.length)
  for (var i = 0; i < rects.length; i++) {
    var r = rects[i]
    sum += (r[2] - r[0] + 1) * (r[3] - r[1] + 1)
    this.rects[i] = [sum, r]
  }
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    var random = Math.random() * this.rects[this.rects.length - 1][0]
    var r = this.rects[binarySearch(random, this.rects)][1]
    var x = r[0] + Math.floor(Math.random() * (r[2] - r[0] + 1))
    var y = r[1] + Math.floor(Math.random() * (r[3] - r[1] + 1))
    return [x, y]
};

var binarySearch = function(val, arr) {
  var i = 0, j = arr.length - 1
  while (i <= j) {
    var m = Math.floor((i + j) / 2)
    if (val < arr[m][0]) j = m - 1
    else i = m + 1
  }
  return i
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(rects)
 * var param_1 = obj.pick()
 */