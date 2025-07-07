// 1-> Using a DOM property, retrieve the h1 and console.log it.
const h1 = document.querySelector("h1");
console.log(h1);

// 2-> Using DOM methods, remove the last paragraph in the <article> tag.
const article = document.querySelector("article");
const lastParagraph = article.querySelector("p:last-child");
if (lastParagraph) {
    lastParagraph.remove();
}

// 3-> Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2 = document.querySelector("h2");
h2.addEventListener("click", function(){
    h2.style.backgroundColor = "red";
});

// 4-> Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3 = document.querySelector("h3");
h3.addEventListener("click", function(){
    h3.style.display = "none";
});

// 5-> Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const button = document.createElement("button");
button.textContent = "Make Text Bold";
button.addEventListener("click", function() {
    const paragraphs = article.querySelectorAll("p");
    paragraphs.forEach(p => {
        p.style.fontWeight = "bold";
    });
});
document.body.appendChild(button);
