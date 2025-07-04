let age = [20,5,12,43,98,55];

//  1. Console.log the sum of all the numbers in the age array.
let sum = 0;
for (let i = 0; i < age.length; i++) {
    sum += age[i];
}
console.log("Sum of all ages:", sum);

let highest_age = age[0];
for (let i = 0; i < age.length; i++) {
    if (age[i] > highest_age) {
        highest_age = age[i];
    }    
}
console.log("Highest age:", highest_age);