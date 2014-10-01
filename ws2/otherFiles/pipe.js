var fs = require('fs');
var readStream = fs.createReadStream('pipe.js');
readStream.pipe(process.stdout);
