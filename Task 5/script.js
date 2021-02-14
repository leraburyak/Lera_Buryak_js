// //1 В массиве, состоящем из n элементов, 
// //вычислить: –номер минимального элемента массива;–
// //сумму модулей элементов массива, расположенных после первого
// //отрицательного элемента.

// let num = [25, 58, 57, 88, 12, -75, 15.3, 0, 72, 22, 69];
// let min = 0;
// for (let i = 0; i < num.length; i++) {
//   if (num[i] <= min) {
//     min = num[i];
//   };
// };
// console.log(min);


// min = [0];

// num.forEach(item => {
//   if (item < min) {
//     min = item;
//   }
// });

// let minIndex = num.findIndex(a => a === min);

// console.log(min, minIndex);



// let sum = 0;
// for (i = 0; i < num.length; i++) {
//   sum += Math.abs(num[i]);
//   if (num[i] < 0) {
//     sum = 0;
//   };
// };
// console.log(sum);

// // var element = [8, -2, 5, 19, 1];
// // var minIndex=element.findIndex(a=> a<0);
// // let sum =element.reduce(function(acc, currentValue, index) {
// //     if (index>minIndex) {
// //         return acc+ Math.abs( currentValue);
// //     }
// //     return acc

// // },0);

// // console.log(sum);

// // 2 В массиве, состоящем из n элементов,
// // вычислить: –номер максимального элемента массива;–
// // сумму элементов массива, расположенных после первого положительного элемента.
// let max = 0;
// for (i = 0; i < num.length; i++) {
//   if (num[i] > max) {
//     max = num[i];
//   };
// };
// console.log(max);

// let positivSum = 0;
// for (i = 0; i < num.length; i++) {
//   //  maxSum += num[i]
//   if (num[i] > 0) {
//     positivSum += num[i];
//   }
// };
// console.log(positivSum);

// // 3 В массиве, состоящем из n элементов, вычислить: –количество элементов массива, лежащих в диапазоне от А до В;–
// // сумму элементов массива, расположенных после максимального
// // элемента.
// let a = 0;
// let b = 25;
// let result = [];
// for (i = 0; i < num.length; i++) {
//   if (num[i] >= a && num[i] <= b) {
//     result.push(num[i]);
//   }
// }
// console.log(result);

// let sumMax = 0;
// max = 0;
// for (i = 0; i < num.length; i++) {
//   sumMax += num[i];
//   if (num[i] > max) {
//     max = num[i];
//     sumMax = 0;
//   }
// }
// console.log(sumMax);

// max = num[0];
// num.forEach(item => {
//   if (item > max) {
//     max = item;
//   }
// });
// let maxIndex = num.findIndex(item => {
//   return item === max
// });

// sum = num.reduce(function (acc, currentValue, index) {
//   if (index > maxIndex) {
//     return acc + currentValue;
//   }
//   return acc
// }, 0);
// console.log(max, sum);

// // 4 В массиве, состоящем из n элементов,
// // вычислить: –количество элементов массива, равных 0;–
// // сумму элементов массива, расположенных после минимального
// // элемента.
// let f = 0;
// for (i = 0; i < num.length; i++) {
//   if (num[i] == 0) {
//     f++;
//   }
// }
// console.log(f);

// let sumMin = 0;
// min = num[0];
// for (i = 0; i < num.length; i++) {
//   sumMin += num[i];
//   if (num[i] < min) {
//     min = num[i];
//     sumMin = 0;
//   }
// }
// console.log(sumMin);
// // 5 В массиве, состоящем из n элементов, вычислить: –количество элементов массива, больших С;–
// // произведение элементов массива, расположенных после максимального по модулю элемента.
// let c = 30;
// let q = 0;
// for (i = 0; i < num.length; i++) {
//   if (num[i] < c) {
//     q++;
//   }
// }
// console.log(q);

// max = 0;

// let mult = 1;
// let numMax = 0;
// for (i = 0; i < num.length; i++) {
//   mult *= num[i];
//   if (Math.abs(num[i]) > numMax) {
//     numMax = num[i];
//     mult = 1;
//   }
// }
// console.log(numMax, mult);

// // 6 В массиве, состоящем из n элементов,
// // вычислить: –отрицательных элементов массива;–
// // сумму модулей элементов массива, расположенных после минимального по модулю элемента.
// let l = 0;
// let negSum = 0;
// min = num[0];
// for (i = 0; i < num.length; i++) {
//   if (num[i] < 0) {
//     l++;
//   }
//   negSum += Math.abs(num[i]);
//   if (Math.abs(num[i]) < min) {
//     min = num[i];
//     negSum = 0;
//   }
// }
// console.log(l, negSum);


