/* 
看做一个带循环的链表，思路同 142. Linked List Cycle II
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  var slow = nums[0]
  var fast = nums[slow]

  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[nums[fast]]
  }

  fast = 0
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }

  return slow
};