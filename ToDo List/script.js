let newMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');

let addListItem = function() {
let valueInput = newMessage.value;
newMessage.value = "";
let wrapperToDo = document.querySelector(".wrapper");
let ul = document.createElement('ul');
let li = document.createElement('li');
li.innerHTML = valueInput;
wrapperToDo.appendChild(ul);
ul.appendChild(li);
};

addButton.addEventListener("click", addListItem);