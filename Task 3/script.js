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