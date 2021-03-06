/* 
一个 following 表，保存关注关系：
{ 
  userId: [followeeId1, followeeId2, ...]
}
一个 tweets 表，保存用户推文：
{
  userId: [tweet1, tweet2, ....]
}
tweet 实例：
{
  id,
  time
}
每次请求资讯时，查找每个关注者和自己的最新消息。这种方式实现起来比较简单。
还有一种推送方式，用户每发布一篇文章，就推送给订阅者，这样用户在获取推文速度更快，但实现起来复杂。
*/

/**
 * Initialize your data structure here.
 */
var Twitter = function() {
  this.following = {}
  this.tweets = {}
  this.time = 0
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  var t = this.tweets
  if (!t[userId]) t[userId] = []
  t[userId].unshift({
    id: tweetId,
    time: this.time++
  })
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  var f = this.following[userId], tweets = this.tweets, news = []
  if (!f) f = this.following[userId] = {}
  f[userId] = true
  for (var id in f) {
    if (tweets[id]) {
      for (var i = 0; i < Math.min(tweets[id].length, 10); i++) {
        news.push(tweets[id][i])
      }
    }
  }
  return news.sort((t1, t2) => t2.time - t1.time).map(t => t.id).slice(0, 10)
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  var f = this.following
  if (!f[followerId]) f[followerId] = {}
  f[followerId][followeeId] = true
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if (this.following[followerId]) {
    delete this.following[followerId][followeeId]
  }
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = Object.create(Twitter).createNew()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */