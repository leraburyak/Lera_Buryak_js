//array methods

//map()
//возвращает новый массив с результатом вызова указанной функции для каждого элемента массива.
//Синтаксис
array.map(function(currentValue, index, arr), thisValue)

 let arr = [1, 2, 3, 4, 5, 6];
 let newArrMap = arr.map(el => el + 20);
 console.log(newArrMap); //[21, 22, 23, 24, 25, 26]

 //filter()
 //создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
//Синтаксис
array.filter(function(currentValue, index, arr), thisValue)

 let arr = [1, 2, 3, 4, 5, 6];
 let newArrFilter = arr.filter(el => el === 2 || el === 6);
 console.log(newArrFilter); // [2, 6]

 //reduce()
 //возвращает некое значение, представляющее собой результат обработки всех элементов массива
 //Синтаксис
 array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

 let arr = [1, 2, 3, 4, 5, 6];
 let newArrReduce = arr.reduce((index, current) => index + current);
 console.log(newArrReduce); //[21];

 //find()
 //возвращает первый элемент массива, соотвестсвующий заданному критерию. Данный метод, найдя первый подходящий элемент, не продолжит поиск по массиву.
 //Синтаксис
 array.find(function(currentValue, index, arr),thisValue)

 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let newArrFind = arr.find(el => el > 5);
 console.log(newArrFind); //6

 //findIndex
 //возвращает индекс элемента массива, соотвестсвующий заданному критерию. Данный метод, найдя первый подходящий элемент, не продолжит поиск по массиву.
 //Синтаксис
 array.findIndex(function(currentValue, index, arr), thisValue)

let arr = ['Nick', 'Joe', 'Frank', 'Sveta'];
let newArrFindIndex = arr.findIndex(el => el === 'Sveta');
console.log(newArrFindIndex); //3

//indexOf
//поход на метод findIndex, однако он принимает в качестве аргумента не функцию, а обычное значение. Используем его, если при поиске необходимого элемента массива не нужна сложная логика
 //Синтаксис
 array.indexOf(item, start)

 let arr = ['Nick', 'Joe', 'Frank', 'Sveta'];
 let newArrIndexOf = arr.indexOf('Sveta');
 console.log(newArrIndexOf); // 3

 //push()
 //добавляет элементы в конец массива. Он изменяет массив, и, после завершения работы, возвращает элемент, добавленный в массив
  //Синтаксис
  array.push(item1, item2, ..., itemX)

  let arr = [1, 2, 3, 4, 5];
  let newArrPush = arr.push(6);
  console.log(arr); // [1, 2, 3, 4, 5, 6];
  console.log(newArrPush); //6

  //pop()
  //удаляет из массива последний элемент. Данный метод изменяет массив и возвращает удаленный из него элемент.
  //Синтаксис
  array.pop()

  let arr = [1, 2, 3, 4, 5];
  let newArrPop = arr.pop();
  console.log(arr); // [1, 2, 3, 4]
  console.log(newArrPop); //5

  //shift()
  //удаляет из массива первый элемент и возвращает его. Также изменяет массив.
  //Синтаксис
  array.shift()

  let arr = [1, 2, 3, 4, 5];
  let shifted = arr.shift();
  console.log(arr); // [2, 3, 4, 5]
  console.log(shifted); // 1

  //unshift()
  //добавляет один или большее количество элементов в начало массива. Данный метод изменяет массив и возвращает новую длину массива
  //Синтаксис
  array.unshift(item1, item2, ..., itemX)

  let arr = [1, 2, 3, 4, 5];
  let newArrUn = arr.unshift(6, 7, 8);
  console.log(arr); //[6, 7, 8, 1, 2, 3, 4, 5]
  console.log(newArrUn); // 8

  //splice()
  //меняет содержимое массива, удаляя существующие элементы или заменяя их на другие элементы. Он умеет добавлять в массив новые элементы.
  //Синтаксис
  array.splice(index, howmany, item1, ....., itemX)

  let arr = ['a', 'c', 'd', 'e'];
  arr.splice(1, 0, 'b');
  console.log(arr); //['a','b','c','d','e']

  //slice()
  //возвращает некую копию массива. содержащую его элементы. начиная с заданной начальной позиции и заканчивая позициейб предшествующей заданной конечной позиции.
  //если задана только начальная позиция, то он вернет весь массив, начиная с этой позиции. Данный метод не изменяет массив, а только возвращает описанную при его вызове часть этого массива.
  //Синтаксис
  array.slice(start, end)

  let arr = ['a', 'c', 'd', 'e'];
  let newArrSlice  = arr.slice(2, 3);
  console.log(newArrSlice); // 'd', 'e'
  console.log(arr); //'a', 'c', 'd', 'e'

  //sort()
  //выполняет сортировку массива в соответствии с условием. заданным переданной ему функцией. Эта функция принимает два элемента массива(например, а и b),и, сравнивая их, возвращает, в том случае, если элементы менять не надо, 0, если а нужно поставить по меньшему индексу, чем b - отрицальное число, а если b нужно поставить по меньшему индексу, чем а - положительное число.
  //Синтаксис
  array.sort(compareFunction)

  let arr = [1, 7, -1, 5, 7, 2];
  let newArrSort = (firstEl, secondEl) => firstEl - secondEl;
  arr.sort(newArrSort);
  console.log(arr); //[-1,1,2,5,7,7]