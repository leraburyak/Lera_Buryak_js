//1 
//В массиве, состоящем из n элементов, 

let num = [25, 58, 57, 88, 12, -75, 0, 15.3, 72, 22, 69];

//вычислить: –номер минимального элемента массива;–
let min = [0];
num.forEach(item => {
  if (item < min) {
    min = item;
  }
});
let minIndex = num.findIndex(a => a === min);

console.log(min, minIndex);

//сумму модулей элементов массива, расположенных после первого
//отрицательного элемента.

let sum = num.reduce(function (acc, currentValue, index) {
  if (index > minIndex) {
    return acc + Math.abs(currentValue);
  }
  return acc
}, 0);

console.log(sum);

// 2 
//В массиве, состоящем из n элементов,
// вычислить: –номер максимального элемента массива;–
let max = 0;
num.forEach(item => {
  if (item > max) {
    max = item;
  }
});
let maxIndex = num.findIndex(a => a === max);

console.log(max, maxIndex);

// сумму элементов массива, расположенных после первого положительного элемента.
let firstPosNum = num.find(a => a > 0);
let firstPosIndex = num.findIndex(a => a === firstPosNum);
let sumPos = num.reduce(function (acc, currentValue, index) {
  if (index > firstPosIndex) {
    return acc + currentValue;
  }
  return acc;
}, 0);

console.log(sumPos);

// 3 
//В массиве, состоящем из n элементов, вычислить: –количество элементов массива, лежащих в диапазоне от А до В;–

let a = 0;
let b = 50;
let range = num.reduce(function (acc, index) {
  if (index >= a && index <= b) {
    return acc + 1;
  }
  return acc;
}, 0);

console.log(range);
// сумму элементов массива, расположенных после максимального
// элемента.

let sumMax = num.reduce(function (acc, currentValue, index) {
  if (index > maxIndex) {
    return acc + currentValue;
  }
  return acc;
}, 0);

console.log(sumMax);

// 4 
//В массиве, состоящем из n элементов,
// вычислить: –количество элементов массива, равных 0;–

let numNull = num.reduce(function (acc, currentValue, index) {
  if (index == 0) {
    return acc + 1;
  }
  return acc;
}, 0);

console.log(numNull);
// сумму элементов массива, расположенных после минимального
// элемента.

let sumMin = num.reduce(function (acc, currentValue, index) {
  if (index > minIndex) {
    return acc + currentValue;
  }
  return acc;
}, 0);

console.log(sumMin);

// 5 
//В массиве, состоящем из n элементов, вычислить: –количество элементов массива, больших С;–

let c = 55;
let numC = num.reduce(function (acc, index) {
  if (index > c) {
    return acc + 1;
  }
  return acc;
}, 0);

console.log(numC);

// произведение элементов массива, расположенных после максимального по модулю элемента.
let maxAbs = Math.abs(num[0]);
let maxMod = num.forEach(item => {
  if (Math.abs(item) > maxAbs) {
    maxAbs = Math.abs(item)
  }
});
console.log(maxAbs);
let indexAbs = num.findIndex((item) => item === maxAbs);
let mult = num.reduce(function (acc, currentValue, index) {
  if (index > indexAbs) {
    return (acc *= currentValue);
  }
  return acc;
}, 1);
console.log(mult);

// 6 
//В массиве, состоящем из n элементов,
// вычислить: –отрицательных элементов массива;–
let negNum = num.reduce(function (acc, index) {
  if (index < 0) {
    return acc + 1;
  }
  return acc;
}, 0);
console.log(negNum);

// сумму модулей элементов массива, расположенных после минимального по модулю элемента.
let minAbs = Math.abs(num[0]);
let minMod = num.forEach(item => {
  if (Math.abs(item) < minAbs) {
    minAbs = Math.abs(item)
  }
});
console.log(minAbs);

let indexMinAbs = num.findIndex((item) => item === minAbs);
let sumMinAbs = num.reduce(function (acc, currentValue, index) {
  if (index > indexMinAbs) {
    return (acc += currentValue);
  }
  return acc;
}, 0);
console.log(sumMinAbs);

// 7 
//В массиве, состоящем из n элементов, вычислить: –количество положительных элементов массива;–
let posNum = num.reduce(function (acc, index) {
  if (index > 0) {
    return acc + 1;
  }
  return acc;
}, 0);
console.log(posNum);

// сумму элементов массива, расположенных после последнего элемента, равного нулю.

numNull = num.findIndex(item => item === 0);

