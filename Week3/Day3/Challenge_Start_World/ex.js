const prompt = require('prompt-sync')();


function printWords() 
{
    const words = prompt("Enter a list of words separated by commas: ").split(", ").map(word => word.trim());
    const len_max = Math.max(...words.map(word => word.length));

    const border = '*'.repeat(len_max + 4);
    console.log(border);
    words.forEach(word => {
        console.log(`* ${word.padEnd(len_max)} *`);
    });
    console.log(border);
}

printWords();