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

// Using ES6 notation, each item in array is processed to extract title and rating.
// Parantheses are needed to return an object.
const ratings = watchList.map(movie => ({"title": movie.Title, "rating": movie.imdbRating}));
console.log("after map: " + JSON.stringify(ratings));

// Filter >= 8.0
const filtered = ratings.filter(movie => Number(movie.rating) >= 8.0);
console.log("after filter: " + JSON.stringify(filtered));

// Another option
var filteredList = watchList
  .map(function(e) {
    return { title: e["Title"], rating: e["imdbRating"] };
  })
  .filter(e => e.rating >= 8);

console.log(JSON.stringify(filteredList));
