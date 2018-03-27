/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.input = []
  this.output = []
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.input.push(x)
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
  this.peek()
  return this.output.pop()
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  if (!this.output.length) {
      while (this.input.length) {
          this.output.push(this.input.pop())
      }
  }
  return this.output[this.output.length - 1]
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return !(this.input.length || this.output.length)
};

/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = Object.create(MyQueue).createNew()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/

/* 
标题中 Stacks 已经暗示着可以用多个栈来模拟队列。没想出解法，看了下其他人的答案。
思路很简单：一个栈 A 保存插入顺序，另一个栈 B 只有在读取或弹出队首时，才会使用，
    将栈 A 一一弹出插入栈 B，于是栈 B 后面的元素就是先插入的元素。
*/

var assert = require('assert')
var queue = new MyQueue()
assert.equal(queue.empty(), true)
queue.push(1)
queue.push(2)
queue.push(3)
assert.equal(queue.empty(), false)
assert.equal(queue.peek(), 1)
assert.equal(queue.pop(), 1)
assert.equal(queue.pop(), 2)
assert.equal(queue.pop(), 3)
assert.equal(queue.empty(), true)
