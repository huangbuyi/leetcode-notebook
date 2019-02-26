/**
 * @param {number} K
 * @return {number}
 */
var preimageSizeFZF = function (K) {
  var cycle = 6
  while (cycle <= K + 1) {
    cycle = cycle * 5 + 1
  }
  cycle = (cycle - 1) / 5

  while (cycle > 1) {
    if ((K + 1) % cycle === 0) return 0
    K = K % cycle
    cycle = (cycle - 1) / 5
  }
  return 5
};