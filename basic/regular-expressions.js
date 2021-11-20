// Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; 
let result = twinkleStar.match(starRegex); 
console.log(result);

// Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
result = quoteSample.match(vowelRegex); 
console.log(result);

// Match Numbers and Letters of the Alphabet
quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; 
result = quoteSample.match(myRegex); 
console.log(result);

// Match All Letters and Numbers
// Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
// \w. This shortcut is equal to [A-Za-z0-9_]
quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
result = quoteSample.match(alphabetRegexV2).length;
console.log(result);
