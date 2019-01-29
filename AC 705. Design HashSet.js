/* 
这是有争议的一题，有人认为这题应该是为了让人们理解 hashSet 内在原理，使用 Binary Array 不符合本题思想。（使用内置 hashSet 就不用说了）。
的确使用 Binary Array 连 hash 过程都不用，确实对理解这一数据结构没什么帮助。但我更同意另一个观念，这是题意设计的问题。
如果希望用户不使用 Binary Array，或其它类似方法。就不应该把整数范围设置太小，而是更大一些，甚至可以报内存错误，或者把整数换成字符串。
况且这题难度是 easy，用户或许并不打算花太多精力在 Design 上。
*/

/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.list = new Array(1000001).fill(false)
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function(key) {
  this.list[key] = true
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.remove = function(key) {
  this.list[key] = false
};

/**
* Returns true if this set contains the specified element 
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function(key) {
  return this.list[key]
};

/** 
* Your MyHashSet object will be instantiated and called as such:
* var obj = Object.create(MyHashSet).createNew()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/