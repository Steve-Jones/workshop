var http = require('http');
var url  = require('url');
var db  = require('db');
//
function dbHandler(request, response) {
  response.writeHead(200, { 'Content-Type' : 'text/sql' });
  db.getUser(request.headers.fname, request.headers.lname, db.printUsers, response);
}

function textHandler(request, response) {
  console.log('received a request from ' + request.headers.host);
  console.log('resource requested: ' + request.url);
  
  response.writeHead(200, { 'Content-Type' : 'text/plain' });

  response.write('hello: ' + request.headers.host + '\n');
  response.write('  --> you requested ' + request.url);
  response.end();
}

function jsonHandler(request, response) {
  response.writeHead(200, { 'Content-Type' : 'text/json' });

  var obj = {
    host: request.headers.host,
    url : request.url
  };

  json = JSON.stringify(obj);
  response.write(json);
  response.end();
}

if (process.argv.length < 3) {
  console.log('usage: node http-server.js [text|json|sql]');
  process.exit(1);
}

var handlerType = process.argv[2];
if (!(handlerType === 'text' || handlerType === 'json' || handlerType === 'sql')) {
  console.log('usage: node http-server.js [text|json|sql]');
  process.exit(1);  
}

var server = null;

switch (handlerType) {
  case 'text':
    server = http.createServer(textHandler);
    break;
  case 'json':
    server = http.createServer(jsonHandler);
    break;
  case 'sql':
    server = http.createServer(dbHandler);
    break;
  default:
    throw new Error('invalid handler type!');
}

server.listen(4000);
console.log('Server is listening!');
