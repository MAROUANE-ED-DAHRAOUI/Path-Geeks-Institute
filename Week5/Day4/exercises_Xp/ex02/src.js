const personnes = require("./data");

function calculateAverageAge(person) {
  const totalAge = person.reduce((sum, p) => sum + p.age, 0);
  const averageAge = totalAge / person.length;

  console.log(`The average age is: ${averageAge.toFixed(2)}`);
}

calculateAverageAge(personnes);