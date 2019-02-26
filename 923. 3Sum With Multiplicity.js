/*
从题目给出的条件，尤其是第二条，可以看出会有很多重复的数字，所以根据每个数字的个数来计算结果(时间复杂度O(N + 101*101))，比两两组合计算结果(时间复杂度O(N^2))，会更合适一些。但如果数字很大，重复数字少，后一种算法会更合适一些。
1. 3 <= A.length <= 3000
2. 0 <= A[i] <= 100
3. 0 <= target <= 300
另外，要注意两个数字相同和三个数字相同的情况。
思路大致如此，以下代码比较乱，有兴趣的话再重构一下。
事实证明，混乱的代码容易出错，下面代码喜提四次 WA。
*/

/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (A, target) {
  var counts = new Array(101).fill(0), res = 0, mod = 1e9 + 7, i, j, k
  for (var i = 0; i < A.length; i++) {
    counts[A[i]]++
  }

  for (i = 0; 2 * i <= target && i <= 100; i++) {
    k = target - 2 * i
    if (counts[i] === 0) continue
    if (k <= 100) {
      if (k !== i) res += counts[i] * (counts[i] - 1) * counts[k] / 2
      else res += counts[i] * (counts[i] - 1) * (counts[i] - 2) / 6
      res %= mod
    }

    for (j = i + 1; 2 * j + i < target && j <= 100; j++) {
      k = target - i - j
      if (counts[j] === 0 || k > 100) continue

      res = (res + counts[i] * counts[j] * counts[k]) % mod
    }
  }

  return res
};
