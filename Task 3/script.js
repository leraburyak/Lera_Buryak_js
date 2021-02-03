//task1

let a = +prompt('Введите число');
let b = +prompt('Введите число');
let sum = 0;
for ( ; a <= b; a++) {
  sum += a;
}
alert(sum);

//task2 

let a = +prompt('Введите число');
let b = +prompt('Введите число');
let d = 0;
if(a > b) {
  min = b; 
} else {
  min = a;
};
for(i = 1; i <= min; i++) {
  if(a % i == 0 && b % i == 0) {
    d = i;
  };
}; 
alert(d);

//task3
let a = +prompt('Введите число');
for (i = 1; i <= a; i++) {
  if (a % i == 0) {
    alert(i);
  };
};

//task4
let a = +prompt('Введите число');
let b = 0;
while (a >= 1) {
  a /= 10;
  b++;
};
alert(b);

//task5
let num = +prompt('Введите 10 чисел','');
if(num > 0) alert('Ваше число положительное');
if(num < 0) alert('Ваше число отрицателное');
if(num / 2 == 0) alert('Ваше число четное');
if(num / 2 !== 0) alert('Ваше число нечетное');

//task6
let firstNum = +prompt('Введите первое число');
let operation = prompt('Введите знак арифметической операции: + - * /');
let secondNum = +prompt('Введите второе число');
switch(operation) {
  case '+':
    alert(firstNum + secondNum);
    break;
  case '-':
    alert(firstNum - secondNum);
    break;
  case '*':
    alert(firstNum * secondNum);
    break;
  case '/':
    alert(firstNum / secondNum);
    break;
  default:
    alert('Я туп, я не умею решать твои примеры, считай в уме');
}

//task8
let day = prompt('Введите день недели');
switch(day) {
    case 'Понедельник':
    case 'понедельник':
    alert('Завтра будет вторник');
    case 'Вторник':
    case 'вторник':
    alert('Завтра будет среда');
    case 'Среда':
    case 'среда':
    alert('Завтра будет четверг');
    case 'Четверг':
    case 'четверг':
    alert('Завтра будет пятница');
    case 'Пятница':
    case 'пятница':
    alert('Завтра будет суббота');
    case 'Суббота':
    case 'суббота':
    alert('Завтра будет воскресенье');
    case 'Воскресенье':
    case 'воскресенье':
    alert('Завтра будет понедельник');
    default:
    alert('Вы не знаете и мы не знаем');
};

//task9
for (i = 1; i <= 10; i++) {
  for (j = i; j <= 10; j++) {
    alert(i * j);
  };
};

//task 10
// let num = +prompt('Введите число от 0 до 100');

//task11

let num = +prompt('Введите число');
let a = 1;
for(i = 0; i < num; i++) {
  a = a * (num - i);
};
alert(a);