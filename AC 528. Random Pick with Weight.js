/*
我的思路是根据权重设置一个长度，如
w = [1,2,3]，对应区间[0,1],[1,3],[3,6](或[1,3,6])。总权重6，随机0~6的值，找出值所在区间。
*/

/**
 * @param {number[]} w
 */
var Solution = function (w) {
  for (var i = 1; i < w.length; i++) {
    w[i] += w[i - 1]
  }
  this.w = w
};

/**
* @return {number}
*/
Solution.prototype.pickIndex = function () {
  var w = this.w
  var rd = Math.random() * w[w.length - 1]
  var i = 0
  var j = w.length - 1

  while (i < j) {
    var m = Math.floor((i + j) / 2)
    if (rd > w[m]) {
      i = m + 1
    } else {
      j = m
    }
  }

  return i
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = Object.create(Solution).createNew(w)
* var param_1 = obj.pickIndex()
*/