//Дан массив с числами. Найдите сумму этих чисел.

let arr = [4, 7, 5, 79, 0, 58, 77];

let sum = arr.reduce(function (acc, currentValue) {
      return acc + currentValue;
  }, 0);
console.log(sum);

let sum = arr.reduce((index, current) => index + current)
//Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.

let numNull = arr.findIndex(item => item === 0);

let sumElNull = arr.reduce(function (acc, currentValue, index) {
  if (index < numNull) {
    return (acc += currentValue);
  }
  return acc;
}, 0);
console.log(sumElNull);

//Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0.
let sumNull = arr.findIndex(item => item === 0);

let sumNullEl = arr.reduce(function (acc, currentValue, index) {
  if (index > sumNull) {
    return (acc += currentValue);
  }
  return acc;
}, 0);
console.log(sumNullEl);

//Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
let num  = 1; //счетчик
let numReduce = arr.reduce(function(acc, currentValue) {
if(acc > 10) {
  console.log(num);
  return;
} else {
  num++;
  return acc + currentValue;
}
},);

//Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти.
let num  = 1; //счетчик
let numReduce = arr.reduceRight(function(acc, currentValue) {
if(acc > 10) {
  console.log(num);
  return;
} else {
  num++;
  return acc + currentValue;
}
},);