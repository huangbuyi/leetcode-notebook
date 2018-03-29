/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.queue = []
};

/**
* Push element x onto stack. 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  this.queue.push(x)
  for (var i = 0; i < this.queue.length - 1; i++) {
    this.queue.push(this.queue.shift())
  }
};

/**
* Removes the element on top of the stack and returns that element.
* @return {number}
*/
MyStack.prototype.pop = function() {
  return this.queue.shift()
};

/**
* Get the top element.
* @return {number}
*/
MyStack.prototype.top = function() {
  return this.queue[0]
};

/**
* Returns whether the stack is empty.
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return !this.queue.length
};

/** 
* Your MyStack object will be instantiated and called as such:
* var obj = Object.create(MyStack).createNew()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/

/* 
本题使用队列模拟栈，与 232 使用栈模拟队列不同，栈弹出再插入可以改变栈的顺序，但弹出再输入队列顺序还是一样的。
本题思路，先插入元素，然后把队首元素插入队尾，直到插入的元素是首元素。于是，每次插入复杂度都是O(n)。
*/

var assert = require('assert')
var stack = new MyStack()
assert.equal(stack.empty(), true)
stack.push(1)
stack.push(2)
stack.push(3)
assert.equal(stack.empty(), false)
assert.equal(stack.top(), 3)
assert.equal(stack.pop(), 3)
assert.equal(stack.pop(), 2)
assert.equal(stack.pop(), 1)
assert.equal(stack.empty(), true)