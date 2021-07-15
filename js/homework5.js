// Прототипное наследоване
const objA = {
  x: 2,
};
console.log(`objA`, objA);
console.log(objA.hasOwnProperty("x"));
const objB = Object.create(objA);
console.log(`objB`, objB);
objB.y = 5;
console.log(objB.y);
console.log(objB.x);
const objC = Object.create(objB);
objC.z = 10;
console.log(`objC`, objC);
// у objC ссылка на objB, у objB ссылка на objА, а у objА ссылка на все главное хранилище

console.log(objC.x);
console.log(objC.hasOwnProperty("x"));

// Функции-конструкторы(название имя сущиствительное с большой буквы)

// new - создание экземпляра(создается под капотом пустой обьект)

const Guest = function (name, room) {
  this.name = name;
  this.room = room;
};
const mango = new Guest("Mango", 28);
const orange = Object.create(mango);
const pear = new Guest("Pear", 33);
const pink = Object.create(pear);
console.log(pink);
console.log(pear);
console.log(orange);
console.log(mango);
console.log(Guest.prototype);
console.log(mango.hasOwnProperty("age"));
console.log(mango.hasOwnProperty("mango"));
console.log(mango.hasOwnProperty("Mango"));

Guest.prototype.showGuestInfo = function () {
  console.log(`Guest ${this.name} from ${this.room}`);
};
mango.showGuestInfo();
orange.showGuestInfo();
pear.showGuestInfo();

// example 2
const hotel = function (name, stars, capacity) {
  this.name = name;
  this.stars = stars;
  this.capacity = capacity;
};
const hotel1 = new hotel("Risort hotel", 5, 100);
console.log(hotel1);
const motel = new hotel("Sunrise", 4, 50);
console.log(motel);

// Управляем магазином

const Manager = function (name = "manager", sales = 0) {
  this.name = name;
  this.sales = sales;
  this.sell = function (product) {
    this.sales += 1;
    return `Manager ${this.name} sold ${product}`;
  };
};
const mango1 = new Manager("Mango", 5);
console.log(mango1.sales);
console.log(mango1.sell("TV"));
console.log(mango1.sales);
const mango2 = new Manager("MAX", 4);
console.log(mango2.sales);
console.log(mango2.sell("Microawe"));

// Наследование

class Hero {
  constructor({ name = "hero", xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }
  gainXp(amount) {
    console.log(`${this.name} получает ${amount} опыта`);
    this.xp += amount;
  }
}
class Warrior extends Hero {
  constructor({ weapon, ...restProps } = {}) {
    super(restProps);
    this.weapon = weapon;
  }
  atack() {
    console.log(`${this.name} атакует используя ${this.weapon}`);
  }
}
class Mage extends Hero {
  constructor({ spell, ...restProps } = {}) {
    super(restProps);
    this.spell = spell;
  }
  cast() {
    console.log(`${this.name} атакует используя ${this.spell}`);
  }
}
class Berserk extends Warrior {
  constructor({ warcry, ...restProps } = {}) {
    super(restProps);
    this.warcry = warcry;
  }
  babyRage() {
    console.log(this.warcry);
  }
}
const poly5 = new Mage({ name: "poly5", xp: 500, weapon: "abracadabra" });

const barserk = new Berserk({
  name: "ajax",
  xp: 500,
  weapon: "axe",
  warcry: "waaaaaah",
});
const mango5 = new Warrior({ name: "mango", xp: 1000, weapon: "alebarda" });
console.log(barserk);
barserk.babyRage();
barserk.atack();
barserk.gainXp();
console.log(mango5);
console.log(mango5.__proto__ === Warrior.prototype);
console.log("Warrior.prototype", Warrior.prototype);
console.log(Warrior.prototype.__proto__ === Hero.prototype);
mango5.atack();
mango5.gainXp(100);
console.log(poly5);
poly5.cast();
poly5.gainXp(600);

// TASK 1
// Прототип объекта и метод Object.create()
// Объекты можно организовать в цепочки так, чтобы свойство не найденное в одном объекте, автоматически искалось бы в другом.
// Связующим звеном выступает специальное скрытое свойство [[Prototype]], которое в консоли браузера отображается как __proto__.
// const animal = {
//     legs: 4
//   };
//   const dog = Object.create(animal);
//   dog.name = 'Манго';

//   console.log(dog); // { name: 'Манго', __proto__: animal }
//   console.log(animal.isPrototypeOf(dog)); //
// Метод Object.create(obj) создаёт и возвращает новый объект, связывая его с объектом obj.
// Объект, на который указывает ссылка в __proto__, называется прототипом. В нашем примере объект animal это прототип для объекта dog.
//  Метод isPrototypeOf() проверяет является ли объект animal прототипом для dog и возвращает true или false.

// console.log(dog.hasOwnProperty('name')); // true
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty('legs')); // false
// console.log(dog.legs); // 4
// Обращение dog.name работает очевидным образом - возвращает собственное свойство name объекта dog.
// При обращении к dog.legs интерпретатор ищет свойство legs в объекте dog, не находит и продолжает поиск в объекте по ссылке из dog.
// __proto__, то есть, в данном случае, в объекте animal - его прототипе.

