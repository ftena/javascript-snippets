// more info @ https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#object-oriented-programming

// Object using this keyword
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};

console.log(duck.sayName());

// Using constructor to create objetcs
function Bird(){
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

// Notice that the new operator is used when calling a constructor.
let blueBird = new Bird();
console.log(blueBird);
console.log("instance of Bird? " + (blueBird instanceof Bird));

// Receive some arguments
function Dog(name, color) {
  this.name = name;
  this.color  = color;
  this.numLegs = 4;
}

let terrier = new Dog("Bro", "black");
console.log("My name is " + terrier.name + " and I have " + terrier.color + " color and " + terrier.numLegs + " legs");
console.log("Is the terrier an instance of Bird? " + (terrier instanceof Dog));

// Constructor property
let peter = new Dog("Peter");

function joinDogFraternity(candidate) {
  return (candidate.constructor === Dog);
}

console.log("Is myDog a Dog? " + joinDogFraternity(peter));

// Add new property to the Dog prototype
Dog.prototype.size = 30;

let ben = new Dog("Ben");

console.log("Ben size: " + ben.size);

// Add properties all at once
Dog.prototype = {
  constructor: Dog,
  numTails: 1, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name
	    + ", my color is "  + this.color
	    + ", I have " + this.numLegs + " leg(s)" 
	    + ", and I have " + this.numTails + " tail(s).");
  }
};

let snoopy = new Dog("Snoopy", "white");
snoopy.describe();

// Prototype chain
console.log(Dog.prototype.isPrototypeOf(snoopy));  // yields true
console.log(Object.prototype.isPrototypeOf(Dog.prototype)); // Object is the supertype for all objects in JavaScript

// Inheritance, supertypes and subtypes
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let animal = Object.create(Animal.prototype);

function Eagle() { }

Eagle.prototype = Object.create(Animal.prototype); // set the prototype of the subtype to be an instance of Animal
Eagle.prototype.constructor = Eagle; // constructed by Eagle, not Animal

let falcon = new Eagle();
falcon.eat();

// Add methods after inheritance
Eagle.prototype.fly = function() {
  console.log("I'm flying!");
};

let star = new Eagle();
star.eat();
star.fly();

// Override inherited method
Eagle.prototype.eat = function() {
  console.log("Eeek!");
}
let marvel = new Eagle();
marvel.eat();

// Use a mixin to add common behavior between unrelated objects
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("I can glide!");
  }
};

glideMixin(bird);
glideMixin(boat);

// Use Closure to Protect Properties
/* The simplest way to make this public property private is by creating a
* variable within the constructor function. This changes the scope of that
* variable to be within the constructor function versus available globally.
* This way, the variable can only be accessed and changed by methods
* also within the constructor function.
*/
function Ship(name) {
  this.name = name;
  let speed = 10;

  this.getSpeed = function() { 
    return speed;
  };
}
let sunny = new Ship("Sunny");
console.log("The speed of the " + sunny.name + " is " + sunny.getSpeed() + " kts");
console.log("The speed of the " + sunny.name + " is " + sunny.speed + " kts");


