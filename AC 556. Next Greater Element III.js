/*
要找比 n 大的最小值，要注意一点：尽可能变化最低位，如
12345 -> 12354
如果从后往前是升序，则找不到结果，如
54321 -> 
所以，为了保证变化位数最低，并且能找到结果，所以要找出打断升序的第一个值，将这个值与升序中比它大的最小值交换位置，将升序反向，即升序的最小值。
354321 -> 453321 -> 412335

*/

/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
  n = n.toString().split('')
  
  for (var i = n.length - 2; i >= 0; i--) {
      var j = i
      while (n[i] < n[j + 1]) {
          j++
      }

      if (i !== j) {
          var t = n[i]
          n[i] = n[j]
          n[j] = t
          reverse(n, i + 1, n.length - 1)
          var res = Number(n.join(''))
          return res < Math.pow(2, 32) / 2 ? res : -1
      }
  }
  
  return -1
};

var reverse = function(arr, i, j) {
  while (i < j) {
      var t = arr[i]
      arr[i] = arr[j]
      arr[j] = t
      i++
      j--
  }
}
