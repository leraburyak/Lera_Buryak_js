//task 1
let number = +prompt('Введите число');
alert('Твое число во 2й степени равно - ' + number ** 2);

//task 2
let firstNumber = +prompt('Введите 1-е число');
let secondNumber = +prompt('Введите 2-е число');
alert('Среднее арифметическое значение равно - ' + (firstNumber + secondNumber) / 2);

//task 3
let side = +prompt('Введите длину стороны квадрата');
alert('Площадь квадрата равна - ' + side ** 2);

//task 4
let kilometer = +prompt('Введите ваше расстояние в километрах');
const mile = 0.621371;
alert('Вы проехали ' + kilometer * mile + 'миль');

//task 5
let firstNumber = +prompt('Введите первое число');
let secondNumber = +prompt('Введите второе число');
alert('Сумма равна - ' 
+(firstNumber + secondNumber) 
+ '\nРазность равна - ' 
+(firstNumber - secondNumber) 
+ '\nПроизведение чисел равно - ' 
+(firstNumber * secondNumber) 
+ '\nЧастное равно - ' 
+(firstNumber / secondNumber));

//task6

let a = +prompt('Введите значиние для a');
let b = +prompt('Введите значение для b');
alert('x= '+ -a/b);

//task7
let hour = +prompt('Введите час');
let minute = +prompt('Введите минуты');
const hours = 23;
const minutes = 60;
alert('До конца дня осталось - ' +(hours - hour) +' часов и ' +(minutes - minute) +' минут'); 


//task8
let number = +prompt('Введите трехзначное число');
alert(Math.trunc((number / 10) % 10));


//task9
let firstNumber = +prompt('Введите пятизначное число');
let secondNumber = firstNumber % 10;
let number = Math.trunc(firstNumber / 10);
alert('Ваше число равно - ' + secondNumber + number);
  
//task10
let sumMonth = +prompt('Введите общую сумму продаж за месяц');
let sale = sumMonth / 100 * 10;
const salary = 250;
alert('Ваша зарплата  - ' + (sale + salary) +'$');

/* ================== Часть №2 =================== */

//task1
let yourName = prompt('Введите Ваше имя');
alert('Привет, ' + yourName + '!');

//task2
let year = +prompt('Введите Ваш год рождения');
const currentYear = 2021;
alert('Вам ' + (currentYear - year) + ' лет');

//task3
let side = +prompt('Введите длину стороны квадрата');
alert('Периметр квадрата равен - ' + side * 4);

//task4
let radius = +prompt('Введите радиус окружности');
let perimeter = (radius ** 2) * Math.PI;
alert('Периметр окружности равен - ' + perimeter.toFixed(2) + ' см.кв');

//task5

let distance = +prompt('Введите расстояние в километрах');
let hours = +prompt('Введите желаемое время пути в часах');
alert('Ваша скорость должна быть - ' + distance * hours +'км/ч');

//task6

let dollars = +prompt('Введите сумму в долларах');
const value = 0.83;
alert('Ваша сумму равна - ' +(dollars*value) + ' евро');

//task7

let volume = +prompt('Введите объем флеш-памяти в Гб');
const file = 0.82;
alert('На Вашу флеш-карту помещается ' +Math.trunc(volume/file) +' файлов размером 820Мб');

//task8
let sum = +prompt('Введите сумму денег в Вашем кошельке');
let price = +prompt('Введите стоимость одной шоколадки');
alert('Вы можете купить ' + (sum/price).toFixed(0) +' шоколадок, а Ваша сдача составит - ' +Math.trunc(sum % price) +'рублей');

//task9
let number = +prompt('Введите трехзначное число');
let numberThree = number % 10;
let numberTwo = ((number % 100) - numberThree) / 10;
let numberOne = Math.trunc((number / 1000) * 10);
alert('Ваше число - ' + `${numberThree}` + `${numberTwo}` + `${numberOne}`);

