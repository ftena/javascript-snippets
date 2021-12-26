// Object using this keyword
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};

console.log(duck.sayName());

// Constructor property
function Dog(name) {
  this.name = name;
}

let myDog = new Dog("Peter");

function joinDogFraternity(candidate) {
  return (candidate.constructor === Dog);
}

console.log("Is myDog a Dog? " + joinDogFraternity(myDog));

// Add properties all at once
Dog.prototype = {
  constructor: Dog,
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

let snoopy = new Dog("Snoopy");
console.log(snoopy.numLegs);
snoopy.eat();
snoopy.describe();

// Prototype Chain
console.log(Dog.prototype.isPrototypeOf(snoopy));  // yields true
console.log(Object.prototype.isPrototypeOf(Dog.prototype)); // Object is the supertype for all objects in JavaScript