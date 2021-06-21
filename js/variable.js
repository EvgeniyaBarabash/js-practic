console.log(student);

var student='Sandra';
console.log(student);



let number = 30;
console.log(number);

const userName = 'Evgeniya';
console.log(userName);
let age;
console.log(age);
var cost;
console.log(cost);
const team = '5';
console.log(team);
cost = 30;
console.log(cost);
age = 45;
console.log(age);
age = 87;
console.log(age);

console.log( typeof team);
console.log(typeof age);
console.log(typeof userName);
let a;
console.log( typeof a);
const d = null;
console.log(typeof d);
const c = true;
console.log(typeof c);
const name = 'Evgeniya';
//  console.log('My name is:', name);
// alert(name);
//  const isComing = confirm('Please confirm hotel reservation');
//  console.log(isComing);
// const hotelName = prompt('Please enter desired hotel name');
// console.log(hotelName);
// console.log(typeof hotelName);
// const x = 5
// const y = 3;
// console.log(x+y);
// console.log(y-x);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// console.log(x>y);
// console.log(x<y);
// console.log(x===y);
// console.log(x==y);
// console.log(x!==y);
// console.log(x!=y);
// let num = Number.parseInt('5.87px');
// console.log(num, typeof num);
// let num1 = Number.parseFloat('5.87px');
// console.log(num1, typeof num);
// console.log(0.1+0.2)
// let sum = 5.287456965;
// sum = Math.round(sum)
// console.log(sum);
// let sum1 = 5.187456965;
// sum1 = Math.ceil(sum1)
// console.log(sum1);
// let sum2 = 5.687456965;
// sum2 = Math.floor(sum2)
// console.log(sum2);
// console.log(Math.random()*(10-1)+1);
// console.log(Math.pow(2, 3));

// console.log(Math.min(2, 3, 55, 78, 458, 22 ));
// let random = Math.random()*10;
// random = Math.round(random);
// console.log(random);
// let random1 = Math.random()* (10-1)+1;
// random1 = Math.ceil(random1);
// console.log(random1);
let number1 = 5;
console.log(typeof number, number1);
const isOpen = true;
console.log(isOpen, typeof isOpen);
let hello;
console.log(hello, typeof hello);
let null2 = null;
console.log(null2, typeof null);
null2 = NaN;
console.log(null2, typeof null2);

let value = "1989"
console.log(typeof value);
const value1 = Number(value);
console.log(typeof value1, value1);

const value2 = +value;
console.log(typeof value2, value2);
  

let variables = true;
console.log(typeof variables, variables);
let variables1 = Number(variables);
console.log(variables1, typeof variables1);
variables = undefined;
console.log(typeof variables, variables);
variables1 = Number(variables);
console.log(variables1, typeof variables1);
variables = null;
console.log(typeof variables, variables);
variables1 = Number(variables);
console.log(variables1, typeof variables1);
variables = false;
console.log(typeof variables, variables);
variables1 = Number(variables);
console.log(variables1, typeof variables1);


let toBoolean = Boolean("Evgeniya");
console.log(toBoolean, typeof toBoolean);

toBoolean = Boolean("0");
console.log(toBoolean, typeof toBoolean);
toBoolean = Boolean(0);
console.log(toBoolean, typeof toBoolean);
toBoolean = Boolean('');
console.log(toBoolean, typeof toBoolean);
toBoolean = Boolean(' ');
console.log(toBoolean, typeof toBoolean);
toBoolean = Boolean(1);
console.log(toBoolean, typeof toBoolean);
toBoolean = Boolean(null);
console.log(toBoolean, typeof toBoolean);
toBoolean = Boolean(undefined);
console.log(toBoolean, typeof toBoolean);
toBoolean = Boolean(NaN);
console.log(toBoolean, typeof toBoolean);
toBoolean = Boolean(Infinity);
console.log(toBoolean, typeof toBoolean);

console.log(Boolean(NaN));

console.log(Boolean(undefined));

console.log(Boolean(null));

console.log(Boolean(0));

console.log(Boolean(''));

console.log(Boolean(false));





// let quantity = prompt('Введите целое число');
// quantity = Number(quantity);
// console.log(quantity, typeof quantity);




let elementWidth = "50.55px"
const result = Number.parseInt(elementWidth);
console.log(result); //50


const elementWidth1 = "50.55px"
const result1 = Number.parseFloat(elementWidth);
console.log(result1);  //50,55

// оставить нужное колтчество знаков после запятой
let salary = 130.548666;
salary = salary.toFixed(2);
console.log(Number(salary));
//  или 2 вариант записи
let salary1 = 130.254879;
salary1 = Number(salary1.toFixed(3));
console.log(salary1);

let salary2 = Math.pow(2, 3);
console.log(salary2);


