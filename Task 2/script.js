console.log("1" + 2 + 0) // ответ - 120 - знак сложения - если по одну из сторон будет строка,то все выражение будет клеиться в одну строку в рамках приоритета;
console.log("1" - 1 + 2) //ответ - 2 - единица приводится к числу;
console.log(true + false) // ответ - 1; true  - 1, а false - 0;
console.log(10 / "5") //ответ - 2; 5 приводится к числу;
console.log("2" * "3")//ответ - 6; 2 и 3 приводятся к числу;
console.log(4 + 5 + "px") //ответ - 9px; бинарный оператор '+' применен к строке "px", поэтому он их объединяет в одну;
console.log("$" + 4 + 5) //ответ  - $45; 
console.log("42" - 2) //ответ - 40;
console.log("4px" - 2) //ответ NaN; строка "4px" не может быть явно приведена к числу, то результатом преобразования будет NaN
console.log(7 / 0) //ответ - Infinity; деление на ноль возвращает Infinity в JavaScript
console.log("-9 \n" + 5) //ответ - -9 и 5; произведен перенос строки
console.log("-9 \n" - 5) //ответ - -14;
console.log(5 && 2) //ответ  - 2; Если первый операнд истинный, И возвращает второй;
console.log(2 && 5) //ответ - 5; см. ответ выше
console.log(5 || 0) //ответ - 5; Каждый операнд конвертирует в логическое значение. Если результат true, останавливается и возвращает исходное значение этого операнда.
console.log(0 || 5) //ответ - 5; 5 является первым истинным значением
console.log(null + 1) //ответ - 1; null - 0;
console.log(undefined + 1) // ответ - NaN; невозможность проведения математической операции
console.log(null == "\n0\n") //ответ - false
console.log(+null == +"\n0\n") //ответ - true, т.к. строка приведена в числу


//task1
// let number = +prompt('Введите число');
// if (number > 0) alert('Ваше число положительное');
// if (number < 0) alert('Ваше число отрицательное');
// if (number === 0) alert('Ваше число равно нулю');

// //task

// let year = +prompt('Введите ваш год рождения');
// if (year >= 120) {
//   alert('Вас не существует');
// } else if (year <= 0) {
//   alert('Вы еще не родились');
// } else {
//   alert('Вам '+ year +' лет!');
// };

//task3
// let number = +prompt('Введите число');
// alert(Math.abs(number));


//task4
let hours = +prompt('Который сейчас час?');
if (hours < 0 && hours > 24) {
  alert('Введите корректорные данные');
}

// let minutes = +prompt('Сколько минут?');
// let second = +prompt('Введите количество секунд?');
// if (hours < 0 && hours > 23) {
//   // alert('Введите корректорные данные');
//   console.log(hours);
// } else if (minutes < 0 || minutes > 60) {
//   alert('Введите корректорные данные');
// } else if (second < 0 || second > 60) {
//   alert('Введите корректорные данные');
// } else {
//   alert('Сейчас' +hours + minutes + second);
// };