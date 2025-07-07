// 1-> Retrieve the form and console.log it.
const form = document.querySelector("form");
console.log(form);

// 2-> Retrieve the inputs by their id and console.log them.
const nameInput = document.getElementById("fname");
const Lname = document.getElementById("lname");
console.log(nameInput, Lname);

// 3-> Add an event listener to the form that will log the values of the inputs when submitted.
form.addEventListener("submit", function(event) 
{
    event.preventDefault();
    console.log("First Name:", nameInput.value);
    console.log("Last Name:", Lname.value);
});

// 4->

const Form = document.querySelector("form");
const inputname = document.getElementById("fname");
const inputLname = document.getElementById("lname");
const usersAnswer  = document.querySelector(".usersAnswer");

Form.addEventListener("submit", function(event){
    event.preventDefault();
    
    const name = inputname.value.trim();
    const Lname = inputLname.value.trim();

    if (name === "" || Lname === "")
    {
        alert("Please fill in all fields.");
        return;
    }

    const li1 = document.createElement("li");
    li1.textContent = name;
    const li2 = document.createElement("li");
    li2.textContent = Lname;

    usersAnswer.appendChild(li1);
    usersAnswer.appendChild(li2);

});