let negNumSum = num.reduce(function (acc, currentValue, index) {
  if (index > numNull) {
    return (acc += currentValue);
  }
  return acc;
}, 0);
console.log(negNumSum);

// 8 
//В массиве, состоящем из n элементов,
// вычислить: –количество элементов массива, меньших С;–
c = 23;
let numMinC = num.reduce(function (acc, index) {
  if (index < c) {
    return acc + 1;
  }
  return acc;
}, 0);

console.log(numMinC);
// сумму целых частей элементов массива, расположенных после последнего отрицательного элемента.

let negLastElement = num.find(item => item < 0);
console.log(negLastElement);

let indexLastNegElem = num.lastIndexOf(negLastElement);
let negElementSum = num.reduce(function (acc, currentValue, index) {
  if (index > indexLastNegElem) {
    return (acc += parseInt(currentValue));
  }
  return acc;
}, 0);
console.log(negElementSum);

// 9 
//В массиве, состоящем из n элементов, вычислить: –произведение отрицательных элементов массива;–
let negNumRes = num.reduce(function (acc, index) {
  if (index < 0) {
    return acc *= index;
  }
  return acc;
}, 1);
console.log(negNumRes);
// сумму положительных элементов массива, расположенных до максимального элемента.

let sumLastMax = num.reduce(function (acc, currentValue, index) {
  if (index < maxIndex && currentValue > 0) {
    return (acc += currentValue);
  }
  return acc;
}, 0);
console.log(sumLastMax);


// 10 
//В массиве, состоящем из n элементов,
// вычислить: –номер максимального элемента;–
max = 0;
num.forEach(item => {
  if (item > max) {
    max = item;
  }
});
maxIndex = num.findIndex(a => a === max);

console.log(maxIndex);

// сумму элементов массива, расположенных до минимального элемента

let sumLastMin = num.reduce(function (acc, currentValue, index) {
  if (index < minIndex) {
    return (acc += currentValue);
  }
  return acc;
}, 0);
console.log(sumLastMin);


// 1 Создайте массив styles с элементами« Джаз» и« Блюз».
let musicStyles = ['Джаз', 'Блюз'];

// 2 Добавьте« Рок - н - ролл» в конец.
musicStyles.push('Рок-н-ролл');
console.log(musicStyles);
// 3 Замените значение в середине на« Классика».Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
musicStyles.splice(2, 1, 'Классика');
console.log(musicStyles);
// 4 Удалите первый элемент массива и покажите его.
let shifted = musicStyles.shift();
console.log('Мой массив сейчас: ' + musicStyles);
console.log('Удалён этот элемент: ' + shifted);
// 5 Вставьте« Рэп» и« Регги» в начало массива.
musicStyles.unshift('Рэп', 'Регги');
console.log('Мой новый массив: ' + musicStyles);


//1
// создать массив "список покупок"
let shopList = [{
    title: 'Сыр',
    quantity: 1,
    buy: 'Куплен',
    price: 3.5
  },
  {
    title: 'Шоколад',
    quantity: 2,
    buy: 'Не куплен',
    price: 2.5
  },
  {
    title: 'Молоко',
    quantity: 2,
    buy: 'Куплен',
    price: 2
  },
  {
    title: 'Хлеб',
    quantity: 1,
    buy: 'Не куплен',
    price: 1.5
  },
];

//2
//вывод списка покупок: куплен/не куплен
let newList = '';
for (i = 0; i < shopList.length; i++) {
  if (shopList[i].buy == 'Куплен') {
    newList += shopList[i].title + ' ';
  }
}
for (i = 0; i < shopList.length; i++) {
  if (shopList[i].buy !== 'Куплен') {
    newList += shopList[i].title + ' ';
  }
};
console.log(newList);

//3
//добавление в покупки в список 
function addProduct(product) {
  let buyProduct = shopList.find(item => item.title == product);
  if (buyProduct) {
    buyProduct.quantity++;
  } else {
    shopList.push({
      title: product,
      quantity: 1,
      buy: 'Куплен'
    })
  }
}
addProduct('Сыр');
console.log(shopList);

//4
//Покупка продукта
function buyProduct(product) {
  shopList.forEach(index => {
    if (index.title === product) {
      index.buy = 'Куплен';
    }
  });
}
buyProduct('Хлеб');
console.log(shopList);

//5 по цене
function sortPrice(arr) {
shopList.sort(function(a, b) {
return a.price - b.price;
});
 console.log(arr);
}
sortPrice(shopList);

//6 по названию
function sortTitle(arr) {
  shopList.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  });
  console.log(arr);
}
sortTitle(shopList);