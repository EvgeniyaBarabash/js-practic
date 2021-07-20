//Метод forEach(callback)
// массив.forEach(function callback(element, index, array) {
//     // Тело коллбек-функции
//   });
//   Поэлементно перебирает массив.
//   Вызывает коллбек-функцию для каждого элемента массива.
//   Ничего не возвращает.
//   Аргументы коллбек-функции это значение текущего элемента element, его индекс index и сам исходный массив array. 
//   Объявлять можно только те параметры которые нужны, чаще всего это элемент, главное не забывать про их порядок.
// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });


// 1 способ

function calculateTotalPrice1(orderedItems) {
    let totalPrice = 0;
  
    for (let i = 0; i < orderedItems.length; i += 1) {
      totalPrice += orderedItems[i];
    }

    return totalPrice;
  };
// 2способ
function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    orderedItems.forEach((item)=>totalPrice+=item);
    return totalPrice;
  };
  console.log(calculateTotalPrice([12, 85, 37, 4]));
  console.log(calculateTotalPrice1([12, 85, 37, 4]));

//   2 task
// Задача. Фильтрация массива чисел

function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
  
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] > value) {
        filteredNumbers.push(numbers[i]);
      }
    }
  
    // Пиши код выше этой строки
    return filteredNumbers;
  };
  console.log(filterArray([1, 2, 3, 4, 5], 3));
   
//   2 вариант
function filterArray1(numbers, value){
    const filteredNumbers = [];
    numbers.forEach(number=>{
        if(number > value){
        filteredNumbers.push(number);
        }
    });
    return filteredNumbers;
};
console.log(filterArray1([1, 2, 3, 4, 5], 3));

// 3task
// Задача. Общие элементы
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  
    for (let i = 0; i < firstArray.length; i += 1) {
      if (secondArray.includes(firstArray[i])) {
        commonElements.push(firstArray[i]);
      }
    }
  
    return commonElements;
    // Пиши код выше этой строки
  };
  console.log(getCommonElements([1, 2, 3], [2, 4]));
  console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
  console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));


// 2 вариант
  function getCommonElements1(firstArray, secondArray) {
    const commonElements = [];
    firstArray.forEach((elem)=>{if(secondArray.includes(elem)){
        commonElements.push(elem);
    }});
    return commonElements;
  };
  console.log(getCommonElements1([1, 2, 3], [2, 4]));
  console.log(getCommonElements1([24, 12, 27, 3], [12, 8, 3, 36, 27]));
  console.log(getCommonElements1([10, 20, 30, 40], [4, 30, 17, 10, 40]));

//   Стрелочные функции.

// // Обычное объявление функции
// function classicAdd(a, b, c) {
//     return a + b + c;
//   }
  
//   // Тоже самое как стрелочная функция
//   const arrowAdd = (a, b, c) => {
//     return a + b + c;
//   };
// //   Если параметр один, его объявление может быть без круглых скобок.
//   const add = a => {
//     return a + 5;
//   };
// //   Если параметров нет, то обязательно должны быть пустые круглые скобки.
//   const greet = () => {
//     console.log('Привет!');
//   };

const calculateTotalPrice2 = (quantity, pricePerItem)=>{
    return quantity * pricePerItem;
  };
console.log(calculateTotalPrice2(5, 100));

// 5 Неявный возврат

// В стрелочной функции после символа => идёт её тело. Здесь может быть два варианта: с фигурными скобками и без них.

// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };
// Если фигурные скобки есть, и функция должна возвращать какое-то значение, необходимо явно поставить return. 
// Это называется явный возврат (explicit return). Такой синтаксис используется в том случае,
//  если в теле функции нужно выполнить ещё какие-то инструкции кроме возврата значения.

// const add = (a, b, c) => a + b + c;
// Если фигурных скобок нет, то возвращается результат выражения стоящего после =>. 
// Это называется неявный возврат (implicit return). В примере вернётся результат выражения сложения параметров a, b и c.

// Синтаксис неявного возврата сильно сокращает «шум» объявления функции с телом и возвращаемым выражением, 
// но подходит только в случае когда в теле функции не нужно выполнять никаких дополнительных инструкций кроме возврата значения.

// // До
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // После
// const arrowAdd = (a, b, c) => a + b + c;

// 6 Стрелочные функции как коллбеки
const calculateTotalPrice3 =orderedItems=> {
    let totalPrice = 0;
  
    orderedItems.forEach( item=>{
      totalPrice += item;
    });
  
    return totalPrice;
  };
console.log(calculateTotalPrice3([12, 85, 37, 4]));

