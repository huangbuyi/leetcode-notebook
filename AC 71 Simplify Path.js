var assert = require('assert')
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var ss = path.split('/'), res = [], i, s

    for (i = 0; i < ss.length; i++) {
        s = ss[i]
        if (s === '' || s === '.') continue
        if (s === '..' && res.length !== 0) res.pop()
        else if (s !== '..') res.push(s)
    }
    
    return '/' + res.join('/')
};

assert.equal(simplifyPath('/home/'),'/home')
assert.equal(simplifyPath('/a/./b/../../c/'), '/c')
assert.equal(simplifyPath('/a/b/..'),'/a')
assert.equal(simplifyPath('/a/.'),'/a')
assert.equal(simplifyPath(''),'/')
assert.equal(simplifyPath('/'),'/')
assert.equal(simplifyPath('/.'),'/')
assert.equal(simplifyPath('/..'),'/')
assert.equal(simplifyPath('/a/..'),'/')
assert.equal(simplifyPath('/a/b/c/d/e/f/g/.././.././.././'),'/a/b/c/d')
assert.equal(simplifyPath('///'),'/')
assert.equal(simplifyPath('/...'),'/...')
assert.equal(simplifyPath('/abc/.../..'),'/abc')
assert.equal(simplifyPath('/..hidden'),'/..hidden')
assert.equal(simplifyPath('/.hidden'),'/.hidden')
assert.equal(simplifyPath('/home//foo/'),'/home/foo')
