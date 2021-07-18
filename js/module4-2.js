// Замыкания

function createCounter() {
  // LEXICAL ENVIRONMENT
  let current = 0;
  function increment(value) {
    return (current += value);
  }
  function decrement(value) {
    if (current === 0) return;
    return (current -= value);
  }
  // LEXICAL ENVIRONMENT
  return { increment, decrement };
}
export default createCounter;

// CARRING(карированная функция, матрешка)

function getPrice(discount, price){
    return(price*(100-parseInt(discount)))/100;

};
console.log(getPrice('10%',10));
console.log(getPrice('10%',100));

// перепишем через карирование

function getTotalPrice(discount){
    return (price)=>{
        return(price*(100-parseInt(discount)))/100;}

    };
    const discount10 = getTotalPrice('10%');
    console.log(discount10);
    console.log(discount10(10));
    console.log(discount10(100));
    console.log(discount10(1000));
    const discount15 = getTotalPrice('15%');
        console.log(discount15);
    console.log(discount15(10));
    console.log(discount15(100));
    console.log(discount15(1000));

    // THIS

    const user = {
        name: 'Sandra',
        age:31,
        showInfo(){
            console.log(`user ${this.name} is ${this.age}`);
        },
    };
    // console.log(this.name);
    // user.showInfo();


//     function showThisByDeclar(){
//         console.log(this);
//     };
//     showThisByDeclar();
//     user.newMetod = showThisByDeclar;
//  user.newMetod();


//  Привязка контекста (обьекта с кем работаем  этом вызове)

// 1-мгновенный вызов(на том же уровне)- сall || apply

// apply(object)

function sayHello(){
    console.log(`hello ${this.name}`)
};
// sayHello();  ERROR
// call(object)
sayHello.call(user, 'Rafael', 'gld to see you');
sayHello.call(user, ['Rafael', 'gld to see you']);
// 2если надо предать callback - bind

function getUserInfo(cb){
cb()
};
getUserInfo(user.showInfo.bind(user));

const user1 = {
    name: 'Paris',
    age: 33,

};
getUserInfo(user.showInfo.bind(user1));

const user2 = {
    name: 'Salma',
    age: 18,

};
getUserInfo(user.showInfo.bind(user2));


function getResult(discount, price){
    return (price*(100 - parseInt(discount)))/100;
};
console.log(getResult('20%',100));
console.log(getResult('15%',300));

function getResult2(discount){
    return(price) =>{
        return (price*(100 - parseInt(discount)))/100;
    }
};
const discount = getResult2('10%');
console.log(discount(100));
console.log(discount(1000));
const discount50 = getResult2('50%');
console.log(discount50(100));


const user5={
    name:'Evgeniya',
    age:31,
    showMe(){
        console.log(`User ${this.name} is age ${this.age}`);
    }
};
user5.showMe();

const user6={
    name:'Sasha',
    age:35,
};
user5.showMe.call(user6);

function hello(cb) {
cb();
};
hello(user5.showMe.bind(user5));


const fnA = function (message, callback) {
    console.log(message);
    console.log(callback);
    callback(100);
    
};
const fnB = function (numbers) {
    console.log(`эта функция вызывается fnB`, numbers);
    
};



const doMAth= function (a,b, callback2 ) {
    const result = callback2(a,b);
    console.log(result);
};
const add2  = function (x,y) {
    return x*y;
 
};
const sub2  = function (x,y) {
    return x-y;
 
};
doMAth(10,2,add2);
doMAth(10,2,sub2);

// Замыкание
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
 
// function sum(a) {
//     return function(b) {
//         return a+b;
// }
// };
// alert( sum(1)(2) ); // 3
// alert( sum(5)(-1) ); // 4
// 2 округлятор
const rounder = function(piaces){
    return function(number){
        return Number(number.toFixed(piaces))
    };

};
const rounder2 = rounder(2);
const rounder3 = rounder(3);
console.log(rounder2(2.5547));
console.log(rounder3(2.5547));


// приватные переменные

const myLibFacory = function(){
    let value = 0;
    const add = function(num){
value+=num;
    };
    return {
        add:add,
        getValue(){
            return value;
        },
    };
};
const myLib = myLibFacory();
console.log(myLib);
console.log(myLib.getValue());
myLib.add(10);
console.log(myLib.getValue());


// приватные функции
 const salaryManagerFatory = function(employeeName, baseSalary = 0){
     let salary = baseSalary;
     return {
         raise(amount){
             if(amount>1000){
                 return `Ты офигел???`;
             };
           salary +=amount;
         },
         lower(amount){
            return salary -=amount;
         },
         current(){
             return `Текущая зарплата ${employeeName}-${salary}`;

         }, 
     };
 };
  const salaryManager = salaryManagerFatory('Mango', 5000);
  
//   console.log(salaryManager.salary); такой функцией мы не можем достучаться к зарплате и изменить ее
console.log(salaryManager.current());
salaryManager.raise(1000);
console.log(salaryManager.current());
salaryManager.raise(5000);
console.log(salaryManager.raise(5000));
console.log(salaryManager.current());
salaryManager.lower(5000);
console.log(salaryManager.current());