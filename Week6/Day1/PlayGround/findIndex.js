const persons = [
    {
        id: 0,
        name: "Marouane",
        age: 26
    },    
    {
        id: 1,
        name: "youssef",
        age: 15
    },    
    {
        id: 3,
        name: "Ahmad",
        age: 60
    },    
];


const person = persons.findIndex(person=> person.name === "Ahmad")

console.log(person);
