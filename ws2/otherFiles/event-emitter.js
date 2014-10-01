var events  = require('events');
var emitter = new events.EventEmitter();

var ringBell = function () {
  console.log('ding dong');
};

emitter.on('doorOpen', ringBell);

emitter.emit('doorOpen');

emitter.on('doorClosed', function () {
  console.log('closed the door!');
});

emitter.emit('doorClosed');
