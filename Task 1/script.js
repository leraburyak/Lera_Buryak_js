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
let hours = +prompt('Введите час');
let minutes = +prompt('Введите минуты');


//task8
let number = +prompt('Введите трехзначное число');
alert(Math.trunc((number / 10) % 10));


//task9
//  let number = +prompt('Введите пятизначное число');
//  let newNumber = number.toString + number.slice(0,4);
//  alert('Новое число - ' + newNumber);
  