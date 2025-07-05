// 1. Retrieve the div and console.log it
const div = document.getElementById('container');
console.log(div);

// 2. Change the name "Pete" to "Richard"
const lists = document.querySelectorAll('.list');
lists[0].children[1].textContent = 'Richard';

// 3. Delete the second <li> of the second <ul>
lists[1].children[1].remove();

// 4. Change the name of the first <li> of each <ul> to your name
lists.forEach(list => {
    list.children[0].textContent = 'khalid';
});

// 5. Add a class called student_list to both of the <ul>'s
lists.forEach(list => {
    list.classList.add('student_list');
});

// 6. Add the classes university and attendance to the first <ul>
lists[0].classList.add('university', 'attendance');

// 7. Add a "light blue" background color and some padding to the <div>
div.style.backgroundColor = 'lightblue';
div.style.padding = '10px';

// 8. Do not display the <li> that contains the text node "Dan"
const danItem = Array.from(lists[1].children).find(li => li.textContent === 'Dan');
if (danItem) {
    danItem.style.display = 'none';
}

// 9. Add a border to the <li> that contains the text node "Richard"
const richardItem = Array.from(lists[0].children).find(li => li.textContent === 'Richard');
if (richardItem) {
    richardItem.style.border = '1px solid black';
}

// 10. Change the font size of the whole body
document.body.style.fontSize = '18px';
