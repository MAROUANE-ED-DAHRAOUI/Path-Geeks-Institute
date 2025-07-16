const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

console.log("=== ORIGINAL JAVASCRIPT OBJECT ===");
console.log(marioGame);

// 1. Convert JS object to JSON object
console.log("\n=== 1. CONVERT TO JSON (BASIC) ===");
const jsonString = JSON.stringify(marioGame);
console.log("JSON String:", jsonString);
console.log("Type:", typeof jsonString);

// What happens to nested objects?
console.log("\n=== WHAT HAPPENS TO NESTED OBJECTS? ===");
console.log("✓ Nested objects are preserved in JSON format");
console.log("✓ All nested properties are converted to JSON string format");
console.log("✓ The structure and hierarchy remain intact");
console.log("✓ Data types are preserved (strings, numbers, booleans)");

// 2. Convert and pretty print JSON object
console.log("\n=== 2. PRETTY PRINT JSON ===");
const prettyJson = JSON.stringify(marioGame, null, 2);
console.log("Pretty Printed JSON:");
console.log(prettyJson);

// Alternative pretty printing with different spacing
console.log("\n=== ALTERNATIVE PRETTY PRINTING ===");
const prettyJson4Spaces = JSON.stringify(marioGame, null, 4);
console.log("With 4 spaces indentation:");
console.log(prettyJson4Spaces);

// 3. Converting back from JSON to JS object
console.log("\n=== 3. CONVERT BACK TO JS OBJECT ===");
const backToJS = JSON.parse(jsonString);
console.log("Converted back to JS object:");
console.log(backToJS);

// Verify it's the same
console.log("Are they equal?", JSON.stringify(marioGame) === JSON.stringify(backToJS));

// 4. Demonstrate different JSON.stringify parameters
console.log("\n=== 4. JSON.STRINGIFY PARAMETERS ===");

// Using replacer function
const jsonWithReplacer = JSON.stringify(marioGame, function(key, value) {
    if (key === 'speed') {
        return `${value} mph`; // Add units to speed
    }
    return value;
});
console.log("With replacer function (adding units to speed):");
console.log(jsonWithReplacer);

// Using replacer array (only include specific properties)
const jsonWithArray = JSON.stringify(marioGame, ['detail', 'characters', 'mario', 'description']);
console.log("\nWith replacer array (filtered properties):");
console.log(jsonWithArray);

// 5. Working with individual characters
console.log("\n=== 5. INDIVIDUAL CHARACTER JSON ===");
console.log("Mario character as JSON:");
console.log(JSON.stringify(marioGame.characters.mario, null, 2));

console.log("\nBowser character as JSON:");
console.log(JSON.stringify(marioGame.characters.bowser, null, 2));

console.log("\nPrincess Peach character as JSON:");
console.log(JSON.stringify(marioGame.characters.princessPeach, null, 2));

// 6. Demonstrate breakpoint for web inspector
console.log("\n=== 6. BREAKPOINT FOR DEBUGGING ===");
console.log("Setting up variables for debugging...");

// These variables will be visible in the debugger
const originalObject = marioGame;
const jsonStringForDebug = JSON.stringify(marioGame);
const prettyJsonForDebug = JSON.stringify(marioGame, null, 2);
const parsedBackObject = JSON.parse(jsonStringForDebug);

// Add breakpoint here - this is where you should set breakpoint in browser
debugger; // This will trigger breakpoint in browser developer tools

console.log("Check the debugger now!");
console.log("Variables to inspect:");
console.log("- originalObject");
console.log("- jsonStringForDebug");
console.log("- prettyJsonForDebug");
console.log("- parsedBackObject");

// 7. Error handling with JSON
console.log("\n=== 7. JSON ERROR HANDLING ===");
try {
    const invalidJson = '{"invalid": json}';
    const parsed = JSON.parse(invalidJson);
    console.log("Parsed:", parsed);
} catch (error) {
    console.log("JSON Parse Error:", error.message);
}

// 8. JSON with special characters
console.log("\n=== 8. JSON WITH SPECIAL CHARACTERS ===");
const specialCharObject = {
    message: "Hello \"World\"!",
    unicode: "🍄🏰👸",
    newline: "Line 1\nLine 2",
    backslash: "C:\\Games\\Mario"
};
console.log("Object with special characters:");
console.log(JSON.stringify(specialCharObject, null, 2));