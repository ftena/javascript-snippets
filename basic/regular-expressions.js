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
let alphabetRegexV2 = /\w/g; 
result = quoteSample.match(alphabetRegexV2).length;
console.log(result);

// Match Everything But Letters and Numbers
// \W. This shortcut is the same as [^A-Za-z0-9_].
quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);

/* Restrict Possible Usernames
    Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.
    You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
    1. Usernames can only use alpha-numeric characters.
    2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
    3. Username letters can be lowercase and uppercase.
    4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
result = userCheck.test(username);
console.log(result);