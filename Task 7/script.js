// //1
// let result = 0;
// function increaseCounter(el) {
//   result ++;
//   el.innerHTML = "Вы нажали кнопку:" + result;
// };

// //2
// let buttonClick = 0;
// function makeCounterPlus() {
//   buttonClick ++;
//   document.querySelector('.button_plus').innerHTML = buttonClick;
// }
// function makeCounterMinus() {
//   buttonClick --;
//   document.querySelector('.button_minus').innerHTML = buttonClick;
// }
// button_plus.addEventListener("click", makeCounterPlus);
// button_minus.addEventListener("click", makeCounterMinus);

// //3
// let input = document.getElementById('input');
// let button = document.getElementById('button');
// let ul = document.createElement('ul');
// // let newTodoList = input.value;

// function clickOnButton() {
//   let li = document.createElement('li');
//   let valueInput = input.value;
//   li.innerHTML = valueInput;
//   document.body.appendChild(ul);
//   ul.appendChild(li);
//   input.value = '';
// };

let student = [
  {name: 'AAA', enrollment: 50},
  {name: 'BBB', enrollment: 50},
  {name: 'CCC', enrollment: 50},
  {name: 'DDD', enrollment: 100},
  {name: 'GGG', enrollment: 100},
  {name: 'FFF', enrollment: 100},
];

let output = {
  50: [{name: 'AAA', enrollment: 50},
      {name: 'BBB', enrollment: 50},
      {name: 'CCC', enrollment: 50}],
  100: [{name: 'DDD', enrollment: 100},
       {name: 'GGG', enrollment: 100},
       {name: 'FFF', enrollment: 100}],
};

function createObj(arr) {
  return arr.reduce(acc, item => {
     acc[item.enrollment] = [item];
    return acc;
  }, {});
}
console.log(createObj(student));



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

let first = document.getElementById('input1');
let second = document.getElementById('input2');
let result = document.getElementById('result');
function sum() {
  let res = +first.value + +second.value;
  result.value = res;
}