// Задача. Фильтрация массива чисел 2.0
const filterArray2 =(numbers, value)=>{
    const filteredNumbers = [];
  
    numbers.forEach(number=> {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    return filteredNumbers;
  };
  console.log(filterArray2([1, 2, 3, 4, 5], 3));

// Задача. Общие элементы 2.0

const getCommonElements4=(firstArray, secondArray)=> {
    const commonElements = [];
  
    firstArray.forEach(element=> {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });

    return commonElements;
  };
console.log(getCommonElements4([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// Чистые функции

// Функция с побочными эффектами - это функция которая в процессе выполнения может 
// изменять или использовать глобальные переменные, 
// изменять значение аргументов ссылочного типа, выполнять операции ввода-вывода и т. п.

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Произошла мутация исходных данных - массива numbers
// console.log(numbers); // [2, 4, 6, 8, 10]
// Функция dirtyMultiply(array, value) умножает каждый элемент массива array на число value.
//  Она изменяет (мутирует) исходный массив по ссылке.

// Чистая функция (pure function) - это функция результат которой зависит только от значений переданных аргументов.
//  При одинаковых аргументах она всегда возвращает один и тот же результат и не имеет побочных эффектов,
//   то есть не изменяет значения аргументов.

// Напишем реализацию чистой функции умножения элементов массива, возвращающей новый массив, не изменяя исходный.

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функция вернула новый массив с изменёнными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// Задание
const changeEven=(numbers, value) =>{
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] % 2 === 0) {
        numbers[i] = numbers[i] + value;
      }
    }
return numbers;
  }
  console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
  console.log(changeEven([17, 24, 68, 31, 42], 100));

  
// переделаем в чистую функцию
const changeEven1=(numbers, value) =>{
    const newArray =[];
    numbers.forEach((number)=>{
        if (number % 2 === 0) {
       number += value;
      };
     newArray.push(number);
    });
    return newArray;
};

  console.log(changeEven1([2, 8, 3, 7, 4, 6], 10));
  console.log(changeEven1([17, 24, 68, 31, 42], 100));
 

//   10 task
// // Метод map()
// Большинство перебирающих методов массива это чистые функции. Они создают новый массив, заполняют его,
//  применяя к значению каждого элемента указанную коллбек-функцию, после чего возвращают этот новый массив.

// Метод map(callback) используется для трансформации массива. Он вызывает коллбек-функцию
//  для каждого элемента исходного массива, а результат её работы записывает в новый массив, 
//  который и будет результатом выполнения метода.

// массив.map((element, index, array) => {
//   // Тело коллбек-функции
// });
// Поэлементно перебирает оригинальный массив.
// Не изменяет оригинальный массив.
// Результат работа коллбек-функции записывается в новый массив.
// Возвращает новый массив такой же длины.
// Его можно использовать для того, чтобы изменить каждый элемент массива. 
// Оригинальный массив используется как эталон, на базе которого можно сделать другую коллекцию.

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

// const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// // Оригинальный массив не изменился
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']
// Использование анонимных стрелочных функций с неявным возвратом сильно сокращает «шум» объявления коллбек-функции, 
// делая код чище и проще для восприятия.

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

const planetsLengths = planets.map((planet)=>planet.length);
console.log(planetsLengths);

//11 Метод map() и массив объектов

const students = [
    { name: 'Манго', score: 83 },
    { name: 'Поли', score: 59 },
    { name: 'Аякс', score: 37 },
    { name: 'Киви', score: 94 },
    { name: 'Хьюстон', score: 64 }
  ];
  const studentsName = students.map((student)=>student.name);
  console.log(studentsName);
  const studentsScore = students.map((student)=>student.score);
  console.log(studentsScore);


  const bookss = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  
  const titles = bookss.map((book)=>book.title);
  console.log(titles);

//   12 Метод flatMap()

const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика']
    }
  ];

  const genres1 = books.map((book)=>book.genres);
  console.log(genres1);
  const genres = books.flatMap((book)=>book.genres);
  console.log(genres);

//   13task
// Задача. Имена пользователей
const users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      skills: ['ipsum', 'lorem'],
      gender: 'male',
      age: 37,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
      gender: 'female',
      age: 34,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
      gender: 'male',
      age: 24,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      skills: ['adipisicing', 'irure', 'velit'],
      gender: 'female',
      age: 21,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      skills: ['ex', 'culpa', 'nostrud'],
      gender: 'male',
      age: 27,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      skills: ['non', 'amet', 'ipsum'],
      gender: 'male',
      age: 38,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      skills: ['lorem', 'veniam', 'culpa'],
      gender: 'female',
      age: 39,
    },
  ];
  const getUserNames = users => {
  return  users.map((user)=>user.name);

};
console.log(getUserNames(users));


