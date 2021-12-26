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


