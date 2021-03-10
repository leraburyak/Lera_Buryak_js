let newMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');

let addListItem = function () {
    let valueInput = newMessage.value;
    newMessage.value = "";
    let wrapperToDo = document.querySelector(".wrapper");
    let li = document.createElement('li');
    li.innerHTML = "<span>" + valueInput + "</span>";
    li.innerHTML += '<button class="edit" onclick = "edit(this)">изменить</button>';
    li.innerHTML += '<button onclick = "this.parentElement.remove();">удалить</button>';
    wrapperToDo.appendChild(li);
};

addButton.addEventListener("click", addListItem);

function edit(el) {
    let parent = el.parentElement;
    let text = parent.querySelector('span').textContent;
    parent.innerHTML = '<input type="text" value = "' + text + '">';
    parent.innerHTML += '<button class="save" onclick = "save(this)">Сохранить</button>';
}

function save(el) {
    let li = el.parentElement;
    let inputText = el.parentElement.querySelector('input').value;
    li.innerHTML = "<span>" + inputText + "</span>";
    li.innerHTML += '<button class="edit" onclick = "edit(this)">изменить</button>';
    li.innerHTML += '<button onclick = "this.parentElement.remove();">удалить</button>';
}