isString= (value) => {
    return typeof value === 'string' ? true : false;
    // Alternatively, you can simply return typeof value === 'string';
}

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false