/* 
这是一题图论的题，每个节点是一个邮箱，同一账号的邮箱表示其相互连接。例如账号[name, a@z.com, b@z.com]，不用管用户名
a@z.com --- b@z.com
另一个账号[name2, c@z.com, d@z.com]，两个账号不能 merge
a@z.com --- b@z.com
c@z.com --- d@z.com
如果，还有一个账号[name2, b@z.com, d@z.com]，则这三个账号可 merge 为同一账号
a@z.com --- b@z.com
              |
c@z.com --- d@z.com
因此，问题就简化为，邮箱组成的图中，有多少不相连的独立网络。
当然，也看以看成账号的图，每个节点代表一个账号，拥有相同邮箱的账号相连。
思路大致如此。但我的算法比较复杂，分了四步：
1. 用 HashMap 保存邮箱对应的账户
2. 找出每个账号相邻的账号
3. 找出所有相同的账号
4. 找出相同账号的所有邮箱
有空得去看看算法书，图的算法还不太熟。
*/

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  var map = {}
  accounts = accounts.filter(a => a.length > 1)
  for (var i = 0; i < accounts.length; i++) {
    for (var j = 1; j < accounts[i].length; j++) {
      var mail = accounts[i][j]
      if (!map[mail]) map[mail] = []
      map[mail].push(i)
    }
  }

  var nerbs = new Array(accounts.length)
  for (var i = 0; i < accounts.length; i++) {
    nerbs[i] = new Set()
    for (var j = 1; j < accounts[i].length; j++) {
      for (var k = 0; k < map[accounts[i][j]].length; k++) {
        var nerb = map[accounts[i][j]][k]
        if (i !== nerb) nerbs[i].add(nerb)
      }
    }
  }

  var visited = new Array(accounts.length), visited = {}, res = []
  for (var i = 0; i < nerbs.length; i++) {
    if (!visited[i]) {
      var r = []
      help(i, nerbs, visited, r)
      res.push(r)
    }
  }

  for (var i = 0; i < res.length; i++) {
    res[i] = merge(res[i], accounts)
  }

  return res
};

var help = function (i, nerbs, visited, res) {
  res.push(i)
  visited[i] = true
  nerbs[i].forEach(k => {
    if (!visited[k]) help(k, nerbs, visited, res)
  })
}

var merge = function (targets, accounts) {
  var res = [accounts[targets[0]][0]]
  var mails = new Set()
  for (var i = 0; i < targets.length; i++) {
    var t = targets[i]
    for (var j = 1; j < accounts[t].length; j++) {
      mails.add(accounts[t][j])
    }
  }
  return res.concat(Array.from(mails).sort())
}