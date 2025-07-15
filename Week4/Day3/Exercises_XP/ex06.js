// ===== PART 1: EVALUATE THESE (TRUE OR FALSE) =====

console.log("=== EVALUATION QUESTIONS ===");

// Question 1: [2] === [2]
console.log("1. [2] === [2]:", [2] === [2]); // FALSE
console.log("Explanation: Arrays are objects, and objects are compared by reference, not value");
console.log("These are two different array objects in memory, so they're not equal\n");

// Question 2: {} === {}
console.log("2. {} === {}:", {} === {}); // FALSE
console.log("Explanation: Same as arrays - objects are compared by reference");
console.log("These are two different object instances in memory\n");

// ===== PART 2: OBJECT REFERENCE ANALYSIS =====

console.log("=== OBJECT REFERENCE ANALYSIS ===");

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

console.log("Before modification:");
console.log("object1.number:", object1.number); // 5
console.log("object2.number:", object2.number); // 5
console.log("object3.number:", object3.number); // 5
console.log("object4.number:", object4.number); // 5

object1.number = 4;

console.log("\nAfter object1.number = 4:");
console.log("object1.number:", object1.number); // 4
console.log("object2.number:", object2.number); // 4
console.log("object3.number:", object3.number); // 4
console.log("object4.number:", object4.number); // 5

console.log("\nExplanation:");
console.log("- object1, object2, and object3 all reference the same object in memory");
console.log("- object4 is a separate object with the same initial value");
console.log("- When object1.number changes, object2 and object3 see the change too");
console.log("- object4 remains unchanged because it's a different object\n");

// ===== PART 3: ANIMAL CLASS HIERARCHY =====

console.log("=== ANIMAL CLASS HIERARCHY ===");

// Base Animal class
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
    
    // Method to display animal info
    getInfo() {
        return `${this.name} is a ${this.color} ${this.type}`;
    }
}

// Mammal class that extends Animal
class Mammal extends Animal {
    constructor(name, type, color) 
    {
        super(name, type, color); // Call parent constructor
    }
    
    sound(animalSound) {
        return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

// farmerCow instance
const farmerCow = new Mammal("Lily", "cow", "brown and white");

// Call the sound method
console.log(farmerCow.sound("Moooo"));
