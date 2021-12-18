// Check if a string (first argument, str) ends with the given target string (second argument, target)

function confirmEnding(str, target) {  
  const regex =  new RegExp(target + '$','g');
  return regex.test(str);
}

console.debug(confirmEnding("Bastian", "n"));
console.debug(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.debug(confirmEnding("Open sesame", "same"));