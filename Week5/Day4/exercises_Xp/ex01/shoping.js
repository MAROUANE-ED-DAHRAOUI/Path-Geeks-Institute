const products = require("./products");

//function pour trouver un produit par son name
function findProductByName(productName) {
  const product = products.find((item) => item.name === productName);
  if (product) {
    console.log(
      `Product found: ${product.name}, Price: ${product.price}, Category: ${product.category}`
    );
  } else {
    console.log("Product not found");
  }
}
findProductByName("Laptop");
findProductByName("Shoes");