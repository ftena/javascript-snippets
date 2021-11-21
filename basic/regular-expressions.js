// Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; 
let result = twinkleStar.match(starRegex); 
console.log(result);

// Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
result = unRegex.test(exampleStr);
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

// \s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters.
// You can think of it as similar to the character class [ \r\t\f\n\v].
// \S. The same as [^ \r\t\f\n\v]
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
result = sample.match(countWhiteSpace);
console.log(result);

// Specify Upper and Lower Number of Matches
// You can specify the lower and upper number of patterns with quantity specifiers.
// Quantity specifiers are used with curly brackets ({ and }).
// You put two numbers between the curly brackets - for the lower and upper number of patterns.
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; 
result = ohRegex.test(ohStr);
console.log(result);

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // lower number of matches 
result = haRegex.test(haStr);
console.log(result);

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // exact number of matches
result = timRegex.test(timStr);
console.log(result);

// Check for All or None
// You can specify the possible existence of an element with a question mark, ?.
// This checks for zero or one of the preceding element. 
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
result = favRegex.test(favWord);
console.log(result);

// Check For Mixed Grouping of Characters
let myString = "Eleanor Roosevelt";
myRegex = /(Franklin D.|Franklin|Eleanor) Roosevelt/; 
result = myRegex.test(myString); 
console.log(result);

// Reuse Patterns Using Capture Groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
result = reRegex.test(repeatNum);
console.log(result);
repeatNum = "42 42 42 42";
result = reRegex.test(repeatNum);
console.log(result);

// Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(one) (two) (three)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
result = str.replace(fixRegex, replaceText);
console.log(result);

// Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
result = wsRegex.test(hello);
console.log(result);
result = hello.match(wsRegex);
console.log(result);
result = hello.replace(wsRegex, "");
console.log(result);