// То есть прототип - это резервное хранилище свойств и методов объекта,
// автоматически используемое при их поиске. У объекта, который выступает прототипом может также быть свой прототип,
//  у того свой, и так далее.

// Поиск свойства выполняется до первого совпадения. Интерпретатор ищет свойство по имени в объекте, если не находит,
//  обращается к свойству __proto__, т. е. переходит по ссылке к объекту-прототипу, а затем и прототипу прототипа.
//  Если интерпретатор доберется до конца цепочки и не найдет свойства с таким именем, то вернёт undefined.

const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};

const child = Object.create(parent);

console.log((child.name = "Jason"));
console.log((child.age = 27));

//   TASK2
// const ancestor = {
//     name: 'Paul',
//     age: 83,
//     surname: 'Dawson',
//     heritage: 'Irish'
//   };

//   const parent = Object.create(ancestor);
//   parent.name = 'Stacey';
//   parent.surname = 'Moore';
//   parent.age = 54;

//   const child =  Object.create(parent);
//   child.name = 'Jason';
//   child.age = 27;

//   Task3

// Функция-конструктор
// Синтаксис литерала объекта позволяет создать один объект. Но часто нужно создать много однотипных объектов с одинаковым набором свойств,
// но разными значениями, и методами для взаимодействия со свойствами. Всё это нужно сделать динамически, во время выполнения программы.
//  Для этого используют функции-конструкторы, вызывая их при помощи специального оператора new.
// function User() {
//     // Тело функции
//   }

//   const mango = new User();
//   console.log(mango); // {}

//   const poly = new User();
//   console.log(poly); // {}

// Любая функция, кроме стрелочной, может быть использована как конструктор.

// Чтобы отличить конструктор от обычной функции, их принято называть с большой буквы, а в самом названии отражать
//  тип создаваемого объекта (существительное).
// Вызов функции с оператором new приводит к созданию нового объекта и вызову функции в контексте этого объекта.
// есть this внутри функции будет ссылаться на новосозданный объект. Это позволяет добавлять каждому объекту свойства с
// одинаковыми именами, но разными значениями.
// function User(name, email, age) {
//     this.name = name;
//     this.email = email;
//   }

//   const mango = new User('Манго', 'mango@mail.com');
//   console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

//   const poly = new User('Поли', 'poly@mail.com');
//   console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }
// function Car(brand, model, price){
//     this.brand=brand;
//     this.model=model;
//     this.price=price;
//   };
//    const newCar = new Car('Audi', 'Q3', 36000);
//    console.log(newCar);

//    task 4
// function Car({brand, model, price}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// const newCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(newCar);

// TASK 5
// У каждой функции, кроме стрелочных,
//  есть свойство prototype, значение которого это объект с единственным свойством constructor,
//   указывающим на саму функцию-конструктор.
// function User() {}
// console.log(User.prototype); // { constructor: User }

// При вызове функции-конструктора и создании объекта через new,
// объект в свойстве prototype функции-конструктора будет прототипом создаваемого объекта.

// const mango = new User();
// console.log(User.prototype.isPrototypeOf(mango)); // true
// В свойство prototype можно записывать свойства и методы, которые будут доступны всем объектам созданным этой функцией-конструктором.
// Методы в prototype будут вызываться
//  созданными функцией-конструктором, поэтому для доступа к свойствам вызываемого объекта в методах используется ключевое слово this.

