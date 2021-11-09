// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for(let index = 0; index < contacts.length; ++index)
  {
    if (contacts[index].firstName === name)
    {
      if(contacts[index].hasOwnProperty(prop))
      {
        return contacts[index][prop];
      } else
      {
        return "No such property";
      }
    }    
  }

  return "No such contact";
}

lookUpProfile("Akira", "likes");