// class Samurai{
//     constructor(name){
//         this.name=name
//     }
//     hello(){alert(this.name)}
// };
// let shogun = new Samurai("Dimych");
// console.log(shogun.__proto__.__proto__);
// console.log(shogun.__proto__.constructor.__proto__);
// console.log(shogun.__proto__.__proto__.__proto__);

// Examples

class User {
  constructor(login, password) {
    this._login = login;
    this._password = password;
    this._name = "user";
    this._email = "";
    this._phone = "";
    this.balance = 0;
  }
  // методы изменнения свойств пользователя
  // после регистрациии
  showLogin() {
    console.log(this.login);
  }
  updeteLogin() {
    this.login = value;
  }
  updateBalance(value=0){
      if((this.balance+value<0))alert(`недостаточно средств на счету`);
      return (this.balance+=value);
  };
  // албтернаива таких методов это геттер и сеттер
  get login() {
    return this._login;
  }
  set login(newLogin) {
    return (this._login = newLogin);
  };
  get password(){
      return this._password;
  };
  set password(newPassword){
      return (this._password=newPassword);
  };
  get name(){
      return this._name;
    
  };
  set name(newName){
      return (this._name=newName);
  };
};

const newUser = new User("login", "password");
console.log(newUser);
console.log('текущее значение через геттер', newUser.login);
// меняем текущее значение через сеттер
newUser.login='my new login';
console.log('текущее значение через геттер', newUser.login);
newUser.password = 'my new password';

console.log('текущее значение через геттер', newUser.password);
console.log('текущее значение через геттер', newUser.name);
newUser.name='Evgeniya';
console.log('текущее значение через геттер', newUser.name);
newUser.updateBalance(100);
newUser.updateBalance(-30);
newUser.updateBalance(-80);
console.log(newUser);

// Examples
// Исходный конструкор
// function MainUser(name='user') {
//   this.name=name;
// };
// MainUser.prototype.showName = function () {
//   console.log(this.name);
  
// };
// const mainUser = new MainUser('Sandra');
// console.log(mainUser);
// mainUser.showName();

// // Наследуемый конструктор
// function CurrentUser(age, name) {
//   MainUser.call(this,name)
//   this.age=age;
// };
// CurrentUser.prototype=Object.create(MainUser.prototype);
// CurrentUser.prototype.constructor = CurrentUser;
// CurrentUser.prototype.updateAge = function () {
//   return (this.age+=1)
  
// };
// const currentUser = new CurrentUser(30, 'Evgeniya');
// currentUser.showName();
// console.log(currentUser);

// Исходный класс
class MainUser{
  constructor(name='user'){
    this.name=name;
  }
  showName(){
    console.log(this.name);
  }
};
const mainUser = new MainUser('Sandra');
console.log(mainUser);
mainUser.showName();
class CurrentUser extends MainUser{
  constructor(age, zzzz){
  
    super(zzzz);
    this.age=age;
  }
};
const currentUser = new CurrentUser(30, 'Evgeniya');
currentUser.showName();
console.log(currentUser);

// Example2
// function Hero(name, xp) {
//   this.name=name;
//   this.xp=xp;
// };
// Hero.prototype.gainXp = function(amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };
// const hero = new Hero('Mango', 1000);
// hero.gainXp(500);
// const Warrior=function (name, xp, warrior) {
//   Hero.call(this,  name, xp );
//   this.warrior = warrior;
// };
/*
 * Используем Object.create() для того чтобы изначально записать
 * в Warrior.prototype пустой объект, в __proto__ которого будет
 * ссылка на Hero.prototype. Это необходимо сделать до того
 * как добавлять методы
 */

// Warrior.prototype=Object.create(Hero.prototype);

// Не забываем добавить в Warrior.prototype свойство constructor

// Warrior.prototype.constructor = Warrior;
// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.warrior}`);
// };
// const poly = new Warrior('Poly', 200, 'sword');
// console.log(poly);
// poly.gainXp(300);
// poly.attack();

// Class

// class Hero{
//   constructor(name, xp){
//     this.name=name;
//     this.xp=xp;
//   }
//   gainXp(amount){
//     console.log(`${this.name} gained ${amount} experience points`);
//     this.xp += amount;
//   }
 
// };
// const hero = new Hero('Mango', 1000);
// hero.gainXp(500);

