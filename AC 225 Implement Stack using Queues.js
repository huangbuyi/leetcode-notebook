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