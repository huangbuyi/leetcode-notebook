/* 
以下算法，将所有前缀保存至 hashMap，空间复杂度O(n)，时间复杂度O(1)
另一种是仅保存 key 值至 hashMap，搜索的时候遍历整个 hashmap，时间复杂度O(n)，尽管时间复杂度比不上上一种算法，但能节省空间。
还有一种最节省空间的算法是使用字典树(Trid)，在 Trid Noda 额外保存 val 数据，计算 sum 时遍历子树累加即可。
*/

/**
 * Initialize your data structure here.
 */
var MapSum = function () {
  this.hashMap = {}
  this.words = {}
};

/** 
* @param {string} key 
* @param {number} val
* @return {void}
*/
MapSum.prototype.insert = function (key, val) {
  var hashMap = this.hashMap
  var words = this.words
  if (words[key]) {
    val = val - words[key]
  } else {
    words[key] = val
  }
  for (var i = 0; i <= key.length; i++) {
    var prefix = key.substring(0, i)
    if (!hashMap[prefix]) {
      hashMap[prefix] = 0
    }
    hashMap[prefix] += val
  }
};

/** 
* @param {string} prefix
* @return {number}
*/
MapSum.prototype.sum = function (prefix) {
  return this.hashMap[prefix] || 0
};

/**
* Your MapSum object will be instantiated and called as such:
* var obj = Object.create(MapSum).createNew()
* obj.insert(key,val)
* var param_2 = obj.sum(prefix)
*/