// function Car({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   Car.prototype.getPrice=function(){
//       return this.price;
//   }
//    Car.prototype.changePrice=function(newPrice){
//   this.price=newPrice;
//     };
//     console.log(Car.prototype.hasOwnProperty('getPrice'));
//     console.log(Car.prototype.getPrice );
//     console.log(Car.prototype.hasOwnProperty('changePrice'));
//     const newCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
//     console.log(newCar);
//     newCar.changePrice(35000);
//     console.log(newCar.getPrice());

// Задача6. Хранилище
// function Storage(items) {
//   this.items = items;
// }
// Storage.prototype.getItems = function () {
//   return this.items;
// };
// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// };
// Storage.prototype.removeItem = function (item) {
//   this.items.splice(this.items.indexOf(item), 1);
// };

// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// 7
// function StringBuilder(baseValue) {
//     this.value=baseValue;
// };
// StringBuilder.prototype.getValue=function () {

//     return this.value;
// };
// StringBuilder.prototype.padEnd=function (str) {
//  return this.value = this.value + `${str}`;
// };
// StringBuilder.prototype.padStart=function (str) {
//   return this.value = `${str}` +this.value;
//   };
//   StringBuilder.prototype.padBoth=function (str) {
//     return this.value = `${str}` + this.value + `${str}`;
//     };
//     const builder = new StringBuilder('.');
//     console.log(builder.getValue()); // '.'
//     builder.padStart('^');
//     console.log(builder.getValue()); // '^.'
//     builder.padEnd('^');
//     console.log(builder.getValue()); // '^.^'
//     builder.padBoth('=');
//     console.log(builder.getValue()); // '=^.^='
    

    // 8
    // class Car {
    //   constructor ({ brand, model, price }){
    //   this.brand = brand;
    //   this.model = model;
    //   this.price = price;
    // }
    // };
    // const mango9 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
    // console.log(mango9);

    // 10 Методы класса
//     В функции-конструкторе объявление методов для работы со свойствами экземпляра делается явно, 
// путём обращения к свойству prototype и добавления на него методов.

// function User({ name, email }) {
//   this.name = name;
//   this.email = email;
// }

// User.prototype.getEmail = function () {
//   return this.email;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };
// В классах используется более удобный синтаксис методов класса, который за ширмой делает тоже самое - 
// добавляет методы на свойство User.prototype.
//  Поэтому в самом начале мы говорили что классы это просто 
//  синтаксический сахар - удобная надстройка над функциями-конструкторами.
// class User {
//   constructor({ name, breed }) {
//     this.name = name;
//     this.breed = breed;
//   }

//   // Аналог User.prototype.getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Аналог User.prototype.changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice(){
//     return this.price;
//   }
//   changePrice(newPrice){
//  this.price=newPrice;
//   }
// }
// console.log(Car.prototype.hasOwnProperty('getPrice'));
// console.log(Car.prototype.getPrice);
// console.log(Car.prototype.hasOwnProperty('changePrice'));
// console.log(Car.prototype.changePrice);
// const mango8 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(mango8.getPrice());

// 11
// Инкапсуляция - это концепция позволяющая скрыть внутренние детали класса. 
// Пользователь класса должен получать доступ только к публичному интерфейсу - набору публичных свойств и методов класса.

// В классах инкапсуляция реализуется приватными свойствами, доступ к которым можно получить только внутри класса. 
// Это одно из отличий классов и функций-конструкторов - в классах легко объявить приватные свойства.

// Допустим почта пользователя должна быть недоступна из вне, то есть приватна. 
//  к имени свойства символ # мы делаем его приватным. Объявление приватного свойства до инциализации в конструкторе - обязательно.
// class User {
//   // Необязательное объявление публичных свойств
//   name;
//   // Обязательное объявление приватных свойств
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email); // Будет ошибка, это приватное свойство
// Методы класса также могут быть приватными, то есть доступны только в теле класса. Для этого перед их именем необходимо поставить символ #.


class Car2 {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand(){
    return this.#brand;
  }
changeBrand(newBrand){
  return this.#brand = newBrand;
}
};
const mango7 = new Car2({ brand: 'Audi', model: 'Q3', price: 36000 });
console.log(mango7);

// 12 Хранилище 2.0 Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. Сделай так, чтобы свойство items было приватным.

