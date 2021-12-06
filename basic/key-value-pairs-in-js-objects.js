const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};

console.log(tekkenCharacter);

/* If you want to add an additional property, such as "origin",
it can be done by assigning origin to the object: */
tekkenCharacter.origin = 'South Korea';
console.log(tekkenCharacter);

/* Bracket notation is required if your property has a space in it
or if you want to use a variable to name the property. */
tekkenCharacter['hair color'] = 'dyed orange';
console.log(tekkenCharacter);

const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';
console.log(tekkenCharacter);
