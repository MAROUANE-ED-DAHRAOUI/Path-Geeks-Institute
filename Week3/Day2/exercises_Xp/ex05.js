//1-> Create an object called family with a few key value pairs.
const family = {
    father: "marouane",
    mother: "siham",
    son: "youssef",
    girl: "sana"
};

//2-> Using a for in loop, console.log the keys of the object.
for(const key in family)
{
    console.log(`${key}`);
}


// 3-> Using a for in loop, console.log the values of the object.
for(const value in family)
{
console.log(`${family[value]}`);
}
