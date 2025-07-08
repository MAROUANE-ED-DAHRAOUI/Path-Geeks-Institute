// Without regex
const form = document.querySelector("form");
const emailInput = document.querySelector('input[type="email"]');

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = emailInput.value.trim();

    // Simple validation without regex
    if (
        email.length > 5 &&
        email.includes("@") &&
        email.indexOf("@") > 0 &&
        email.includes(".") &&
        email.lastIndexOf(".") > email.indexOf("@") + 1 &&
        email.lastIndexOf(".") < email.length - 1
    ) {
        alert("Valid email!");
    } else {
        alert("Invalid email address.");
    }
});