// function Storage(items) {
//   this.items = items;
// }

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (item) {
//   const itemIndex = this.items.indexOf(item);
//   this.items.splice(itemIndex, 1);
// };

class Storage{
  #items;
  constructor(items){
this.#items=items;
  };
  getItems(){
   return this.#items;
  };
  addItem(newItem){
return this.#items.push(newItem);
  };
  removeItem(item){
    const itemIndex = this.#items.indexOf(item);
    return this.#items.splice(itemIndex, 1);
  };

}


const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// 13
// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//   this.value += str;
// };

// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value;
// };

// StringBuilder.prototype.padBoth = function (str) {
//   this.padStart(str);
//   this.padEnd(str);
// };

class StringBuilder{
  #value;
  constructor(baseValue){
    this.#value = baseValue;
  };
  getValue(){
    return this.#value;
  };
  padEnd(str){
 this.#value += str;
  };
  padStart(str){
    this.#value = str + this.#value;
  };
  padBoth(str){
    this.padStart(str);
    this.padEnd(str);
  }
};
const builder = new StringBuilder('.');
console.log(StringBuilder.prototype.hasOwnProperty('getValue'));
console.log(StringBuilder.prototype.hasOwnProperty('padEnd'));
console.log(StringBuilder.prototype.isPrototypeOf(builder));
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

// 14 Геттеры и сеттеры
// Геттеры и сеттеры - это более краткий синтаксис объявления методов для взаимодействия со свойствами. 
// Геттер и сеттер имитируют обычное публичное свойство класса, но позволяют изменять другие свойства более удобным способом. 

// Геттер выполняется при попытке получить значение свойства, а сеттер - при попытке его изменить.

// Геттеры и сеттеры хорошо использовать для простых операций чтения и изменения значения свойств, особенно приватных, 
// как их публичный интерфейс. Для работы со свойством которое хранит массив или объект они не подойдут.

// class User {
//   name;
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// Мы объявили геттер и сеттер email поставив перед именем свойства ключевые слова get и set.
// Внутри этих методов мы или возвращаем значение приватного свойства #email или изменяем его значение.
// Геттер и сеттер идут в паре и должны называться одинаково.

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
// console.log(mango.email); // mango@mail.com
// mango.email = 'mango@supermail.com';
// console.log(mango.email); // mango@supermail.com
// При обращении к mango.email вызывается геттер get email() {...} и выполняется его код.
// При попытке записи mango.email = 'mango@supermail.com' вызывается 
// сеттер set email(newEmail) {...} и строка 'mango@supermail.com' будет значением параметра newEmail.

// Плюс в том, что это методы, а значит при записи можно выполнить дополнительный код, 
// например с какими-то проверками, в отличии от выполнениях этой же операции напрямую со свойством.

// set email(newEmail) {
//   if(newEmail === '') {
//     console.log('Ошибка! Почта не может быть пустой строкой!');
//     return;
//   }

//   this.#email = newEmail;
// }


// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//  get brand() {
//     return this.#brand;
//   }

// set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

//15 Статические свойства
// Кроме публичных и приватных свойств будущего экземпляра, в классе можно объявить его собственные свойства, 
// доступные только классу, но не его экземплярам - статические свойства (static). 
// Они полезны для хранения информации относящейся к самому классу.

// Добавим классу пользователя приватное свойство type - его тип, определяющий набор прав, 
// например администратор, редактор, просто пользователь и т п. Возможные типы пользователей будем хранить 
// как статическое свойство TYPES - объект со свойствами.

// Статические свойства объявляются в теле класса. Перед именем свойства добавляется ключевое слово static.
// class User {
//   // Объявление и инициализация статического свойства
//   static TYPES = {
//     ADMIN: 'admin',
//     EDITOR: 'editor',
//   };
//   #email;
//   #type;

//   constructor({ email, type }) {
//     this.#email = email;
//     this.#type = type;
//   }

//   get type() {
//     return this.#type;
//   }

//   set type(newType) {
//     if (User.TYPES[newType] === undefined) {
//       console.log('Ошибка! Такого типа пользователя не существет');
//       return;
//     }

//     this.#type = newType;
//   }
// }

// const mango = new User({
//   email: 'mango@mail.com',
//   type: User.TYPES.ADMIN,
// });

// console.log(mango.TYPES); // undefined
// console.log(User.TYPES); // { ADMIN: 'admin', EDITOR: 'editor' }

// console.log(mango.type); // admin
// mango.type = User.TYPES.EDITOR;
// console.log(mango.type); // editor

// Статические свойства также могут быть приватные, то есть доступные только внутри класса. 
//  этого имя свойства должно начинаться с символа #,
//  также как приватные свойства. Обращение к приватному статическому свойству вне тела класса вызовет ошибку.


// class Car3 {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if(Car3.MAX_PRICE<newPrice){
//     console.log(`Цена превышает опустимую`);
//     return;
//   }
//   this.#price = newPrice;
//   }
  
//   // Пиши код выше этой строки
// }

// const audi = new Car3({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// 16 Статические методы
// В классе можно объявить не только методы будущего экземпляра, но и методы доступные только классу -
//  статические методы, которые могут быть как публичные, так и приватные. Синтаксис объявления аналогичен
//   статическим свойствам, за исключением того, что значением будет метод.

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });

