var o = {
  fname : 'Tim',
  lname : 'Richards',
  age   : 39
};

var os = JSON.stringify(o);

console.log(os);

var o2 = JSON.parse(os);

console.log(o2)

console.log(o === o2);
