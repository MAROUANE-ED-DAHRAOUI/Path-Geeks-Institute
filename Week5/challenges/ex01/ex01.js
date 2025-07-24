// Function 1: makeAllCaps
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        // Check if input is an array
        if (!Array.isArray(words)) {
            reject("Input must be an array");
            return;
        }
        
        // Check if all elements in the array are strings
        const allStrings = words.every(word => typeof word === 'string');
        
        if (allStrings) {
            // If all words are strings, uppercase them and resolve
            const uppercasedWords = words.map(word => word.toUpperCase());
            resolve(uppercasedWords);
        } else {
            // If not all words are strings, reject with reason
            reject("All elements in the array must be strings");
        }
    });
}

// Function 2: sortWords
function sortWords(words) {
    return new Promise((resolve, reject) => {
        // Check if input is an array
        if (!Array.isArray(words)) {
            reject("Input must be an array");
            return;
        }
        
        // Check if array length is bigger than 4
        if (words.length > 4) {
            // If array length > 4, sort alphabetically and resolve
            const sortedWords = words.sort();
            resolve(sortedWords);
        } else {
            // If array length <= 4, reject with reason
            reject("Array length must be bigger than 4");
        }
    });
}


//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))