//1 В массиве, состоящем из n элементов, 
//вычислить: –номер минимального элемента массива;–
//сумму модулей элементов массива, расположенных после первого
//отрицательного элемента.

let num = [25, 58, 57, 88, 12, -75, 15.3, 0, 72, 22, 69];
let min = 0;
for (let i = 0; i < num.length; i++) {
  if (num[i] <= min) {
    min = num[i];
  };
};
console.log(min);

let sum = 0;
for (i = 0; i < num.length; i++) {
  sum += num[i];
  if (num[i] < 0) {
    sum = 0;
  };
};
console.log(sum);

// 2 В массиве, состоящем из n элементов,
// вычислить: –номер максимального элемента массива;–
// сумму элементов массива, расположенных после первого положительного элемента.
let max = 0;
for (i = 0; i < num.length; i++) {
  if (num[i] > max) {
    max = num[i];
  };
};
console.log(max);

let positivSum = 0;
for (i = 0; i < num.length; i++) {
  //  maxSum += num[i]
  if (num[i] > 0) {
    positivSum += num[i];
  }
};
console.log(positivSum);

// 3 В массиве, состоящем из n элементов, вычислить: –количество элементов массива, лежащих в диапазоне от А до В;–
// сумму элементов массива, расположенных после максимального
// элемента.
let a = 0;
let b = 25;
let result = [];
for (i = 0; i < num.length; i++) {
  if (num[i] >= a && num[i] <= b) {
    result.push(num[i]);
  }
}
console.log(result);

let sumMax = 0;
max = 0;
for (i = 0; i < num.length; i++) {
  sumMax += num[i];
  if (num[i] > max) {
    max = num[i];
    sumMax = 0;
  }
}
console.log(sumMax);
// 4 В массиве, состоящем из n элементов,
// вычислить: –количество элементов массива, равных 0;–
// сумму элементов массива, расположенных после минимального
// элемента.
let f = 0;
for (i = 0; i < num.length; i++) {
  if (num[i] == 0) {
    f++;
  }
}
console.log(f);

let sumMin = 0;
min = num[0];
for (i = 0; i < num.length; i++) {
  sumMin += num[i];
  if (num[i] < min) {
    min = num[i];
    sumMin = 0;
  }
}
console.log(sumMin);
// 5 В массиве, состоящем из n элементов, вычислить: –количество элементов массива, больших С;–
// произведение элементов массива, расположенных после максимального по модулю элемента.
let c = 30;
let q = 0;
for (i = 0; i < num.length; i++) {
  if (num[i] < c) {
    q++;
  }
}
console.log(q);

max = 0;

let mult = 1;
let numMax = 0;
for (i = 0; i < num.length; i++) {
  mult *= num[i];
  if (Math.abs(num[i]) > numMax) {
    numMax = num[i];
    mult = 1;
  }
}
console.log(numMax, mult);

// 6 В массиве, состоящем из n элементов,
// вычислить: –отрицательных элементов массива;–
// сумму модулей элементов массива, расположенных после минимального по модулю элемента.
let l = 0;
let negSum = 0;
min = num[0];
for (i = 0; i < num.length; i++) {
  if (num[i] < 0) {
    l++;
  }
  negSum += Math.abs(num[i]);
  if (Math.abs(num[i]) < min) {
    min = num[i];
    negSum = 0;
  }
}
console.log(l, negSum);
// 7 В массиве, состоящем из n элементов, вычислить: –количество положительных элементов массива;–
// сумму элементов массива, расположенных после последнего элемента, равного нулю.
let h = 0;
let sumNull = num[0];
for (i = 0; i < num.length; i++) {
  if (num[i] > 0) {
    h++;
  }
  sumNull += num[i];
  if (num[i] == 0) {
    sumNull = 0;
  }

}
console.log(h, sumNull);
// 8 В массиве, состоящем из n элементов,
// вычислить: –количество элементов массива, меньших С;–
// сумму целых частей элементов массива, расположенных после последнего отрицательного элемента.
sumMin = 0;
c = 33;
let k = 0;
for (i = 0; i < num.length; i++) {
  if (num[i] < c) {
    k++
  }
  sumMin += parseInt(num[i]);
  if (num[i] < 0) {
    sumMin = 0;
  }
}

console.log(k, sumMin);

// 9 В массиве, состоящем из n элементов, вычислить: –произведение отрицательных элементов массива;–
// сумму положительных элементов массива, расположенных до максимального элемента.
let resNum = 1;
max = 0;
let positiveSum = 0;
for (i = 0; i < num.length; i++) {
  if (num[i] < 0) {
    resNum *= num[i];
  }
  if (num[i] > max) {
    max = num[i];
  }
}
for (i = 0; i < num.length; i++) {
  if (num[i] < max) {
    positiveSum += num[i];
  }
  if (num[i] == max) {
    break;
  }
}

console.log(resNum, max, positiveSum);
// 10 В массиве, состоящем из n элементов,
// вычислить: –номер максимального элемента;–
// сумму элементов массива, расположенных до минимального элемента
maxNum = 0;
max = 0;
for (i = 0; i < num.length; i++) {
  if (num[i] < max) {
    max = num[i];
    maxNum = i;
  }
}

min = num[0];
minPos = 0;
negSum = 0;
for (i = 0; i < num.length; i++) {
  if (num[i] < min) {
    min = num[i];
    minPos = i;
  }
}

for (i = 0; i < num.length; i++) {
    if (i < minPos) {
    negSum += num[i];  
  }
}
console.log(maxNum, min, negSum);
// 1 Создать массив из 10 случайных чисел:
//   1. Программа выводит его на экран.
// 2. Программа выводит только четные элементы.
// 3. Программа возвращает сумму всех элементов массива.
// 4. Программа возвращает его максимальный элемент.
// 5. Программа добавляет новый элемент в массив по указанному индексу.
// 6. Программа удаляет элемент из массива по указанному индексу.