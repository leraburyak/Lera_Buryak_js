//1
let result = 0;
function increaseCounter(el) {
  result ++;
  el.innerHTML = "Вы нажали кнопку:" + result;
};

//2
let buttonClick = 0;
function makeCounterPlus() {
  buttonClick ++;
  document.querySelector('.button_plus').innerHTML = buttonClick;
}
function makeCounterMinus() {
  buttonClick --;
  document.querySelector('.button_minus').innerHTML = buttonClick;
}
button_plus.addEventListener("click", makeCounterPlus);
button_minus.addEventListener("click", makeCounterMinus);


//  
//  let newList = function makeTodo(value) {
// let input = document.getElementById('todo_input');
// let newTodoList = input.value;
// input.value = "";
// if(newTodoList !== "") {
// let ul = document.createElement("ul")
// let li = document.createElement('li');
//  li.innerHTML = valueInput;
//  listTodo.appendChild(ul);
//  ul.append(li);
// let listTodo = document.querySelector('.makeTodo');
// }
//  }
// todo.addEventListener("click", newList);



/
