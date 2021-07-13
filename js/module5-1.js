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