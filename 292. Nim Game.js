/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  return n % 4 !== 0
};

/*
一次最多条三步，玩家处于 n - 4 必败，玩家跳到 n - 4 为必赢，玩家处于 n - 8 跳不到 n - 4，必败。
因此，处于 n - 4i 的位置必败，因为玩家从 0 出发，所有 n = 4i 时必败。
好简单啊，(╯°Д°)╯︵ ┻━┻。
*/