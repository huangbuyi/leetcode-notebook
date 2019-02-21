/* 
思路：移动窗口。窗口中字符串满足性质的最小长度。
使用哈希表 mapS、mapT，保存两个字符串的字符数，用 match 来判断是否满足性质。
从窗口右边插入窗口的字符 c 满足 mapS[c] <= mapT[c] 时，match 加 1，当 match = t.length 时，说明窗口中的字符串满足性质。
窗口左边有冗余的字符，也就是 mapS[c] > mapT[c] 时，就可以将字符移出窗口，直到再移除字符会破坏性质为止。

这题略过很多次了，但今天终于把它做出来。其实，遇到不会的题先放一放，不要急着去讨论区找答案，现在做不出来不代表以后做不出来。
随着水平的提升，有些不会做的题就能做出来了，不要轻易放弃每个练习的机会。
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  var mapT = {}, mapS = {}, lh = 0, rh = 0, match = 0, min = Infinity, minIndex = 0
  
  for (var i = 0; i < t.length; i++) {
      mapT[t[i]] = mapT[t[i]] ? mapT[t[i]] + 1 : 1
  }
  
  while (rh < s.length) {
      mapS[s[rh]] = mapS[s[rh]] ? mapS[s[rh]] + 1 : 1
      if (mapS[s[rh]] <= mapT[s[rh]]) match++
      while ((!mapT[s[lh]] || mapS[s[lh]] > mapT[s[lh]]) && lh < rh) {
          mapS[s[lh++]] -= 1
      }
      if (match >= t.length && rh - lh < min) {
          min = rh - lh + 1
          minIndex = lh
      }
      rh++
  }
  
  return min === Infinity ? '' : s.substr(minIndex, min)
};