// // 7 В массиве, состоящем из n элементов, вычислить: –количество положительных элементов массива;–
// // сумму элементов массива, расположенных после последнего элемента, равного нулю.
// let h = 0;
// let sumNull = num[0];
// for (i = 0; i < num.length; i++) {
//   if (num[i] > 0) {
//     h++;
//   }
//   sumNull += num[i];
//   if (num[i] == 0) {
//     sumNull = 0;
//   }

// }
// console.log(h, sumNull);
// // 8 В массиве, состоящем из n элементов,
// // вычислить: –количество элементов массива, меньших С;–
// // сумму целых частей элементов массива, расположенных после последнего отрицательного элемента.
// sumMin = 0;
// c = 33;
// let k = 0;
// for (i = 0; i < num.length; i++) {
//   if (num[i] < c) {
//     k++
//   }
//   sumMin += parseInt(num[i]);
//   if (num[i] < 0) {
//     sumMin = 0;
//   }
// }

// console.log(k, sumMin);

// // 9 В массиве, состоящем из n элементов, вычислить: –произведение отрицательных элементов массива;–
// // сумму положительных элементов массива, расположенных до максимального элемента.
// let resNum = 1;
// max = 0;
// let positiveSum = 0;
// for (i = 0; i < num.length; i++) {
//   if (num[i] < 0) {
//     resNum *= num[i];
//   }
//   if (num[i] > max) {
//     max = num[i];
//   }
// }
// for (i = 0; i < num.length; i++) {
//   if (num[i] < max) {
//     positiveSum += num[i];
//   }
//   if (num[i] == max) {
//     break;
//   }
// }

// console.log(resNum, max, positiveSum);
// // 10 В массиве, состоящем из n элементов,
// // вычислить: –номер максимального элемента;–
// // сумму элементов массива, расположенных до минимального элемента
// maxNum = 0;
// max = 0;
// for (i = 0; i < num.length; i++) {
//   if (num[i] < max) {
//     max = num[i];
//     maxNum = i;
//   }
// }

// min = num[0];
// minPos = 0;
// negSum = 0;
// for (i = 0; i < num.length; i++) {
//   if (num[i] < min) {
//     min = num[i];
//     minPos = i;
//   }
// }

// for (i = 0; i < num.length; i++) {
//   if (i < minPos) {
//     negSum += num[i];
//   }
// }
// console.log(maxNum, min, negSum);


// // 1 Создать массив из 10 случайных чисел:
// let arr = [];
// for (i = 0; i < 10; i++) {
//   arr.push(Math.round(Math.random() * 100));
// };
// console.log(arr);


// // 1. Программа выводит его на экран. 
// // 2. Программа выводит только четные элементы. 
// for (i = 0; i < arr.length; i++) {
//   if ((arr[i] % 2) == 0) {
//     console.log(arr[i]);
//   }
// }
// // 3. Программа возвращает сумму всех элементов массива. 
// let arrSum = 0;
// for (i = 0; i < arr.length; i++) {
//   arrSum += arr[i];
// }
// console.log(arrSum);
// // 4. Программа возвращает его максимальный элемент. 
// numMax = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > numMax) {
//     numMax = arr[i];
//   }
// }
// console.log(numMax);
// // 5. Программа добавляет новый элемент в массив по указанному индексу.
// let insNum = arr.splice(2, 0, '22');
// console.log(arr);
// // 6. Программа удаляет элемент из массива по указанному индексу.
// let delNum = arr.splice(3, 1);
// console.log(delNum);
// console.log(arr);

// //1. Создать массив "Список покупок"
// let shopList = [{
//     title: 'Сыр',
//     quantity: 1,
//     buy: 'Куплен'
//   },
//   {
//     title: 'Шоколад',
//     quantity: 2,
//     buy: 'Не куплен'
//   },
//   {
//     title: 'Молоко',
//     quantity: 2,
//     buy: 'Куплен'
//   },
//   {
//     title: 'Хлеб',
//     quantity: 1,
//     buy: 'Не куплен'
//   },
// ];
// let newList = '';
// for (i = 0; i < shopList.length; i++) {
//   if (shopList[i].buy == 'Куплен') {
//     newList += shopList[i].title + ' ';
//   }
// }
// for (i = 0; i < shopList.length; i++) {
//   if (shopList[i].buy !== 'Куплен') {
//     newList += shopList[i].title + ' ';
//   }
// }

// console.log(newList);




let array = [12, 25, 45, 89, 14, 15];

let a = 5;
let b = 2;
let c = 0;

function print(a) {
  console.log(a);
}

function getValue(arr) {
  let ans;
  arr.forEach(x => {
        if ((x < 0) && b !== 0) {
          print(ans)
          ans = a * Math.pow(x, 2) + b;
        }
          else if ((x > 0) && (b === 0)) {
            ans = (x - a) / (x - c);
          } else {
            ans = x /c;
            print(ans);
      }
      getValue(array);