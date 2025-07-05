function isOmnipresent(arr, value) 
{
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // If the current element is an array, check it recursively
            if (!isOmnipresent(arr[i], value)) {
                return false;
            }
        }
    }
    // If we reach here, the value is present in all sub-arrays
    return true;
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));