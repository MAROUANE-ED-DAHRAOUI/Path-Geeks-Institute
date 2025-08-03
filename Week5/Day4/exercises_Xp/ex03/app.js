const { readFile, writeFile } = require("./fileManager");

const readContent = readFile("Hello World.txt");
console.log("contenu du fichier est :", readContent);

const contentWrite = writeFile(
  "Bye World.txt",
  "Ecriture dans le fichier Bye World.txt"
);
const resultWrite = readFile("Bye World.txt", contentWrite);
console.log("contenu du fichier écrit :", resultWrite);