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
}
// 2способ
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach((item) => (totalPrice += item));
  return totalPrice;
}
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
}
console.log(filterArray([1, 2, 3, 4, 5], 3));

//   2 вариант
function filterArray1(numbers, value) {
  const filteredNumbers = [];
  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  return filteredNumbers;
}
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
}
console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// 2 вариант
function getCommonElements1(firstArray, secondArray) {
  const commonElements = [];
  firstArray.forEach((elem) => {
    if (secondArray.includes(elem)) {
      commonElements.push(elem);
    }
  });
  return commonElements;
}
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

const calculateTotalPrice2 = (quantity, pricePerItem) => {
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
const calculateTotalPrice3 = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
};
console.log(calculateTotalPrice3([12, 85, 37, 4]));

// Задача. Фильтрация массива чисел 2.0
const filterArray2 = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
};
console.log(filterArray2([1, 2, 3, 4, 5], 3));

// Задача. Общие элементы 2.0

const getCommonElements4 = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
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
const changeEven = (numbers, value) => {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
    }
  }
  return numbers;
};
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));

// переделаем в чистую функцию
const changeEven1 = (numbers, value) => {
  const newArray = [];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      number += value;
    }
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

const planets = ["Земля", "Марс", "Венера", "Юпитер"];

const planetsLengths = planets.map((planet) => planet.length);
console.log(planetsLengths);

//11 Метод map() и массив объектов

const students = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
  { name: "Хьюстон", score: 64 },
];
const studentsName = students.map((student) => student.name);
console.log(studentsName);
const studentsScore = students.map((student) => student.score);
console.log(studentsScore);

const bookss = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];

const titles = bookss.map((book) => book.title);
console.log(titles);

//   12 Метод flatMap()

const books = [
  {
    title: "Последнее королевство",
    author: "Бернард Корнуэлл",
    genres: ["приключения", "историческое"],
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    genres: ["фантастика"],
  },
  {
    title: "Красна как кровь",
    author: "Ли Танит",
    genres: ["ужасы", "мистика"],
  },
];

const genres1 = books.map((book) => book.genres);
console.log(genres1);
const genres = books.flatMap((book) => book.genres);
console.log(genres);

//   13task
// Задача. Имена пользователей
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
const getUserNames = (users) => {
  return users.map((user) => user.name);
};
console.log(getUserNames(users));

// 14task

const getUsersEmail = (users) => {
  return users.map((user) => user.email);
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

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
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
    title: "Последнее королевство",
    author: "Бернард Корнуэлл",
    genres: ["приключения", "историческое"],
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    genres: ["фантастика", "мистика"],
  },
  {
    title: "Красна как кровь",
    author: "Ли Танит",
    genres: ["ужасы", "мистика", "приключения"],
  },
];

const allGenres = books2.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter(
  (genre, index, array) => array.indexOf(genre) === index
);
console.log(allGenres);
console.log(uniqueGenres);

//   17 Метод filter() и массив объектов

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students5 = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
  { name: "Хьюстон", score: 64 },
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
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Бернард Корнуэлл";

const topRatedBooks = books6.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books6.filter((book) => book.author === AUTHOR);
console.log(topRatedBooks);
console.log(booksByAuthor);

//   18task
// Задача. Пользователи с цветом глаз

const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue"));
console.log(getUsersWithEyeColor(users, "green"));

// 19
// Задача. Пользователи в возрастной категории

const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter((user) => user.age >= minAge && user.age <= maxAge);
};
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

// 20 Задача. Пользователи с другом
const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName));
};

console.log(getUsersWithFriend(users, "Goldie Gentry"));
console.log(getUsersWithFriend(users, "Adrian Cross"));
console.log(getUsersWithFriend(users, "Briana Decker"));

// 21 Задача. Список друзей
const getFreinds = (users) => {
  return users
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index);
};
console.log(getFreinds(users));

// 22 Задача. Активные пользователи

const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive);
};
console.log(getActiveUsers(users));

