let numbers = [123, 8409, 100053, 333333333, 7];

// 1-> Loop through the array above and determine whether or not each number is divisible by three.
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        console.log(`${numbers[i]} is divisible by 3`);
    } else {
        console.log(`${numbers[i]} is not divisible by 3`);
    }
}

// 2->Each time you loop console.log true or false.
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}