// console.log(
//   User.isEmailTaken('poly@mail.com')
// ); // false

// console.log(
//   User.isEmailTaken('mango@mail.com')
// ); // true
// Особенность статических методов в том, что во время их вызова ключевое слово this ссылается на сам класс. 
// Это значит, что статический метод может получить доступ к статическим свойствам класса, но не к свойствам экземпляра.
//  Логично, потому что статические методы вызывает сам класс, а не его экземпляры.

class Car {
  static #MAX_PRICE = 50000;
  // Пиши код ниже этой строки
static checkPrice(price){
  if(price >Car.#MAX_PRICE){
    return `Внимание! Цена превышает допустимую.`;
   
  };
 return `Всё хорошо, цена в порядке.`;
};
  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
};

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.


// 17 Наследование классов
// Ключевое слово extends позволяет реализовать наследование классов, когда один класс (дочерний, производный)
//  наследует свойства и методы другого класса (родителя).
//  В выражении class Child extends Parent дочерний класс Child наследует (расширяет) от родительского класса Parent.

// Это означает, что мы можем объявить базовый класс, который хранит общие характеристики и методы для группы производных классов, 
// которые наследуют свойства и методы родителя, но также добавляют свои уникальные.

// Например, в приложении есть пользователи разных типов - администратор, писатель статей, контент менеджер и т. п.

// У каждого типа пользователя есть набор общих характеристик, например почта и пароль, но также есть и уникальные.

// Сделав независимые классы для каждого типа пользователя мы получим дублирование общих свойств и методов,
// и при необходимости изменить, например, название свойства, придётся проходить по всем классам, это неудобно и трудозатратно.

// Вместо этого можно сделать общий класс User, который будет хранить набор общих свойств и методов, 
// после чего сделать классы для каждого типа пользователя, которые наследуют этот набор от класса User. 
// При необходимости изменить что-то общее, достаточно будет поменять только код класса User.
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentWriter extends User {
//   // Тело класса ContentWriter
// }

// const writer = new ContentWriter('mango@mail.com');
// console.log(writer); // { email: 'mango@mail.com' }
// console.log(writer.email); // 'mango@mail.com'
// Класс ContentWriter наследует от класса User его конструктор, геттер и сеттер email,
//  а также одноимённое публичное свойство. Важно помнить, что приватные свойства и методы
//   класса-родителя не наследуются классом-ребёнком.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//   };
// }
// console.log(Admin.AccessLevel.BASIC);

// 18 Конструктор дочернего класса

// Первым делом в конструкторе дочернего класса необходимо вызвать специальную функцию super(аргументы) - это 
// псевдоним конструктора родительского класса. В противном случае, при попытке обратиться к this в конструкторе
//  дочернего клаcса, будет ошибка. 
// При вызове конструктора класса родителя передаём необходимые ему аргументы для инициализации свойств.
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentWriter extends User {
//   posts;

//   constructor({ email, posts }) {
//     // Вызов конструктора родительского класса User
//     super(email);
//     this.posts = posts;
//   }
// }

// const writer = new ContentWriter({ email: 'mango@mail.com', posts: [] });
// console.log(writer); // { email: 'mango@mail.com', posts: [] }
// console.log(writer.email); // 'mango@mail.com'

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
accessLevel;

 constructor({email, accessLevel}){
 super(email);
 this.accessLevel=accessLevel;
 }
 get accessLevel(){
   return this.accessLevel;
 };
 set accessLevel(newAccessLevel){
 this.accessLevel = newAccessLevel;
}
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };
};

const mango6= new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango6.email); // mango@mail.com
console.log(mango6.accessLevel); // superuser