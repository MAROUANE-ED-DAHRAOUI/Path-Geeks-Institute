// 1. Create a promise that resolves with value 3
const resolvedPromise = Promise.resolve(3);

// 2. Create a promise that rejects with "Boo!"
const rejectedPromise = Promise.reject("Boo!");

console.log("Testing resolved promise...");
resolvedPromise
    .then(result => {
        console.log("Resolved promise result:", result);
    })
    .catch(error => {
        console.log("Resolved promise error:", error);
    });

// Test the rejected promise
console.log("Testing rejected promise...");
rejectedPromise
    .then(result => {
        console.log("Rejected promise result:", result);
    })
    .catch(error => {
        console.log("Rejected promise error:", error);
    });

// Alternative: Using async/await
async function testBothPromises() {
    try {
        console.log("\nTesting with async/await:");
        
        // Test resolved promise
        const resolvedResult = await resolvedPromise;
        console.log("Async resolved result:", resolvedResult);
        
        // Test rejected promise (this will throw an error)
        const rejectedResult = await rejectedPromise;
        console.log("Async rejected result:", rejectedResult);
        
    } catch (error) {
        console.log("Async caught error:", error);
    }
}

// Run async test
testBothPromises();

console.log("\nChaining promises:");
Promise.resolve(3)
    .then(value => {
        console.log("First promise resolved with:", value);
        return Promise.reject("Boo!");
    })
    .catch(error => {
        console.log("Second promise rejected with:", error);
    });

// Multiple resolved values
console.log("\nMultiple Promise.resolve examples:");
Promise.resolve("Hello").then(result => console.log("String:", result));
Promise.resolve(true).then(result => console.log("Boolean:", result));
Promise.resolve({ name: "John" }).then(result => console.log("Object:", result));
Promise.resolve([1, 2, 3]).then(result => console.log("Array:", result));