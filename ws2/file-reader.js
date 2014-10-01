var events = require('events');
var util   = require('util');
var fs     = require('fs');

/**
 * Represents an object that can read files.
 * @class
 * @param {string} file - the file to read.
 */
function FileReader(file) {
  if (file === null) {
    throw new Error('file must be non-null');
  }

  if (file === undefined) {
    throw new Error('file must be defined');
  }

  /** @member {string} */
  this.file = file;

  // Remember this pattern?
  var that = this;
  
  this.on('read', function () {
    fs.readFile(fileReader.file, function (err, data) {
      that.emit('done', data);
    });
  });
}

util.inherits(FileReader, events.EventEmitter);

var fileReader = new FileReader('file-reader.js');

fileReader.on('done', function (data) {
  console.log(data.toString());
});

fileReader.emit('read');
