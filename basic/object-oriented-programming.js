// Object using this keyword
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};

console.log(duck.sayName());

// Using constructor to create objetcs
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

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
console.log(terrier);
console.log("instance of Bird? " + (terrier instanceof Dog));

// Constructor property
let myDog = new Dog("Peter");

function joinDogFraternity(candidate) {
  return (candidate.constructor === Dog);
}

console.log("Is myDog a Dog? " + joinDogFraternity(myDog));

// Add properties all at once
Dog.prototype = {
  constructor: Dog,
  numTails: 1, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

let snoopy = new Dog("Snoopy");
console.log(snoopy.numTails);
snoopy.eat();
snoopy.describe();

// Prototype Chain
console.log(Dog.prototype.isPrototypeOf(snoopy));  // yields true
console.log(Object.prototype.isPrototypeOf(Dog.prototype)); // Object is the supertype for all objects in JavaScript
