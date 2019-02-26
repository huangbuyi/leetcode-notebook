/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function (num) {
  return 1 + ((num - 1) % 9)
};

/*
看题型就知道涉及某种算法，但想了十分钟放弃了。这种问题，知道的人一分钟解决，不知道的人还真不一定能想出来。
Digit root problem https://en.wikipedia.org/wiki/Digital_root#Congruence_formula
*/