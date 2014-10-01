var fs = require('fs');

if (process.argv.length === 0) {
  console.log("no arguments!");
  process.exit(1);
}

var file = process.argv[1];

fs.readFile(file, function (err, data) {
  if (err) {
    console.log('there was an error: ' + err);
  }
  else {
    console.log(data.toString());
  }
});

console.log('THIS SHOULD BE CLEAR!')
