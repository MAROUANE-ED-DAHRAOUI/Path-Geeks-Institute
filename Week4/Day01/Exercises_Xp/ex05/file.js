//  Function Declaration:
// Hoisted: Can be called before its definition.
// Named: Always has a name.
// Defined with the function keyword at the top level.

function FunKlGr(kilograms)
{
    return kilograms * 1000;
}

console.log(FunKlGr(5)); // 5000 Grams



// Function Expression:
// Not hoisted: Can only be called after it’s defined.
// Can be anonymous or named.
// Stored in a variable or constant.
const FunKlGr = (kilograms) => {
    return kilograms * 1000;
}

console.log(FunKlGr(5)); // 5000 Grams

