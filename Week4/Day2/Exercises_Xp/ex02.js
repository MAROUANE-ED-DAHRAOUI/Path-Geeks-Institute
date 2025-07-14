const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

// Method 1: Using forEach with ternary operator
console.log("=== DISPLAYING COLORS WITH ORDINAL SUFFIXES ===");
colors.forEach((color, index) => {
    const position = index + 1;
    const suffix = position <= 3 ? ordinal[position] : ordinal[0];
    console.log(`${position}${suffix} choice is ${color}.`);
});

// Method 2: More comprehensive ordinal logic (handles 11th, 12th, 13th correctly)
console.log("\n=== ALTERNATIVE METHOD WITH BETTER ORDINAL LOGIC ===");
colors.forEach((color, index) => {
    const position = index + 1;
    let suffix;
    
    if (position >= 11 && position <= 13)
    {
        suffix = ordinal[0];
    }
    else
    {
        const lastDigit = position % 10;
        suffix = lastDigit <= 3 ? ordinal[lastDigit] : ordinal[0];
    }
    
    console.log(`${position}${suffix} choice is ${color}.`);
});

// Method 3: Using ternary operator chain (more compact)
console.log("\n=== USING TERNARY OPERATOR CHAIN ===");
colors.forEach((color, index) => {
    const position = index + 1;
    const suffix = position === 1 ? ordinal[1] : 
                  position === 2 ? ordinal[2] : 
                  position === 3 ? ordinal[3] : ordinal[0];
    console.log(`${position}${suffix} choice is ${color}.`);
});