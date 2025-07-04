//1-> Write code to remove “Greg” from the people array.
const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people);


//2-> Write code to replace “James” to “Jason”.
const index = people.indexOf("James");
if (index !== -1) {
  people[index] = "Jason";
}
console.log(people);


//3-> Write code to add your name to the end of the people array.
people.push("Marouane");
console.log(people);

//4-> Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
const maryIndex = people.indexOf("Mary");
console.log(maryIndex);

// 5. Copy array without "Mary" or "Marouane", using the slice method.
const newPeople = people.slice(1, 3);
console.log(newPeople);


// 6->Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo"));


// 7->Create a variable called last which value is the last element of the array.
 const last = people[people.length - 1];
 console.log(last);


 // Part II - Loops
// 1->Using a loop, iterate through the people array and console.log each person.
 for( let i = 0; i < people.length; i++)
 {
    console.log(people[i]);
 }


// 2 -> Using a loop, iterate through the people array and exit the loop after you console.log “Devon” . 
for( let i = 0; i < people.length; i++)
 {
    if(people[i] !== "Devon")
        console.log(people[i]);
    else
        break;
 }