// 14task

  const getUsersEmail = users => {
      return users.map((user)=>user.email);
  };
  console.log(getUsersEmail(users));


//   15task
// Методы filter и find

// Метод filter(callback) используется для единственной операции - фильтрации массива, 
// то есть когда необходимо выбрать более одного элемента из коллекции по какому-то критерию.

// массив.filter((element, index, array) => {
//   // Тело коллбек-функции
// });
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает новый массив.
// Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции.
// Если коллбек вернул true элемент добавляется в возвращаемый массив.
// Если коллбек вернул false элемент не добавляется в возвращаемый массив.
// Если ни один элемент не удовлетворил условию, возвращает пустой массив.
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригинальный массив не изменился
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// То есть метод filter вызывает коллбек-функцию для каждого элемента исходного массива и если результат её выполнения true, 
// текущий элемент добавляет в новый массив.

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];


const evenNumbers = numbers.filter((number)=>number%2===0);
const oddNumbers = numbers.filter((number)=>number%2!==0);
console.log(evenNumbers);
console.log(oddNumbers);

// 16 Фильтрация уникальных элементов

// Используя метод filter() можно выполнить фильтрацию массива так, что в нём останутся только уникальные элементы. 
// Этот приём работает только с массивом примитивных значений - не объектов.

// Вернёмся к группе студентов и массиву всех посещаемых предметов, которые мы получили методом flatMap().

// const students = [
//   { name: 'Манго', courses: ['математика', 'физика'] },
//   { name: 'Поли', courses: ['информатика', 'математика'] },
//   { name: 'Киви', courses: ['физика', 'биология'] }
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
// В переменной allCourses хранится массив всех посещаемых предметов, которые могут повторяться. 
// Задача заключается в том, чтобы сделать новый массив, в котором будут только уникальные предметы, то есть без повторений.

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// Используя array.indexOf(course) выполняем поиск первого совпадения текущего элемента course и получаем его индекс в 
//  массиве всех курсов. В параметре index хранится индекс текущего элемента course при переборе массива методом filter.

// Если результат indexOf() и значение index равны - это уникальный элемент, потому что это первый раз когда такое значение
// встречается в массиве и на текущей итерации фильтр обрабатывает именно его.

// # Массив всех курсов
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
// Для элемента 'математика' под индексом 0:

// indexOf() вернёт 0, потому что ищет первое совпадение.
// Значение параметра index будет 0.
// Они равны, значит это уникальный элемент.
// Для элемента 'математика' под индексом 3:

// indexOf() вернёт 0, потому что ищет первое совпадение.
// Значение параметра index будет 3.
// Они не равны, значит это повторяющийся - не уникальный элемент.

const books2 = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  
  const allGenres = books2.flatMap((book)=>book.genres);
  const uniqueGenres = allGenres.filter((genre, index, array)=>array.indexOf(genre)===index);
  console.log(allGenres);
  console.log(uniqueGenres);

//   17 Метод filter() и массив объектов

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students5 = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
  { name: 'Хьюстон', score: 64 },
];

const best = students5.filter((student) => student.score >= HIGH_SCORE);
console.log(best); // Массив объектов с именами Манго и Киви

const worst = students5.filter((student) => student.score < LOW_SCORE);
console.log(worst); // Массив с одним объектом Аякс

// В коллбек-функции удобно деструктуризировать свойства объекта
const average = students5.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Массив объектов с именами Поли и Хьюстон

// ===================================================================================

const books6 = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  
  const MIN_RATING = 8;
  const AUTHOR = 'Бернард Корнуэлл';

  const topRatedBooks = books6.filter((book)=>book.rating>=MIN_RATING);
  const booksByAuthor = books6.filter((book)=>book.author===AUTHOR);
  console.log(topRatedBooks);
  console.log(booksByAuthor);


//   18task
// Задача. Пользователи с цветом глаз

const getUsersWithEyeColor = (users, color) => {
 return users.filter((user)=>user.eyeColor===color);

};

console.log(getUsersWithEyeColor(users, 'blue'));
console.log(getUsersWithEyeColor(users, 'green'));

// 19
// Задача. Пользователи в возрастной категории

const getUsersWithAge= (users, minAge, maxAge)=>{
return users.filter((user)=>(user.age >= minAge && user.age <= maxAge));
};
console.log(getUsersWithAge(users,20,30));
console.log(getUsersWithAge(users,30,40));

// 20 Задача. Пользователи с другом
const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName));
  };
       
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
console.log(getUsersWithFriend(users, 'Adrian Cross'));
console.log(getUsersWithFriend(users, 'Briana Decker'));

// 21 Задача. Список друзей
