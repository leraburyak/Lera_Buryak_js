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

//task 6
let tooltipElem;

    document.onmouseover = function(event) {
      let target = event.target;
      let tooltipHtml = target.dataset.tooltip;
      if (!tooltipHtml) return;
      tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = tooltipHtml;
      document.body.append(tooltipElem);

      // спозиционируем его сверху от аннотируемого элемента (top-center)
      let coords = target.getBoundingClientRect();

      // let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      // if (left < 0) left = 0; // не заезжать за левый край окна

      //let top = coords.top - tooltipElem.offsetHeight - 5;
      //if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
        //top = coords.top + target.offsetHeight + 5;
      //}

      //tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(e) {

      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
      }

    };

      let showbutton = document.getElementById('showtext');
      let text = document.getElementById('text');

      showbutton.addEventListener("click", () => {
      text.style.display = "block"
    })

    showbutton.addEventListener("click", () => {
    text.style.display = "none"
    })