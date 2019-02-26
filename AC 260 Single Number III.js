/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  var diff = 0, res = [0, 0]
  for (var i = 0; i < nums.length; i++) {
    diff ^= nums[i]
  }
  diff &= -diff
  for (var i = 0; i < nums.length; i++) {
    res[diff & nums[i] ? 0 : 1] ^= nums[i]
  }
  return res
};

/*
没想出来，看了答案。解题思路是进行两次异或遍历：
第一次，得到的结果是两个 Single Number 的异或，因为这两个值必然是不同的，
所以它们的异或结果的二进制值至少有一位为 1，找其中的一位（代码 diff &= -diiff 去最右边的一位 1）。例如：
nums [1,2,1,3,2,5]
3 0010
5 0101
diff 0110
-diff 1010
diff & -diff 0010
1 位于右边第二位
第二次，数组被分为两组进行异或，一组数右边第二位为 1，一组数右边第二位为 0，
由于两个 Signle Number 数在右边第二位是不同的，所以这两个 Single Number 处于不同的组
一组：[1,1,5] ([0001,0001,0101])
二组：[2,2,3] ([0010,0010,0011])
*/