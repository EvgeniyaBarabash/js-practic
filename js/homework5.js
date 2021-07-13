// Прототипное наследоване
const objA ={
    x:2,
};
console.log(`objA`,objA);
console.log(objA.hasOwnProperty('x'));
const objB = Object.create(objA);
console.log(`objB`,objB);
objB.y=5;
console.log(objB.y);
console.log(objB.x);
const objC = Object.create(objB);
objC.z=10;
console.log(`objC`,objC); 
// у objC ссылка на objB, у objB ссылка на objА, а у objА ссылка на все главное хранилище

console.log(objC.x);
console.log(objC.hasOwnProperty('x'));

// Функции-конструкторы(название имя сущиствительное с большой буквы)

// new - создание экземпляра(создается под капотом пустой обьект)
 
const Guest = function (name, room) {
this.name = name;
this.room = room;
};
const mango = new Guest('Mango', 28);
const orange = Object.create(mango);
const pear =new Guest('Pear',33);
const pink = Object.create(pear);
console.log(pink);
console.log(pear);
console.log(orange);
console.log(mango);
console.log(Guest.prototype);
console.log(mango.hasOwnProperty('age'));
console.log(mango.hasOwnProperty('mango'));
console.log(mango.hasOwnProperty('Mango'));

Guest.prototype.showGuestInfo = function () {
    console.log(`Guest ${this.name} from ${this.room}`)
};
mango.showGuestInfo();
orange.showGuestInfo();
pear.showGuestInfo();



// example 2 
const hotel = function (name, stars, capacity ) {
    this.name=name;
    this.stars = stars;
    this.capacity=capacity;
    
};
const hotel1 = new hotel('Risort hotel', 5, 100);
console.log(hotel1);
const motel = new hotel('Sunrise', 4, 50);
console.log(motel);

// Управляем магазином

const Manager = function (name='manager', sales=0) {
this.name=name;
this.sales=sales;
this.sell = function (product) {
this.sales +=1;
return `Manager ${this.name} sold ${product}`;
    
};    
};
const mango1 = new Manager('Mango', 5);
console.log(mango1.sales);
console.log(mango1.sell('TV'));
console.log(mango1.sales);
const mango2= new Manager('MAX', 4);
console.log(mango2.sales);
console.log(mango2.sell('Microawe'));

// Наследование

class Hero{
    constructor({name = 'hero', xp=0}={}){
        this.name = name;
        this.xp = xp;
    };
    gainXp(amount){
        console.log(`${this.name} получает ${amount} опыта`);
        this.xp +=amount;

    }
};
    class Warrior extends Hero{
        constructor({weapon, ...restProps}={}){
            super(restProps);
            this.weapon=weapon;
        };
        atack(){
            console.log(`${this.name} атакует используя ${this.weapon}`)
        }
        
    };
    class Mage extends Hero{
        constructor({spell, ...restProps}={}){
            super(restProps);
            this.spell = spell;

        };
        cast(){
            console.log(`${this.name} атакует используя ${this.spell}`)
        }
    };
class Berserk extends Warrior{
    constructor({warcry, ...restProps}={}){
        super(restProps);
        this.warcry = warcry;
    }
    babyRage(){
        console.log(this.warcry);
    }
}
   const poly5 = new Mage({name: 'poly5', xp:500, weapon:'abracadabra'});

const barserk = new Berserk({name: 'ajax', xp:500, weapon:'axe', warcry:'waaaaaah',});
const mango5 = new Warrior({name:'mango', xp:1000, weapon:'alebarda'});
console.log(barserk);
barserk.babyRage();
barserk.atack();
barserk.gainXp();
console.log(mango5);
console.log(mango5.__proto__===Warrior.prototype);
console.log('Warrior.prototype', Warrior.prototype);
console.log(Warrior.prototype.__proto__===Hero.prototype);
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
    name: 'Stacey',
    surname: 'Moore',
    age: 54,
    heritage: 'Irish'
  };
  
  
  const child =Object.create(parent);
  
  console.log(child.name = 'Jason');
  console.log(child.age = 27);

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
function Car(brand, model, price){
    this.brand=brand;
    this.model=model;
    this.price=price;
  };
   const newCar = new Car('Audi', 'Q3', 36000);
   console.log(newCar);