/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  var map = {}, res = 0
  for (var i = 0; i < emails.length; i++) {
    var email = emails[i], j = 0, name = ''
    while (email[j] !== '@' && email[j] !== '+') {
      if (email[j] !== '.') name += email[j]
      j++
    }
    email = name + email.substr(email.indexOf('@'))
    if (!map[email]) {
      map[email] = true
      res++
    }
  }

  return res
};