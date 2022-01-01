// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "imdbRating": "8.8",
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "imdbRating": "8.6",
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "imdbRating": "9.0",
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "imdbRating": "8.3",
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "imdbRating": "7.9",
  }
];

// The reduce method iterates over each item in an array and returns a single
// value (i.e. string, number, object, array). This is achieved via a callback
// function that is called on each iteration.
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'Cat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj);

// Average rating of movies >= year 2010
function getRating(watchList) {
    let averageRating;
    let filtered = watchList.filter(movie => Number(movie.Year) >= 2010);

    averageRating = filtered.reduce((sum, movie) => sum + Number(movie.imdbRating), 0);
  
    return averageRating/filtered.length;
}

console.log(getRating(watchList));