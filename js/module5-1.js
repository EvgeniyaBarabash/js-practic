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

// class User {
//   constructor(login, password) {
//     this._login = login;
//     this._password = password;
//     this._name = "user";
//     this._email = "";
//     this._phone = "";
//     this.balance = 0;
//   }
//   // методы изменнения свойств пользователя
//   // после регистрациии
//   showLogin() {
//     console.log(this.login);
//   }
//   updeteLogin() {
//     this.login = value;
//   }
//   updateBalance(value=0){
//       if((this.balance+value<0))alert(`недостаточно средств на счету`);
//       return (this.balance+=value);
//   };
//   // албтернаива таких методов это геттер и сеттер
//   get login() {
//     return this._login;
//   }
//   set login(newLogin) {
//     return (this._login = newLogin);
//   };
//   get password(){
//       return this._password;
//   };
//   set password(newPassword){
//       return (this._password=newPassword);
//   };
//   get name(){
//       return this._name;
    
//   };
//   set name(newName){
//       return (this._name=newName);
//   };
// };

// const newUser = new User("login", "password");
// console.log(newUser);
// console.log('текущее значение через геттер', newUser.login);
// // меняем текущее значение через сеттер
// newUser.login='my new login';
// console.log('текущее значение через геттер', newUser.login);
// newUser.password = 'my new password';

// console.log('текущее значение через геттер', newUser.password);
// console.log('текущее значение через геттер', newUser.name);
// newUser.name='Evgeniya';
// console.log('текущее значение через геттер', newUser.name);
// newUser.updateBalance(100);
// newUser.updateBalance(-30);
// newUser.updateBalance(-80);
// console.log(newUser);

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
