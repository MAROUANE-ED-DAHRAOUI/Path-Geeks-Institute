let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter the first name: ", (name) => {
  name = name.toLowerCase();
  if (guestList[name])
    console.log(`Hi! I'm ${name} and I'm from ${guestList[name]}`);
  else
        console.log(`Hi! I'm a guest`);
  readline.close();
});

