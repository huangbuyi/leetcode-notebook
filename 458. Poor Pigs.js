/* 
好久没在 Easy 题上翻车了，没想到猪喝水的最优策略，看了讨论豁然开朗。
假设有 25 桶水，1 分钟中毒GG，4分钟可用时间，将桶编号1~25，排放成二维坐标系：
1  2  3  4  5
6  7  8  9  10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25
猪佩奇每次喝一列的水，如 1 6 11 16 21。猪乔治每次和一行的水，如 1 2 3 4 5。如果佩奇毒死了，就可以确定那一列水有毒，如果没死，可以确定是最后一行有毒。
乔治同理可以确定哪一行有毒，最后定位有毒的水桶。一个猪能喝几轮取决于可用时间和中毒死亡时间，示例中，猪可以喝 4 论，最多确认 5 列。
如果有更多水桶，就需要更多猪猪来组成3维，甚至多维坐标系，来确认毒物的位置。
*/

/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
  return Math.ceil(Math.log(buckets) / Math.log(Math.floor(minutesToTest / minutesToDie) + 1))
};