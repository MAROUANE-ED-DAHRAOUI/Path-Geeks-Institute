// 1-> Declare a global variable named allBoldItems.
let allBoldItems = document.querySelectorAll("strong");

// 2-> Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBoldItems()
{
    allBoldItems = document.querySelectorAll("strong");
    console.log(allBoldItems);
}

// 3-> Create a function called highlight() that changes the color of all the bold text to blue.
function highlight()
{
    allBoldItems.forEach(item => {
        const paragraph = document.querySelector("p");
        paragraph.addEventListener("mouseover", highlight);
        item.style.color = "blue";
    });
}

// 4-> Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
function returnItemsToDefault()
{
    allBoldItems.forEach(item => {
    const paragraph = document.querySelector("p");
    paragraph.addEventListener("mouseout", returnItemsToDefault);
        item.style.color = "black";
    });
}

highlight();
returnItemsToDefault();
