// CALLBACK function
// const doMath = function(a,b,callback){
//     const result = callback(a,b)
//     console.log(result);
// };
// const add = function(x,y){
//     return x+y;
// };
// const sub =function(x,y){
//     return x-y;
// };
// doMath(2,5,add);
// doMath(25,21,sub);

// инлайновая функция
const doMath = function (a, b, callback) {
  const result = callback(a, b);
  console.log(result);
};
doMath(2, 5, function (x, y) {
  return x + y;
});
doMath(25, 21, function (x, y) {
  return x - y;
});

// Отложенный вызов: регистрация событий
// (код который произойдет после клики на кнопку)
// сonst buttonRef = document.querySelector('.js-button');
// const handleBtnClick = function(){
//     console.log(`Клик по кнопке`);
// };
// buttonRef.addEventListener('click',handleBtnClick);

// Отложенный вызов: геолокация
//  const onGetPositionSuccess = function(position){
//      console.log(`Это вызов  onGetPositionSuccess`);
//      console.log(position);
//  };
//  const onGetPositionError = function(error){
//       console.log(`Это вызов  onGetPositionError`)
//       console.log(error);
//  };
//  window.navigator.geolocation.getCurrentPosition(
//      onGetPositionSuccess,
//      onGetPositionError,
//  );

//  Отложенный вызов: интервалы
// const callback = function(){
//     console.log(`Через 2 секунды внутри колбека в таймауте`);
// };
// console.log(`В коде пред таймаутом`);
// setTimeout(callback, 2000);

// Work with BACKEND
// const onRequestSuccess = function(responce){
//     console.log(`Вызов функции onRequestSuccess после успевшего ответа бекенда`);
// console.log(responce);
// };

// fetch('https://')
// .then(res=>res.json())
// .then(onRequestSuccess);

const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

const callback1 = function (value) {
  return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = function (value) {
  return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);

// TASK1 Функция как значение

// Функции не отличаются от чисел, строк или массивов - это просто
// специальный тип данных (объект высшего порядка),
// значение, которое можно хранить в переменной или передавать, как аргумент, в другую функцию.
// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }

/* Вызываем функцию greet 
   и выводим результат в консоль */
// console.log(greet('Манго'));
// Добро пожаловать Манго.

/* Выводим функцию greet 
   в консоль не вызывая её */
// console.log(greet);
/* 
ƒ greet() { 
     return `Добро пожаловать ${name}.`; 
} 
*/
// В первом логе мы вызываем функцию greet при помощи круглых скобок и в консоль выводится результат её выполнения.
//  Во втором логе передаётся ссылка на функцию, а не результат её вызова (отсутствуют круглые скобки),
//  поэтому в консоль выводится тело функции. Это значит, что функцию можно присвоить в переменную или передать,
//  как аругмент, другой функции.

// 2 task

// Колбэк-функции

// Функция обратного вызова (callback, колбэк) - это функция, которая
// передаётся другой функции в качестве аргумента и та,
//  в свою очередь, вызывает переданную функцию.

// Функция высшего порядка(higher order function) - функция, принимающая
// в качестве параметров другие функции или возвращающая функцию как результат.
// Колбэк-функция
// function greet(name) {
//   consle.log(`Добро пожаловать ${name}.`);
// }

// Функция высшего порядка

// function registerGuest(name, callback) {
// //   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);
// Мы передали ссылку на функцию greet как аргумент, поэтому она будет присвоена в параметр callback и
// вызвана внутри функции registerGuest через круглые скобки.
//  Имя параметра для колбэка может быть произвольным, главное помнить, что значением будет функция.

// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// };

// console.log(makeMessage('Роял гранд', makePizza));
// console.log(makeMessage('Ультрасыр', deliverPizza));

// 3 task

// Инлайн-колбэки

// Если колбэк-функция маленькая и нужна только для передачи аргументом,
// её можно объявить прямо при вызове функции в которую передаём колбэк.
// Такая функция будет доступна только как значение параметра и больше нигде в коде.

function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

// Передаём инлайн функцию greet как колбэк
registerGuest("Манго", function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
});

// Передаём инлайн функцию notify как колбэк
registerGuest("Поли", function notify(name) {
  console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
});

// task PIZZA

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });

// makePizza('Ультрасыр', function eatPizza(pizzaName){
//   console.log(`Едим пиццу ${pizzaName}`);
// });

// 4 task

// Несколько колбэков

function processCall(recipient) {
  // Имитируем доступность абонента случайным числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
    // Логика активации автоответчика
  } else {
    console.log(`Соединяем с ${recipient}, ожидайте...`);
    // Логика принятия звонка
  }
}

processCall("Манго");

// Колбэки применяются для обработки действий пользователя на странице,
//  при обработке запросов на сервер,
// выполнения заранее неизвестных функций и т. п.
// В этом и заключается их суть - это функции предназначенные для отложенного выполнения.

// const pizzaPalace = {
//   pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
//   order(pizzaName, onSuccess, onError) {
//     for (const pizza of this.pizzas) {
//       if (pizzaName === pizza) {
//         return onSuccess(pizzaName);
//       } 
//     }
//         return onError(
//           `В ассортименте нет пиццы с названием ${pizzaName}.`);
//   },
// };

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// console.log(pizzaPalace.order("Аль Копчино", makePizza, onOrderError));
// console.log(pizzaPalace.order("Четыре нарезона", makePizza, onOrderError));
// console.log(pizzaPalace.order("Биг майк", makePizza, onOrderError));
// console.log(pizzaPalace.order("Венская", makePizza, onOrderError));


// 5 task
// Контекст вызова функции

// Внутри функций есть зарезервированное ключевое слово this. Во время исполнения функции,
//  в this записывается ссылка на объект, в контексте которого она была вызвана.
//  Таким образом, в теле функции мы можем получить доступ к свойствам и методам этого объекта.

// const bookShelf = {
//   authors: ['Бернард Корнуэлл', 'Роберт Шекли'],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ['Бернард Корнуэлл', 'Роберт Шекли']
// bookShelf.addAuthor('Ли Танит');
// console.log(bookShelf.getAuthors()); // ['Бернард Корнуэлл', 'Роберт Шекли', 'Ли Танит']

// Методы getAuthors и addAuthor это функции, которые вызываются в контексте объекта bookShelf.
//  Во время их выполнения в this записывается ссылка на объект bookShelf и 
//  мы можем обратиться к его свойствам и методам.


const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `В ассортименте нет пиццы с названием «${pizzaName}».`;
    }

    return `Заказ принят, готовим пиццу «${pizzaName}».`;
  },

};
console.log(pizzaPalace.order('Аль Копчино'));
console.log(pizzaPalace.order('Биг майк'));

// 6 Задача. Аккаунт пользователя

const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']


// 7 Метод call

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// function composeMessage(position) {
// return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`; 
// }

// const messages = [];
// for(let i = 0; i<orders.length; i+=1){
// messages.push(composeMessage.call(orders[i], i+1));
// };

// console.log(messages);


// 8 Метод apply
const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = [];
for (let i = 0; i < orders.length; i++) {
  const msg = composeMessage.apply(orders[i], [i + 1]);
  messages.push(msg);
}
console.log(messages);

// 9 Метод bind