// class Weapon extends Hero{
//   constructor(name, xp, weapon){
//     super(name, xp);
//     this.weapon = weapon;
//   }
//   attack(){
//     console.log(`${this.name} attacks with ${this.weapon}`);
//   }
// };
// const poly = new Weapon('Poly', 200, 'sword');
// console.log(poly);
// poly.gainXp(500);
// poly.attack();


function Hero(name, xp){
  this.name=name;
    this.xp=xp;
};
Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};
const hero = new Hero('Mango', 1000);
hero.gainXp(500);
 function Weapon(name,xp, weapon) {
   Hero.call(this, name,xp);
   this.weapon = weapon;
   
 };
 Weapon.prototype=Object.create(Hero.prototype);
 Weapon.prototype.constructor = Weapon;
Weapon.prototype.attack = function() {
  console.log(`${this.name} attacks with ${this.weapon}`);

};

const poly = new Weapon('Poly', 200, 'sword');
console.log(poly);
poly.gainXp(500);
poly.attack();


// Example3

function MainProduct(title='product',category='cat',price=0) {
  this.title=title;
  this.category=category;
  this.price=price;
  
};
MainProduct.prototype.showTitle = function () {
  console.log(this.title);
  
};
MainProduct.prototype.showCategory= function () {
  console.log(this.category);
  
};
MainProduct.prototype.showPrice = function () {
  console.log(this.price);
  
};
MainProduct.prototype.updateTitle = function (value) {
  return this.title=value;

  
};
MainProduct.prototype.updateCategory= function (value) {
  return this.category=value;
  
};
MainProduct.prototype.apdatePrice = function (value) {
  return this.price=value;
  
};
// создать конструктор на базе исходного для весовых товаров

function WeighProduct(title, category, price, weigth) {
  MainProduct.call(this, title, category, price);
  this.weigth=weigth
};
WeighProduct.prototype=Object.create(MainProduct.prototype);
WeighProduct.prototype.constructor=constructor;
WeighProduct.prototype.incrementWeigh = function (value) {
  return this.weigth +=value; 
  
};
WeighProduct.prototype.decrementWeigh = function (value) {
  return this.weigth -= value; 
};
  
const sugar =new WeighProduct('sugar', 'sweets', 25, 1000);
console.log(sugar);

// создать конструтор на базе исходного для товаров поштучно
  
function CountProduct(title, category, price, amount) {
  MainProduct.call(this, title, category, price);
  this.amount = amount;
};
CountProduct.prototype=Object.create(MainProduct);
CountProduct.prototype.constructor = constructor;
CountProduct.prototype.incrementCount = function (value){
  return this.amount += value;
};
CountProduct.prototype.decrementCount = function (value){
  if(this.amount>=0) return (this.amount-=value)
  return this.amount -= value;
};

const salt = new WeighProduct('salt', 'seasoning', 10, 1);
console.log(salt);
console.log(salt.incrementWeigh(2));
console.log(salt.decrementWeigh(2));

// throuth the class
class MainProduct2{
  constructor(title='product',category='cat',price=0){
    this._title=title;
  this._category=category;
  this._price=price;
  };
  get title(){
    console.log(this._title);
    
  };
  get category(){
    console.log(this._category);
    
  };
  get price(){
    console.log(this._price);
  };
  set title(value){
    return this._title=value;
  };
  set category(value){
    return this._category=value;
  }
  set price(value){
    return this._price=value;
  }
};

// создать конструктор на базе исходного для весовых товаров

class WeighProduct2 extends MainProduct2{
  constructor(title, category, price, weigth){
  super(title, category, price);
  this.weigth = weigth;
}
incrementWeigh(value){
  return this.weigth +=value; 
  
};
decrementWeigh(value){
  return this.weigth -= value; 
}
};
const bananas = new WeighProduct2('bananas', 'fruits', 35, 3000);
console.log(bananas);

class CountProduct2 extends MainProduct2{
  constructor(title, category, price, amount){
    super(title, category, price);
    this.amount=amount;
  };
  incrementCount(value){
    return this.amount += value;
  };
  decrementCount(value){
    return this.amount -= value;
  };
};
 const orange = new CountProduct2('orange', 'fruits', 50, 1);
 console.log(orange);
 console.log(orange.incrementCount(5));
 console.log(orange.decrementCount(2));