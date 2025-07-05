function changeEnough(itemPrice, amountOfChange)
{
    let change = [
        0.25,
        0.10,
        0.05,
        0.01
    ];
    let totalChange = 0;
    for(let i = 0; i < amountOfChange.length; i++)
    {
        totalChange += amountOfChange[i] *change[i];
    }
    return totalChange >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0])); // true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false
