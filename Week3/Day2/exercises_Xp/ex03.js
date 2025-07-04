const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function AskForNumber() {
    readline.question('Please enter a number: ', (input) => {
        let number = Number(input);
        if(typeof number === "number" && !isNaN(number)) 
        {
            if(number >= 10) 
            {
                console.log(`You entered a valid number: ${number}`);
                readline.close();
            } 
            else
            {
                AskForNumber();
            }
        }
        else 
        {
            console.log("Invalid input. Please enter a valid number.");
            AskForNumber();
        }
    });
}

AskForNumber();