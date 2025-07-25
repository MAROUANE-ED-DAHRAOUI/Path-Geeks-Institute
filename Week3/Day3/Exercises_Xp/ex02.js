const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
};

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill()
{
    let total = 0;
    for(let i = 0; i < shoppingList.length; i++)
    {
        const item = shoppingList[i];
        if(item in stock)
        {
            total += prices[item];
        }
        else
        {
            console.log(`${item} is not available`);
        }
    }
    return total;
}

const result = myBill();
console.log("Total bill:", result);
