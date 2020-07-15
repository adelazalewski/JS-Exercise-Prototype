/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/
let stomach = [];
function Person(name, age) {
this.name = name;
this.age = age;
}
// let obj = {
//   name: "me",
//   eat: function(){
//    return this.name
//   }
// }
// obj.eat(sometoast);
Person.prototype.eat = function(someFood){
stomach.push(someFood);
}
Person.prototype.poop = function(){
  stomach.splice();
}
Person.prototype.toString = function(name, age){
  return `${this.name}, ${this.age}`;
}
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
this.tank = 0;
this.odometer = 0;
}
Car.prototype.fill = function(gallons){
  this.tank = gallons;
}
//stretch:

Car.prototype.drive = function(distance, milesPerGallon, callback){

}
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(babyAttrs) {
Person.call(this, babyAttrs);
this.favoriteToy = babyAttrs.favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
}
const baby1 = new Baby({
  name: "Dami",
  age: 2,
  favoriteToy: "ball"
})
console.log(baby1);
baby1.eat();


/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. global/window principla = when this is not specified when the function is called then "this" is binded to the window console. 
  2. implicite binding = when our object has a method that returns a function (and uses properties from the object) when calling that function were calling it as a property of the object it was defined in and whats to the left of the dot "." for when you call the function thats the object that this is binded to.
  3. explicit bindeing= is when using the .call .apply and .bind methods they help with binding the this keyword to the object
  4.new binding = impplies the usage of a constructor function that is names with the first letter capital(i.e. function Person()) and when the function is called you call it using the new keyword and that binds the this with the object that you're using as an argument for that constructor function.   
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
