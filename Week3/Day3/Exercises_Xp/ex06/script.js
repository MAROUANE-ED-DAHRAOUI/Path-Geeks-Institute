const navBar = document.getElementById('navBar');
navBar.setAttribute("id", "socialNetworkNavigation");

const add_new_li = document.createElement('li');
const new_text = document.createnewTextNode('Logout');
add_new_li.appendChild(new_text);

const ul = document.querySelector('ul');
ul.appendChild(add_new_li);

const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log(firstLi.textContent);
console.log(lastLi.textContent);