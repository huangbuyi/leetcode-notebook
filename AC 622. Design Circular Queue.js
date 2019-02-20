/* 
这题和某题算法几乎一毛一样，两种思路，都是用数组：
1. 两个指针，一个队列头，一个对列尾，多余的元素插入数组前部。也就是下面算法的思路。
2. 一个指针指向队列头，还有一个队列长度
第二种更简单点，但很显然，做这题的时候还是按照了原来的思路，没想起来第二个思路。看来不是亲手敲过的算法最终都会被忘记。
*/

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.data = new Array(k)
  this.s = 0
  this.e = k - 1
  this.k = k
};

/**
* Insert an element into the circular queue. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) return false
  this.e++
  if (this.e >= this.k) this.e = 0
  this.data[this.e] = value
  return true
};

/**
* Delete an element from the circular queue. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false
  this.data[this.s] = undefined
  this.s++
  if (this.s >= this.k) this.s = 0
  return true
};

/**
* Get the front item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) return -1
  return this.data[this.s]
};

/**
* Get the last item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) return -1
  return this.data[this.e]
};

/**
* Checks whether the circular queue is empty or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  return this.data[this.s] === undefined
};

/**
* Checks whether the circular queue is full or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  return !this.isEmpty() && (this.s - this.e === 1 || this.e - this.s === this.k - 1)
};

/** 
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = Object.create(MyCircularQueue).createNew(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/