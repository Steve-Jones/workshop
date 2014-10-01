var querystring = require('querystring');

var result = querystring.parse('foo=bar&baz=qux&baz=quux&corge');
console.log(result);

var str = querystring.stringify(result);
console.log(str);
