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