// 23 Задача. Неактивные пользователи

const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};
console.log(getInactiveUsers(users));

// 24 Метод find()

// Если метод filter(callack) используется для поиска всех элементов удовлетворяющим условию, то метод find(callback)
//  позволяет найти и вернуть первый подходящий элемент, после чего перебор массива прекращается.
//  То есть он ищет до первого совпадения.

// массив.find((element, index, array) => {
//   // Тело коллбек-функции
// });
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает первый элемент удовлетворяющий условию, то есть когда коллбек возвращает true.
// Если ни один элемент не подошёл, то есть для всех элементов коллбек вернул false, метод возвращает undefined.
// Метод find() используется для одной задачи - поиска элемента по уникальному значению свойства. Например,
//  поиск пользователя по почте, автомобиля по серийному номеру, книги по названию и т. п.

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// colorPickerOptions.find((option) => option.label === 'blue'); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find((option) => option.label === 'pink'); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find((option) => option.label === 'white'); // undefined

const books1 = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
];
const BOOK_TITLE = "Сон смешного человека";
const AUTHOR1 = "Роберт Шекли";

const bookWithTitle = books1.find((elem) => elem.title === BOOK_TITLE);
const bookByAuthor = books1.find((elem) => elem.author === AUTHOR1);
console.log(bookWithTitle);
console.log(bookByAuthor);

// 25 Задача. Пользователь с почтой
const getUsersEmail1 = (users, email) => {
  return users.find((user) => user.email === email);
};
console.log(getUsersEmail1(users, "elmahead@omatom.com"));

// 26 Метод every()

// Метод every(callback) проверяет проходят ли все элементы массива тест предоставляемый коллбек-функцией.
// Возвращает true или false.

// массив.every((element, index, array) => {
//   // Тело коллбек-функции
// });
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает true если все элементы массива удовлетворяют условию.
// Возвращает false если хотя бы один элемент массива не удовлетворяет условию.
// Перебор массива прекращается если коллбек возвращает false.
// // Все элементы больше либо равны нулю? - да
// [1, 2, 3, 4, 5].every((value) => value >= 0); // true

// // Все элементы больше либо равны нулю? - нет
// [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false
// При работе с массивом объектов проверяется значение какого-то их свойства.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((elem)=>elem%2===0);
// const eachElementInFirstIsOdd = firstArray.every(elem=>elem%2!==0);

// const eachElementInSecondIsEven = secondArray.every((elem)=>elem%2===0);;
// const eachElementInSecondIsOdd = secondArray.every(elem=>elem%2!==0);;

// const eachElementInThirdIsEven = thirdArray.every((elem)=>elem%2===0);;
// const eachElementInThirdIsOdd = thirdArray.every(elem=>elem%2!==0);;

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

// 27 Задача. Все ли пользователи активны

const isActiveUsers = (users) => {
  return users.every((user) => user.isActive);
};
console.log(isActiveUsers(users));

// 28 Метод some()

// Метод some(callback) проверяет проходит ли хотя бы один элемент массива тест предоставляемый коллбек-функцией.
//  Возвращает true или false.

