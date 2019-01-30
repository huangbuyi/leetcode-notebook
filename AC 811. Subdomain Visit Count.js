/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  var counts = {}
  for (var i = 0; i < cpdomains.length; i++) {
      var cp = cpdomains[i].split(' ')
      var count = Number(cp[0])
      var domain = cp[1]
      var dotIndex = domain.indexOf('.')
      counts[domain] = counts[domain] ? counts[domain] + count : count
      
      while (dotIndex > -1) {
          domain = domain.substr(dotIndex + 1)
          counts[domain] = counts[domain] ? counts[domain] + count : count
          dotIndex = domain.indexOf('.')
      }
  }
  
  var res = []
  for (var domain in counts) {
      res.push(counts[domain].toString() + ' ' + domain )
  }
  
  return res
};