var url = require('url');

var str_url = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';

var result = url.parse(str_url);

console.log(result);

console.log(url.format(result));
