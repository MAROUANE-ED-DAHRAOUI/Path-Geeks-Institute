// 1. Display the value of the selected option
const select = document.getElementById('genres');
console.log(select.value); // or display it on the page if you want

// 2. Add a new option "Classic" and select it by default
const newOption = document.createElement('option');
newOption.value = 'classic';
newOption.textContent = 'Classic';
select.appendChild(newOption);

// 3. (Optional) If you want to see the new selected value:
console.log(select.value);
