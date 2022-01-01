function sentensify(str) {
  return str.split(/\W/).join(" ");
}

console.log(sentensify("May-the-force-be-with-you"));
console.log(sentensify("The.force.is.strong.with.this.one"));
console.log(sentensify("There,has,been,an,awakening"));

// It converts a string title and returns the hyphenated version for the URL
function urlSlug(title) {
  return (title.split(/\W/).filter(data => data.length != 0).join("-").toLowerCase());
}

console.log(urlSlug("Winter Is Coming"));
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));