// массив.some((element, index, array) => {
//   // Тело коллбек-функции
// });
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает true если хотя бы один элемент массива удовлетворяет условию.
// Возвращает false если ни один элемент массив не удовлетворяет условию.
// Перебор массива прекращается если коллбек возвращает true.
// // Есть хотя бы один элемент больше либо равный нулю? - да
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Есть хотя бы один элемент больше либо равный нулю? - да
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Есть хотя бы один элемент меньше нуля? - нет
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Есть хотя бы один элемент меньше нуля? - да
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const anyElementInFirstIsEven = firstArray.some((elem) => elem % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some((elem) => elem % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some((elem) => elem % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some((elem) => elem % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some((elem) => elem % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some((elem) => elem % 2 !== 0);
console.log(anyElementInFirstIsEven);
console.log(anyElementInFirstIsOdd);
console.log(anyElementInSecondIsEven);
console.log(anyElementInSecondIsOdd);
console.log(anyElementInThirdIsEven);
console.log(anyElementInThirdIsOdd);

// 29 Задача. Есть ли активные пользователи

const isAnyUsersActive = (users) => {
  return users.some((user) => user.isActive);
};
console.log(isAnyUsersActive(users));

// 30 Метод reduce() - То есть метод reduce() используется
//  когда необходимо взять «много» и привести к «одному». В повседневных
//  задачах его применение сводится к работе с числами.

// Метод reduce(callback, initialValue) используется для последовательной обработки каждого
// элемента массива с сохранением промежуточного результата, как аккумулятор.
// Немного сложнее других в усвоении, но результат стоит того.

// массив.reduce((previousValue, element, index, array) => {
//   // Тело коллбек-функции
// }, initialValue);
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает что угодно.
// Делает что угодно.
// Легче всего представить его работу на примере подсчёта суммы элементов массива.

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32
// Первый параметр коллбек-функции (previousValue) это аккумулятор, то есть промежуточный результат.
//  Значение которое вернёт коллбек-функция на текущей итерации, будет значением этого параметра на следующей.

// Вторым аргументом для reduce() можно передать необязательное начальное значение аккумулятора - параметр initialValue.

// # Вначале метод reduce() создаёт внутреннюю переменную-аккумулятор и
// # присваивает ей значение параметра initialValue или первого элемента
// # перебираемого массива, если initialValue не задан.
// previousValue = 0

// # Далее коллбек-функция вызывается для каждого элемента массива. Текущее значение
// # параметра previousValue это то, что вернула коллбек-функция на прошлой итерации.
// Итерация 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Итерация 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Итерация 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Итерация 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Итерация 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # После того как весь массив перебран, метод reduce() возвращает значение аккумулятора.
// Результат - 32

// Посчитать общее игровое время
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((totalTime,elem)=>{
//   return totalTime + elem;
// },0);

// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(playtimes);
// console.log(totalPlayTime);
// console.log(averagePlayTime);

// 31 Метод reduce() и массив объектов
// При работе с массивом объектов выполняется редуцирование по значению какого-то свойства.
//  Например, есть массив студентов с баллами за тест. Необходимо получить средний бал.

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;

const players = [
  { name: "Манго", playtime: 1270, gamesPlayed: 4 },
  { name: "Поли", playtime: 469, gamesPlayed: 2 },
  { name: "Аякс", playtime: 690, gamesPlayed: 3 },
  { name: "Киви", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
  const avarageTime = player.playtime / player.gamesPlayed;
  return avarageTime + acc;
}, 0);
console.log(totalAveragePlaytimePerGame);

// 32 Задача. Общий баланс пользователей

const calculateTotalBalance = (users) => {
  return users.reduce((total, user) => {
    return total + user.balance;
  }, 0);
};
console.log(calculateTotalBalance(users));

// 33 Задача. Общее количество друзей

const getTotalFreind = (users) => {
  return users.reduce((total, user) => {
    return total + user.friends.length;
  }, 0);
};
console.log(getTotalFreind(users));

// 34 Метод sort()

// Метод sort() сортирует элементы массива, но в отличии от остальных перебирающих методов, он сортирует исходный массив.

// Сортирует и изменяет исходный массив.
// Возвращает изменённый массив, то есть ссылку на отсортированный исходный.
// По умолчанию сортирует по возрастанию.
// Сравнение происходит путём приведения значений к строке и сравнения порядковых номеров в таблице Unicode.
// // Массив чисел будет отсортирован по возврастанию
// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

// // Массив строк сортируется по алфавиту
// const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];
// students.sort();
// console.log(students); // [ 'Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля' ]

// // При этом порядковый номер заглавных букв меньше чем у прописных
// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']
// Из-за того, что сортируется исходный массив, нарушается принцип чистоты функций и
// нельзя удобно сделать несколько производных коллекций на базе исходной.
//  Например, сделать коллекцию отсортированную по возрастанию, а другую по убыванию.
//   Поэтому перед сортировкой делают полную копию исходного массива и сортируют уже её.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();
// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// 35 Свой порядок сортировки чисел

// Для указания своего порядка сортировки методу sort(callback) нужно передать коллбек-функцию с двумя параметрами.
// Это функция сравнения (compare function),
//  порядок сортировки зависит от её результата. Метод sort() будет вызывать её для произвольных двух элементов.

// массив.sort((firstEl, secondEl) => {
//   // Тело коллбек-функции
// });
// firstEl - первый элемент для сравнения.
// secondEl - второй элемент для сравнения.
// Если вызов compareFunction(firstEl, secondEl) возвращает любое отрицательное значение, то есть firstEl меньше secondEl,
// сортировка поставит firstEl перед secondEl. Это сортировка по возрастанию.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
// Если вызов compareFunction(firstEl, secondEl) возвращает любое положительное значение больше нуля,
// то есть secondEl больше firstEl, сортировка поставит secondEl перед firstEl. Это сортировка по убыванию.

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]
// Eсли вызов compareFunction(firstEl, secondEl) вернёт 0, сортировка оставит firstEl и secondEl неизменными
//  по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам. Но вообще не важно,
//  что возвращать, если их взаимный порядок не имеет значения.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
console.log(ascendingReleaseDates);
console.log(descendingReleaseDates);

//  36 Свой порядок сортировки строк

// Для сортировки строк в алфавитном порядке, по возрастанию или убыванию, используется метод строк localeCompare().

// firstString.localeCompare(secondString)
// Он вызывается на строке которую нужно сравнить (firstString) с той, что передана ему как аргумент (secondString).

// 'a'.localeCompare('b'); // -1
// 'b'.localeCompare('a'); // 1
// 'a'.localeCompare('a'); // 0
// 'b'.localeCompare('b'); // 0
// Возвращает отрицательное значение если firstString должна быть перед secondString.
// Возвращает положительное значение больше нуля если firstString должна быть после secondString.
// Если строки одинаковы, возвращается ноль.
// Это удобно использовать при сортировке строк, так как метод sort() ожидает такие же значения от коллбек-функции.

// const students = ['Вика', 'Андрей', 'Олег', 'Юля', 'Борис', 'Катя'];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']

const authors = [
  "Ли Танит",
  "Бернард Корнуэлл",
  "Роберт Шекли",
  "Федор Достоевский",
  "Говард Лавкрафт",
];

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);

// 37 Сортировка объектов

// При работе с массивом объектов сортировка выполняется по числовому или строчному значению какого-то свойства.
// Например, есть группа студентов с баллами за тест. Необходимо отсортировать массив объектов по возрастанию
// и убыванию количества баллов, и по имени студента.

// const students3 = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
// ];

// const inAscendingScoreOrder = students3.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// // const inDescendingScoreOrder = students3.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students3.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAscendingScoreOrder);
// console.log(inDescendingScoreOrder);
// console.log(inAlphabeticalOrder);

const books3 = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];
const sortedByAuthorName = [...books3].sort((firstBook, secondBook) =>
  firstBook.author.localeCompare(secondBook.author)
);

const sortedByReversedAuthorName = [...books3].sort((firstBook, secondBook) =>
  secondBook.author.localeCompare(firstBook.author)
);

const sortedByAscendingRating = [...books3].sort(
  (firstBook, secondBook) => firstBook.rating - secondBook.rating
);

const sortedByDescentingRating = [...books3].sort(
  (firstBook, secondBook) => secondBook.rating - firstBook.rating
);
console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
console.log(sortedByAscendingRating);
console.log(sortedByDescentingRating);

// 38 Задача. Сортировка по балансу

const sortByAscendingBalance = (users) => {
  return [...users].sort((a, b) => a.balance - b.balance);
};
console.log(sortByAscendingBalance(users));

// 39 Задача. Сортировка по количеству друзей

const sortByDescendingFriendCount = (users) => {
  return [...users].sort(
    (firstFriend, secondFriend) =>
      secondFriend.friends.length - firstFriend.friends.length
  );
};
console.log(sortByDescendingFriendCount(users));

// 40 Задача. Сортировка по имени

const sortByName2 = (users) => {
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
};
console.log(sortByName2(users));

// 41 Цепочки методов (чейнинг, chaining)

// Есть массив объектов с именами, баллами и посещаемыми предметами каждого студента.

// const students = [
//   { name: 'Манго', score: 83, courses: ['математика', 'физика'] },
//   { name: 'Поли', score: 59, courses: ['информатика', 'математика'] },
//   { name: 'Аякс', score: 37, courses: ['физика', 'биология'] },
//   { name: 'Киви', score: 94, courses: ['литература', 'информатика'] },
// ];
// Необходимо получить массив их имён отсортированный по возрастанию баллов за тест. Для этого мы отсортируем копию массива методом sort(), после чего методом map() составим массив значений свойства name из сортированного массива.

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map((student) => student.name);

// console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']
// Проблема в том, что у нас появляются промежуточные переменные после каждой операции кроме финальной.
//  Переменная sortedByAscendingScore лишняя и необходима только для хранения промежуточного результата.

// Избавиться от таких «мёртвых» переменных можно группируя вызовы методов в цепочки.
// Каждый следующий метод будет выполняться на результате работы предыдущего.

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map((student) => student.name);

// console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']
// Делаем копию исходного массива перед сортировкой.
// На копии вызываем метод sort().
// К результату работы метода sort() применяем метод map().
// Переменной names присваивается результат работы метода map().
// Получим сортированный по алфавиту массив уникальных посещаемых предметов.

// const uniqueSortedCourses = students
//   .flatMap((student) => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ['биология', 'информатика', 'литература', 'математика', 'физика']
// На исходном массиве вызываем flatMap() и делаем разглаженный массив всех курсов.
// К результату метода flatMap() применяем метод filter() для фильтрации уникальных элементов.
// На результате метода filter() вызываем sort().
// Переменной uniqueSortedCourses присваивается результат работы метода sort().
// Цепочка методов может быть произвольной длины, но обычно не более 2-3 операций. Во-первых,
// перебирающие методы используются для сравнительно простых операций над коллекцией. Во-вторых, вызов каждого последующего метода,
//  это дополнительный перебор массива, что при достаточном количестве, может сказаться на производительности.

// Дополни код так, чтобы в переменной names получился массив имён
// авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
const books4 = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
  { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 8.67 },
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = [...books4]
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .sort((a, b) => a.author.localeCompare(b.author))
  .map((book) => book.author);
console.log(names);

// 42 Задача. Пользователи и друзья

// Дополни функцию getNamesSortedByFriendCount(users) так,
//  чтобы она возвращала массив имён пользователей отсортированный
//   возрастанию количества их друзей (свойство friends).

const getNamesSortedByFriendCount = (users) => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};
console.log(getNamesSortedByFriendCount(users));

// 43 Задача. Имена друзей

// Дополни функцию getSortedFriends(users) так,
// чтобы она возвращала массив уникальных имён друзей (свойство friends)
// отсортированный по алфавиту .

const getSortedFriend = (users) => {
  return [...users]
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((a, b) => a.localeCompare(b));
};
console.log(getSortedFriend(users));

// 44 Задача. Общий баланс
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс
//  пользователей (свойство balance), пол которых (свойство gender)
//   совпадает со значением параметра gender.

const getTotalBalanceByGender = (users, gender) => {
  return [...users]
    .filter((user) => user.gender === gender)
    .reduce((totalBalance, user) => {
     return totalBalance + user.balance;
    }, 0);
};
console.log(getTotalBalanceByGender(users, "male"));
console.log(getTotalBalanceByGender(users, 'female'));
