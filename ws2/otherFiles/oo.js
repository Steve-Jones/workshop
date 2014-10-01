
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.dist = function () {
  return Math.sqrt(this.x*this.x + this.y+this.y);
};

function PointWithName(x, y, name) {
  Point.apply(this, arguments);
  this.name = name;
}

PointWithName.prototype = new Point(null, null);
PointWithName.prototype.constructor = PointWithName;

PointWithName.prototype.toString = function () {
  return this.name + '(' + this.x + ',' + this.y + ')';
};

var p = new PointWithName(2, 5, 'A');

console.log(p instanceof PointWithName);
console.log(p.dist());
console.log(p.toString());
