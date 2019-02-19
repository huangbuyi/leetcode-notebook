/* 
思路：搜索二叉树(Binary Search Tree)。设两个区间 a、b：
如果 a.end <= b.start 时，a 小于 b，a 插入 b 左子树。
反之 a.start >= b.end，a 大于 b，a 插入 b 右子树。
如果区间相互叠加，插入失败。
*/

var MyCalendar = function() {
  this.root = null
};

/** 
* @param {number} start 
* @param {number} end
* @return {boolean}
*/
MyCalendar.prototype.book = function(start, end) {
  if (!this.root) return this.root = new TreeNode([start, end])
  var node = this.root
  while (node) {
      if (end <= node.val[0]) {
          if (node.left) node = node.left
          else return node.left = new TreeNode([start, end])
      } else if (start >= node.val[1])  {
          if (node.right) node = node.right
          else return node.right = new TreeNode([start, end])
      } else {
          return false
      }
  }
};

var TreeNode = function(val) {
  this.val = val
  this.left = this.right = null
}

/** 
* Your MyCalendar object will be instantiated and called as such:
* var obj = Object.create(MyCalendar).createNew()
* var param_1 = obj.book(start,end)
*/