// Создать объект, описывающий прямоугольник (хранит координаты
// левой верхней и правой нижней точек), и написать
// следующие функции для работы с таким объектом.

let object = {
  leftHeight: {
    x: 2,
    y: 4,
  },
  rightBottom: {
    x: 9,
    y: -2,
  }
};

// 1. Функция принимает объект-прямоугольник и выводит
// информацию о нем (где какая точка расположена).

function printPoints(square) {
  console.log(`точка А = ${square.leftHeight.x},${square.leftHeight.y}`);
  console.log(`точка B = ${square.rightBottom.x},${square.leftHeight.y}`);
  console.log(`точка C = ${square.rightBottom.x},${square.rightBottom.y}`);
  console.log(`точка D = ${square.leftHeight.x},${square.rightBottom.y}`);
};

printPoints(object);

// 2. Функция принимает объект-прямоугольник и возвращает
// его ширину.

function getHeight(square) {
  return Math.abs(square.leftHeight.x - square.rightBottom.x);
};
console.log(getHeight(object));

// 3. Функция принимает объект-прямоугольник и возвращает
// его высоту.

function getWidth(square) {
  return Math.abs(square.leftHeight.y - square.rightBottom.y);
};
console.log(getWidth(object));

// 4. Функция принимает объект-прямоугольник и возвращает
// его площадь.

function getArea(square) {
  return Math.abs(square.leftHeight.y - square.rightBottom.y) * Math.abs(square.leftHeight.x - square.rightBottom.x);
};
console.log(getArea(object));

// 5. Функция принимает объект-прямоугольник и возвращает
// его периметр.

function getPerimetr(square) {
  return 2 * (Math.abs(square.leftHeight.y - square.rightBottom.y) + Math.abs(square.leftHeight.x - square.rightBottom.x));
};
console.log(getPerimetr(object));

// 6. Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить
// ширину.

function changeWidth(square, step) {
  if (step > 0) {
    return (square.rightBottom.x += step);
  } else {
    return (square.rightBottom.x -= step);
  };
};
let stepWidth = (object, 1);
console.log(`${getWidth(object)}`);

// 7. Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить
// высоту

function changeHeight(square, step) {
  if (step > 0) {
    return (square.leftHeight.y += step);
  } else {
    return (square.leftHeight.y -= step);
  };
};
let stepHeight = (object, 1);
console.log(`${getHeight(object)}`);

// 8. Функция изменения высоты и ширины прямоугольника. Она принимает объект-прямоугольник и два значения - для изменения ширины и высоты.

function changeRectangle(square, newWidth, newHeight) {
  if (newWidth > 0) {
    (square.rightBottom.x += newWidth);
  } else {
    return (square.rightBottom.x -= newWidth);
  };
  if (newHeight > 0) {
    (square.leftHeight.y += newHeight);
  } else {
    return (square.leftHeight.y -= newHeight);
  };
};
let newRectangle = (changeRectangle(object), 1, 1);
console.log(`${getWidth(object)}`);
console.log(`${getHeight(object)}`);

// 9. Функция смещения прямоугольника по оси Х.

function offsetX(square, axis) {
  square.leftHeight.x += axis;
  square.rightBottom.x += axis;
};

// 10. Функция смещения прямоугольника по оси Y.

function offsetY(square, axis) {
  square.leftHeight.y += axis;
  square.rightBottom.y += axis;
};

// 11. Функция смещения прямоугольника и по оси Х и по оси Y.

function offset(square, axisX, axisY) {
   square.leftHeight.x += axisX;
   square.rightBottom.x += axisX;
   square.leftHeight.y += axisY;
   square.rightBottom.y += axisY;
};

// 12. Функция для проверки, находится ли точка внутри прямоугольника.

function inSide (square, x, y) {
  if(x >= square.leftHeight.x && x <= square.rightBottom.x, y <= square.leftHeight.y && y >= square.rightBottom.y) {
    return console.log('Ваша точка внутри треугольника');
  } else {
    return console.log('Ваша точка вне треугольника');
  };
};

//Создать объект, описывающий автомобиль.
let car = {
  brand: 'volkswagen',
  model: 'golf',
  year: 1997,
  averageSpeed: 70,
};
// 1. вывод на экран всех данных об автомобиле.
alert(Object.values(car));

//2. Функция для подсчета необходимого времени

function time (car, distance) {
  let speed = car.averageSpeed;
  
}