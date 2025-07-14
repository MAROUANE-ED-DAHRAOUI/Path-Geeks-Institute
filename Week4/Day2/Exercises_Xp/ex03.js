// ------1------
// output : ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// ------2------
// output : ['U', 'S', 'A' ]
const country = "USA";
console.log([...country]);

// ------Bonus------

// output : [ undefined, undefined ]
let newArray = [...[,,]];
console.log(newArray);