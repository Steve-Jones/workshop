var crypto = require('crypto');
var fs = require('fs');

var readStream = fs.createReadStream('stream-events.js');
var hash = crypto.createHash('sha1');

readStream
  .on('data', function (chunk) {
    hash.update(chunk);
  })
  .on('end', function () {
    console.log(hash.digest('hex'));
  });
