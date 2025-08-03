const fs = require("fs");

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data;
  } catch (err) {
    console.error("Erreur lors de la lecture du fichier :", err);
  }
}

function writeFile(filePath, Contenu) {
  try {
    fs.writeFileSync(filePath, Contenu, "utf8");
    console.log("Fichier écrit avec succès !");
  } catch (err) {
    console.error("Erreur lors de l'écriture dans le fichier :", err);
  }
}

module.exports = { readFile, writeFile };