// Написать скрипт который просит пользователь ввсти число и степень
//  const number3 = prompt("Введите число");
 
//  const number4 = prompt("Введите степень");
 
//   console.log(Number(number3));
//  console.log(Number(number4));
//  const resultPow = Math.pow(number3, number4);
//  console.log(resultPow);



 const random = Math.random()*(100-0)+0;
 console.log(Math.round(random));
 console.log(Number.isNaN(Math.round(random)));

//  const firstName = prompt("Введите ваше имя");
//  const lastName  = prompt("Введие вашу фамлию");
//  const fullName = lastName +" " +  firstName;
//  console.log(fullName);

const brand = "sAmSUng";
const normalizeBrand = brand.toLowerCase();
const brand1 = brand[2];
// const brand2 = brand.slice(3);
console.log(normalizeBrand);
console.log(brand1);
console.log(brand.slice(3).toLowerCase());


// 
const x = 20;
const y = 30;
let number5  = 80;
number5 = 22;
number5 = 72;
const result5 = number5 > x && number5 < y;
console.log(result5);



const balance = 10;
const result6 = balance>=100 ? "Позитивный баланс" : "Негативный баланс";
console.log(result6);


// напиши скрапт выбора отеля по количеству звезд
// 1,2 - 20; 3,4-30; 5-120;
 const stars = 8;
 let price;
if(stars ===1 || stars===2){
    price = 20;
}else if (stars ===3 || stars===4){
    price = 30;
}else if(stars===5){
    price=120;
}else {
    console.log("Такого количества звезд нет");
}
console.log(price);

switch(stars){
    case 1:
        case 2:
        price:20;
        break;
            case 3:
            case 4:
            price: 30;
            break;
            case 5:
            price: 120;
            break;
            default: console.log("Такого количества звезд нет");
}
console.log(price);



// скрипт опции выбора доставки товара
const options = 4;
let message = "";
switch(options){
    case 1:
        message = "самовывоз";
        break;
        case 2:
            message = "курьер";
            break;
            case 3:
                message = "отправить почтой";
                break;
                default: console.log("Вам перезвонит менеджер");

}
console.log(message);




// ЦИКЛЫ

for(let i=0; i<5; i +=1){
console.log(i);
}

// скрипт подсчета общей суммы зарплаты работников(случайное число от 500 до 5000)
const employees = 10;
let totalSalary2 = 0;
const minSalary = 500;
const maxSalary = 5000;

for (let i=1; i<=employees; i += 1){
const salary = Math.round(Math.random()*(maxSalary-minSalary)+minSalary);
console.log(`Зарплата работника ${i}- ${salary}`);
totalSalary2 += salary;

}

console.log('totalSalary:', totalSalary2);

//  напиши скрипт который подсчитывает сумму сех четных чисел
const min = 0;
const max = 6;
let total = 0;
for(let i=min; i<=max; i+=1){
    console.log(i);
  if(i%2===0){
        console.log('четное', i);
        total+=i;
  }  
}
console.log(total);
// 2вариант
const min1 = 0;
const max1 = 6;
let total1 = 0;
for(let i=min1; i<=max1; i+=1){
    console.log(i);
  if(i%2!==0){
        console.log('нечетное', i);
        continue;
  }  
    console.log('четное', i);
  total1+=i;
}



// Напиши скрипт обработки покупки в магазине. 
// если сумма покупки не превышает баланс: вычесть из баланса сумму покупки.
// если сумма окупки превышает баланс: вывести сообщение "на счету недостаточно средств"
 let balance1 = 10000;
 const payment = 2000;
 console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем количесво доступных средств на счету`);
 if (payment<balance1){
     balance1 -= payment;
     console.log(`На счету осталось ${balance1} кредитов`);
 }else  {console.log(`На счету недостаточно средств для проведения операции`);}
 console.log(`Операция завершена`);


//  Напиши скрипт подсчета суммы покупки со скидкой
 
let totalSpent12 = 1000;
let payment12 = 500;
let discount12 = 0;
if(totalSpent12>=100 && totalSpent12<1000){
    console.log(`бронзовый партнер, скидка 2%`);
    discount12 = 0.02;
} else if(totalSpent12>=1000 && totalSpent12<5000){
     console.log(`серебряный партнер, скидка 5%`);
     discount12 = 0.05;
} else if(totalSpent12>=5000){
    console.log(`золотой партнер, скидка 10%`);
}else {
    console.log(`Не партнер, скидка 0%`);}
    payment12 = payment12 - payment12*discount12;

console.log(`Оформляем заказ на сумму ${payment12} со скидкой ${discount12*100}%`);
totalSpent12 += payment12;
console.log(`Общая сумма отраченных денег: ${totalSpent12}`);