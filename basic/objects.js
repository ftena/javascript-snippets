/*
Record Collection

You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

+ Your function must always return the entire record collection object.
+ If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
+ If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
+ If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
+ If value is an empty string, delete the given prop property from the album.

Note: A copy of the recordCollection object is used for the tests.
*/

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (value == "")
  {
    delete records[id][prop];
    return records;
  }

  if (prop != "tracks" && value != "")
  {
    records[id][prop] = value;   
  } else if (prop == "tracks" && !records[id].hasOwnProperty("tracks"))
  {
    const myArray = [value];
    records[id].tracks = myArray;
    // or...
    // records[id].tracks = [value];
  } else if (prop == "tracks" && value != "")
  {
    records[id].tracks.push(value); 
  } 
  
  return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(recordCollection, 2548, "artist", ""));
console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
console.log(updateRecords(recordCollection, 2548, "tracks", ""));
console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));
