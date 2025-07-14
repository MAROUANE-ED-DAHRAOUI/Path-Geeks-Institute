function makeJuice(size_beverage) 
{
    function addIngredients(size_drink, first_ingredient, second_ingredient, third_ingredient) 
    {
        const result = `The client wants a ${size_drink} juice, containing ${first_ingredient}, ${second_ingredient}, ${third_ingredient}`;
        document.body.innerHTML = `<h2>${result}</h2>`;
    }

    addIngredients(size_beverage, "apple", "banana", "orange");
}

// Invoke the outer function in the global scope
makeJuice("large");


function makeJuice(size_beverage)
{
    const ingredients = [];
    
    function addIngredients(first_ingredient, second_ingredient, third_ingredient)
    {
        // Push ingredients into the ingredients array
        ingredients.push(first_ingredient, second_ingredient, third_ingredient);
    }
    
    function displayJuice()
    {
        // Display the juice with all ingredients
        const result = `The client wants a ${size_beverage} juice, containing ${ingredients.join(', ')}`;

        document.body.innerHTML = `<h2>${result}</h2>`;
    }
    
    // Invoke addIngredients function TWICE (6 ingredients total)
    addIngredients("apple", "banana", "orange");
    addIngredients("mango", "pineapple", "strawberry");
    
    // Invoke displayJuice function ONCE
    displayJuice();
}

// Invoke the outer function in the global scope
makeJuice("medium");