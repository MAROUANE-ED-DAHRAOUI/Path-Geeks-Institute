let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// 1. Arrow function that console.logs the 3 fruits using forEach
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
}

// 2. Arrow function that demonstrates pass by value vs pass by reference
const cloneGroceries = () => {
    // Create a copy of the client variable (PASS BY VALUE)
    let user = client;
    
    // Change the client variable
    client = "Betty";
    
    console.log("Client:", client);  // "Betty"
    console.log("User:", user);      // "John"
    console.log("User variable did NOT change because strings are passed by VALUE");
    console.log("When we copied client to user, we copied the VALUE, not the reference");
    console.log("---");
    
    // Create a variable that equals the groceries object (PASS BY REFERENCE)
    let shopping = groceries;
    
    // Change the totalPrice in the original groceries object
    groceries.totalPrice = "35$";
    
    console.log("Original groceries totalPrice:", groceries.totalPrice);  // "35$"
    console.log("Shopping totalPrice:", shopping.totalPrice);              // "35$"
    console.log("Shopping object DID change because objects are passed by REFERENCE");
    console.log("When we assigned groceries to shopping, we copied the REFERENCE, not the object");
    console.log("---");
    
    // Change the paid value in the shopping object
    shopping.other.paid = false;
    
    console.log("Original groceries paid:", groceries.other.paid);  // false
    console.log("Shopping paid:", shopping.other.paid);             // false
    console.log("Original groceries object DID change because shopping points to the same object");
    console.log("Both variables reference the same object in memory");
}

// Call the functions
console.log("=== DISPLAYING FRUITS ===");
displayGroceries();

console.log("\n=== CLONING GROCERIES ===");
cloneGroceries();