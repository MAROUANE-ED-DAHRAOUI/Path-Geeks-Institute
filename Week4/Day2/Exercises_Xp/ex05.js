const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.
const epicString = epic.reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`, '').trim();
console.log(epicString);
