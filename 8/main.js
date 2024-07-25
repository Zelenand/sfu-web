var circle1 = {x:0, y:0, radius: 4};
circle1.z = 4;
circle1.mini_circle = {'x':0, 'y':0, 'radius':4};

function Circle(x, y, radius) {
    this.x = x; this.y = y; this.radius = radius;
    this.area = function( ) { return this.radius * this.radius * 3.14; } 
} 

Circle.prototype.circleLength = function() { return this.radius * 2 * 3.14; }

var circle2 = new Circle(4, 4, 2);

console.log(circle2.area());
console.log(circle2.circleLength());

circle2.area = function() { return this.radius * this.radius * Math.PI; }
circle2.circleLength = function() { return this.radius * 2 * Math.PI; }

console.log(circle2.circleLength());
console.log(circle2.area());

console.log(circle2.x);
console.log(circle2['x']);
circle2.x = 8;
console.log(circle2.x);


Date.prototype.getYearsAfterSecondMillenium = function() {
    return this.getFullYear() - 2000;
}
time = new Date();
console.log(time.getYearsAfterSecondMillenium());