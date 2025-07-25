const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

// Function 1: toJs()
function toJs() {
    return new Promise((resolve, reject) => {
        try {
            // Convert JSON string to JavaScript object
            const morseJS = JSON.parse(morse);
            
            // Check if the object is empty
            if (Object.keys(morseJS).length === 0) {
                reject("Morse object is empty");
            } else {
                resolve(morseJS);
            }
        } catch (error) {
            reject("Failed to parse morse JSON: " + error.message);
        }
    });
}

// Function 2: toMorse(morseJS)
function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        // Ask user for input
        const userInput = prompt("Enter a word or sentence to translate to Morse code:");
        
        // Check if user cancelled or entered empty string
        if (userInput === null || userInput === "") {
            reject("No input provided");
            return;
        }
        
        // Convert to lowercase for consistency
        const inputLower = userInput.toLowerCase();
        const morseArray = [];
        
        // Check each character
        for (let char of inputLower) {
            // Skip spaces
            if (char === ' ') {
                morseArray.push(' '); // Add space to separate words
                continue;
            }
            
            // Check if character exists in morse object
            if (morseJS[char]) {
                morseArray.push(morseJS[char]);
            } else {
                reject(`Character "${char}" doesn't exist in morse code`);
                return;
            }
        }
        
        resolve(morseArray);
    });
}

// Function 3: joinWords(morseTranslation)
function joinWords(morseTranslation) {
    // Join the morse translation with line breaks
    const morseString = morseTranslation.join('\n');
    
    // Display on the DOM
    const outputDiv = document.getElementById('morse-output') || createOutputDiv();
    outputDiv.innerHTML = `<pre>${morseString}</pre>`;
    
    // Also log to console
    console.log("Morse Translation:");
    console.log(morseString);
    
    return morseString;
}

// Helper function to create output div if it doesn't exist
function createOutputDiv() {
    const div = document.createElement('div');
    div.id = 'morse-output';
    div.style.cssText = `
        margin: 20px;
        padding: 20px;
        border: 2px solid #333;
        background-color: #f0f0f0;
        font-family: monospace;
        font-size: 18px;
        line-height: 1.5;
    `;
    document.body.appendChild(div);
    return div;
}

// Chain the three functions
console.log("Starting Morse Code Translator...");

toJs()
    .then((morseJS) => {
        console.log("Morse object loaded successfully");
        return toMorse(morseJS);
    })
    .then((morseTranslation) => {
        console.log("Translation successful:", morseTranslation);
        return joinWords(morseTranslation);
    })
    .catch((error) => {
        console.error("Error:", error);
        // Display error on DOM as well
        const outputDiv = document.getElementById('morse-output') || createOutputDiv();
        outputDiv.innerHTML = `<div style="color: red;">Error: ${error}</div>`;
    });

// Alternative version for Node.js (without prompt and DOM)
function nodeJsVersion() {
    const readline = require('readline');
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    function toMorseNodeJs(morseJS) {
        return new Promise((resolve, reject) => {
            rl.question('Enter a word or sentence to translate to Morse code: ', (userInput) => {
                if (!userInput) {
                    reject("No input provided");
                    return;
                }
                
                const inputLower = userInput.toLowerCase();
                const morseArray = [];
                
                for (let char of inputLower) {
                    if (char === ' ') {
                        morseArray.push(' ');
                        continue;
                    }
                    
                    if (morseJS[char]) {
                        morseArray.push(morseJS[char]);
                    } else {
                        reject(`Character "${char}" doesn't exist in morse code`);
                        return;
                    }
                }
                
                resolve(morseArray);
            });
        });
    }
    
    function joinWordsNodeJs(morseTranslation) {
        const morseString = morseTranslation.join('\n');
        console.log("\nMorse Translation:");
        console.log(morseString);
        rl.close();
        return morseString;
    }
    
    // Chain for Node.js
    toJs()
        .then((morseJS) => {
            console.log("Morse object loaded successfully");
            return toMorseNodeJs(morseJS);
        })
        .then((morseTranslation) => {
            console.log("Translation successful");
            return joinWordsNodeJs(morseTranslation);
        })
        .catch((error) => {
            console.error("Error:", error);
            rl.close();
        });
}

// Test functions with predefined input (for demonstration)
function testWithPredefinedInput(testWord) {
    console.log(`\nTesting with word: "${testWord}"`);
    
    function toMorseTest(morseJS, word) {
        return new Promise((resolve, reject) => {
            const inputLower = word.toLowerCase();
            const morseArray = [];
            
            for (let char of inputLower) {
                if (char === ' ') {
                    morseArray.push(' ');
                    continue;
                }
                
                if (morseJS[char]) {
                    morseArray.push(morseJS[char]);
                } else {
                    reject(`Character "${char}" doesn't exist in morse code`);
                    return;
                }
            }
            
            resolve(morseArray);
        });
    }
    
    toJs()
        .then((morseJS) => toMorseTest(morseJS, testWord))
        .then((morseTranslation) => {
            console.log("Morse array:", morseTranslation);
            const result = morseTranslation.join('\n');
            console.log("Formatted output:");
            console.log(result);
            return result;
        })
        .catch((error) => {
            console.error("Test Error:", error);
        });
}

// tests
testWithPredefinedInput("Hello");
testWithPredefinedInput("World");
testWithPredefinedInput("SOS");
