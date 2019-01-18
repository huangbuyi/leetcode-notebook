/*
我的思路是，随机一个扣去黑名单长度的值，然后加上黑名单中小于随机值的个数。
讨论有个更简单的方法，同样随机一个扣去黑名单长度的值，随机值范围内的黑名单用 HashMap 映射到范围外的有效值。
*/

/**
 * @param {number} N
 * @param {number[]} blacklist
 */
var Solution = function(N, blacklist) {
  this.N = N
  this.blacklist = blacklist.sort(function (a, b) {
      return a - b
  })
};

/**
* @return {number}
*/
Solution.prototype.pick = function() {
  var blacklist = this.blacklist
  var rd = Math.floor(Math.random() * (this.N - blacklist.length))
  
  for (var i = 0; i < blacklist.length; i++) {
      if (blacklist[i] <= rd) rd++
  }
  
  return rd
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = Object.create(Solution).createNew(N, blacklist)
* var param_1 = obj.pick()
*/