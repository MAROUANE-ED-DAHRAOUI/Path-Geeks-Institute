// Part I: Alert "Hello World" after 2 seconds
setTimeout(function() {
    alert("Hello World");
}, 2000);

// Part II: Add <p>Hello World</p> to #container after 2 seconds
setTimeout(function() {
    const container = document.getElementById('container');
    const p = document.createElement('p');
    p.textContent = "Hello World";
    container.appendChild(p);
}, 2000);

// Part III: Add <p>Hello World</p> every 2 seconds, stop at 5 or on button click
const container = document.getElementById('container');
const clearBtn = document.getElementById('clear');
let count = 0;

const intervalId = setInterval(function() {
    if (count >= 5) {
        clearInterval(intervalId);
        return;
    }
    const p = document.createElement('p');
    p.textContent = "Hello World";
    container.appendChild(p);
    count++;
}, 2000);

clearBtn.addEventListener('click', function() {
    clearInterval(intervalId);
});