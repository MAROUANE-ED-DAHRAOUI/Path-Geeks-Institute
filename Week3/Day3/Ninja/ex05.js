function uniqueElements(arr) 
{    
    // ... creates a new Set from the array, which automatically removes duplicates
    return [...new Set(arr)];
}

// Example usage:
const list = [1,2,3,3,3,3,4,5];
const newList = uniqueElements(list);
console.log(newList); // [1, 2, 3, 4, 5]