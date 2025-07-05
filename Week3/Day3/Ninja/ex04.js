function biggestNumberInArray(arrayNumber) {
    // Filter out non-numbers, then find the max, or return 0 if array is empty or has no numbers
    const numbers = arrayNumber.filter(item => typeof item === 'number');
    if (numbers.length === 0) 
        return 0;
    return Math.max(...numbers);
}

const array = [-1,0,3,100,99,2,99];
const array2 = ['a', 3, 4, 2];
const array3 = [];

console.log(biggestNumberInArray(array));   // 100
console.log(biggestNumberInArray(array2));  // 4
console.log(biggestNumberInArray(array3));  // 0