/* 
我的思路：一开始的想法是组合数字，但 rand7() 每个数字生成概率都是 1/7，任意组成这几个数得到结果 a/7^b，得不到 1/10 或其它结果。按这个思路想了很久，放弃。
昨天下班一路都在想，睡前也在想，无果。今天突然开窍了，只用其中一部分数字不就行了，数字不再范围内，再重新调用rand7()。取 5 个数，可以得到 1/5 的概率，取 6 个数可以得到 1/2 概率，组合起来就是 1/10 概率。
为什么不用两个数来凑 1/2 呢？因为希望尽可能少地调用 rand7()，取的数字越多，重新调用的概率越低。
*/

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
  var a = 7, b = 7
  while (a === 7) {
      a = rand7()
  }
  while (b > 5 ) {
      b = rand7()
  }
  return b + (a < 4 ? 5 : 0)
};