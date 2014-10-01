Overview of Examples

* oo.js : this example covers the basics of object-oriented
  programming in JavaScript. Yes, it is ugly, but it is the way it is
  done.
  
* read-line.js : this is an example of asynchronous non-blocking I/O
  in JavaScript. It is important to understand, but you really do not
  get good add it until you have written broken programs and pondered
  it for a while.
  
* pipe.js : node.js has an underlying notion of streams. A stream is
  an abstract interface implemented by various objects in node. For
  example, standard input is a stream, standard output is a stream, an
  HTTP connection to a web server is a stream. This example shows you
  how to create a `ReadStream` from a file and "pipe" that stream to
  another stream called `process.stdout`.
  
* event-emitter.js : node.js has an underlying notion of *events* and
  *event emitters*. An event emitter provides methods that allow you
  to define events and their corresponding actions as well as methods
  that let you "fire" an event on an object. This example creates a
  simple event emitter and registers a callback function to be invoked
  when the *doorOpen* event is emitted.

* stream-events.js : this example combines streams and events to show
  you how to register *event handlers* on a stream to generate a
  cryptographic hash on an input file.
  
* file-reader.js : this example shows you how to *inherit* from the
  `EventEmitter` object to define your own event emitter. It also
  demonstrates JavaScript's asynchronous behavior. We also show you
  some *jsdoc* - a documentation language that enables the generation
  of documentation for your code.
  
* set-timeout.js : an example showing you the `setTimeout`
  function. It also demonstrates JavaScript asynchronous nature.
  
* set-interval.js : an example showing a function related to
  `setTimeout` called `setInterval`.

* set-interval-stop.js : an example on how to stop `setInterval`.

* url.js : this example shows you how to parse URLs and format parsed
  URLs using the built-in node.js library `url`.

* query-string.js : this example shows you how to parse and format
  parsed query strings using the built-in node.js library
  `querystring`.

* json.js : this example shows you how to parse and format JSON
  formatted strings using the built-in JavaScript object JSON.

* mymodule.js : an example of a module.

* module2 : an example of another module.

* module3 : an example of another module.

* node_modules/module4 : an example of another module.

* lib/module5 : an example of another module using NODE_PATH.

* http.js : an example of using node's built-in http library to
  communicate with a web server.
