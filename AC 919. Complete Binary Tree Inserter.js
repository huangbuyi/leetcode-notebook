/* 
insert 时间复杂度 O(logN)，Init 时间复杂度 O(N)，空间复杂度 O(1)。
思路：假设插入第 8 个数，之前的数已经填满了三层，
      1
    /  \
   2    3
  / \  / \
 4  5  6  7
第 8 个数是第四层的第一个数，用指数 0 表示，第 15 个数是最后一个数，用指数 7 表示
指数  二进制  树中路径(从根节点开始)
0    000    left-left-left
1    001    left-left-right
2    010    left-right-left
...
7    111    right-right-right
可以看出对应关系
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var CBTInserter = function(root) {
  this.length = 0
  this.init(root)
  this.root = root
};

CBTInserter.prototype.init = function(node) {
  if (!node) return
  this.length++
  this.init(node.left)
  this.init(node.right)
}


CBTInserter.prototype.reverseBits = function(n) {
  var res = 0
  while (n > 0) {
      res <<= 1
      res += n & 1
      n >>= 1
  }
  return res
};

/** 
* @param {number} v
* @return {number}
*/
CBTInserter.prototype.insert = function(v) {
  var length = ++this.length
  var root = this.root
  var node = new TreeNode(v)
  if (!root) return this.root = node
  var bits = this.reverseBits(length)
  var curr = this.root
  while (curr.left && curr.right) {
      bits >>= 1
      curr = (bits & 1) ? curr.right : curr.left
  }
  if (!curr.left) curr.left = node
  else curr.right = node
  return curr.val
};

/**
* @return {TreeNode}
*/
CBTInserter.prototype.get_root = function() {
  return this.root
};

/** 
* Your CBTInserter object will be instantiated and called as such:
* var obj = Object.create(CBTInserter).createNew(root)
* var param_1 = obj.insert(v)
* var param_2 = obj.get_root()
*/