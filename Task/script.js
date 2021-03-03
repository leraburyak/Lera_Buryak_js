//Task 1

let result = 0;
document.querySelector('#button1').onclick = function addLike() {
  result++;
  document.querySelector('.like').textContent = "Like: " + result;
};

//Task2

document.querySelector('.textLorem').oncontextmenu = function (e) {
  e.preventDefault();
};

//Task 3
let elem = document.getElementById('mouseElem');

document.addEventListener('mousemove', function (event) {
  elem.innerHTML = 'X = ' + event.clientX + ' Y = ' + event.clientY;
});

//Task 4
document.querySelector('.generate').onclick = function ranNum() {
  let numberRan = (Math.round(Math.random() * 100) + 1)
  document.querySelector('.randomNumber').textContent = "Random number:" + numberRan;
}

//Task 5
let list = document.querySelectorAll('.bookList li');

function setSelected() {
  document.querySelectorAll('.bookList li.selected').forEach(function (el) {
    el.classList.remove('selected');
  });
  this.classList.add('selected');
}
list.forEach(function (li) {
  li.onclick = setSelected;
});
list.onmousedown = function () {
  return false;
};