var assert = require('assert')
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */

/* 二分法查找 */
var search = function (nums, target, startOrEnd) {
  var lh = 0, rh = nums.length - 1

  while (lh <= rh) {
    var mh = ((lh + rh) / 2) >> 0
    if (target < nums[mh][startOrEnd]) {
      rh = mh - 1
    } else {
      lh = mh + 1
    }
  }

  return lh
}

var insert = function (intervals, newInterval) {
  var s = search(intervals, newInterval.start, 'start'),
    e = search(intervals, newInterval.end, 'end'),
    start = newInterval.start,
    end = newInterval.end

  // 左边区间重合，其左值成为新区间左值
  if (s >= 1 && newInterval.start <= intervals[s - 1].end) {
    start = intervals[s - 1].start
    s--
  }

  // 右边区间重合，其右值成为新区间右值
  if (e < intervals.length && newInterval.end >= intervals[e].start) {
    end = intervals[e].end
    e++
  }

  newInterval.start = start
  newInterval.end = end
  // 删除所有重合区间，并插入新区间
  intervals.splice(s, e - s, newInterval)

  return intervals
};

assert.deepEqual(insert([{ start: 1, end: 3 }, { start: 6, end: 9 }], { start: 4, end: 5 }), [{ start: 1, end: 3 }, { start: 4, end: 5 }, { start: 6, end: 9 }])
assert.deepEqual(insert([{ start: 1, end: 3 }, { start: 6, end: 9 }], { start: 2, end: 5 }), [{ start: 1, end: 5 }, { start: 6, end: 9 }])
assert.deepEqual(insert([{ start: 1, end: 3 }, { start: 6, end: 9 }], { start: 4, end: 8 }), [{ start: 1, end: 3 }, { start: 4, end: 9 }])
assert.deepEqual(insert([{ start: 1, end: 3 }, { start: 6, end: 9 }], { start: 2, end: 8 }), [{ start: 1, end: 9 }])
assert.deepEqual(insert([{ start: 1, end: 3 }, { start: 6, end: 9 }], { start: -1, end: 0 }), [{ start: -1, end: 0 }, { start: 1, end: 3 }, { start: 6, end: 9 }])
assert.deepEqual(insert([{ start: 1, end: 3 }, { start: 6, end: 9 }], { start: -1, end: 2 }), [{ start: -1, end: 3 }, { start: 6, end: 9 }])
assert.deepEqual(insert([{ start: 1, end: 3 }, { start: 6, end: 9 }], { start: 10, end: 12 }), [{ start: 1, end: 3 }, { start: 6, end: 9 }, { start: 10, end: 12 }])
assert.deepEqual(insert([{ start: 1, end: 3 }, { start: 6, end: 9 }], { start: 9, end: 12 }), [{ start: 1, end: 3 }, { start: 6, end: 12 }])
assert.deepEqual(insert([{ start: 1, end: 3 }, { start: 6, end: 9 }], { start: 0, end: 8 }), [{ start: 0, end: 9 }])
assert.deepEqual(insert([{ start: 1, end: 3 }, { start: 6, end: 9 }], { start: 2, end: 10 }), [{ start: 1, end: 10 }])
assert.deepEqual(insert([{ start: 1, end: 3 }, { start: 6, end: 9 }], { start: 0, end: 10 }), [{ start: 0, end: 10 }])
assert.deepEqual(insert([], { start: 0, end: 10 }), [{ start: 0, end: 10 }])
