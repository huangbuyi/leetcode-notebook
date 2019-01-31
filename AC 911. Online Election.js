/* 
此题不难，二分法搜索
*/

/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function(persons, times) {
    var map = {}
    var winners = this.winners = new Array(times.length)
    var times = this.times = times
    winners[0] = persons[0]
    map[winners[0]] = 1
    
    for (var i = 1; i < times.length; i++) {
        map[persons[i]] = map[persons[i]] ? map[persons[i]] + 1 : 1
        winners[i] = map[persons[i]] >= map[winners[i - 1]] ? persons[i] : winners[i - 1]
    }
    };

    /** 
    * @param {number} t
    * @return {number}
    */
    TopVotedCandidate.prototype.q = function(t) {
    var winners = this.winners, times = this.times, l = 0, r = winners.length - 1
    
    while (l <= r) {
        var m = Math.floor((l + r) / 2)
        if (t < times[m]) {
            r = m - 1
        } else {
            l = m + 1
        }
    }
    
    return winners[l - 1]
};

/** 
* Your TopVotedCandidate object will be instantiated and called as such:
* var obj = Object.create(TopVotedCandidate).createNew(persons, times)
* var param_1 = obj.q(t)
*/