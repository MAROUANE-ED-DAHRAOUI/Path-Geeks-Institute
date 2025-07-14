const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Part 1: Display colors with their position numbers
console.log("=== DISPLAYING COLORS WITH NUMBERS ===");
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// Part 2: Check if "Violet" exists in the array
console.log("\n=== CHECKING FOR VIOLET ===");
if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}
