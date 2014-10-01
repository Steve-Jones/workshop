
var i = 0;

var id = setInterval(function () {
  console.log('hello there');
  if (i++ === 5) {
    console.log('stopping!');
    clearInterval(id);
  }
}, 1000);

console.log('hello back at you!');
