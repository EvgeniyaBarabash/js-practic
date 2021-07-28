const numbers = [2, 5, 7, 24, 89, 6, 3, 5, 24, 7, 5, 2, 45, 12];
const words = ["hello", "js", "html", "node", "js"];
// //возвращаем массив - нет повтора
// function getUniqueValues(arr){
//     console.log(arr);
//     const newArr=[];
//     for(let i=0; i<arr.length; i++){
// let item=arr[i];
// // console.log(item);
// if(!newArr.includes(item)){
//     newArr.push(item);
// }
//     }
//     return newArr;
// }
// console.log(getUniqueValues(numbers));

// // 2 вариант

// function getUnVal(arr){
// return arr.filter((elem, index,array)=>
//     array.indexOf(elem)===index
// );
// };
// console.log(getUnVal(numbers));

// 2 task
// массив находит уникальные значения и удаляет его
// и оставляет только повторы
function deleteUniqueValues(arr) {
  const x = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    console.log(x[item]);
    if (x[item] === undefined) {
      x[item] = 0;
    }
    x[item] += 1;
  }
  console.log(typeof x, x);
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(`значение исходника: ${arr[i]}-повторений ${x[arr[i]]}`);
    if (x[arr[i]] > 1) {
      results.push(arr[i]);
    }
  }
  return results;
}
console.log(deleteUniqueValues(numbers));
deleteUniqueValues(words);

// 2 вариант

function delUnVal(arr) {
  return arr.filter((elem, index, array) => {
    console.log("currentInd", array.indexOf(elem) - array.lastIndexOf(elem));
    let currentInd = array.indexOf(elem);
    let lastind = array.lastIndexOf(elem);
    let condition = currentInd !== lastind;
    return condition;
  });
}
console.log(delUnVal(numbers));

const delUn = (arr) =>
  arr.filter((el, idx, array) => array.indexOf(el) !== array.lastIndexOf(el));
console.log(delUn(numbers));

// Медиана(из масива значение взять посредине)

const median = [1, 2, 3, 4, 5];
const median1 = [3, 6, 10, 15, 20, 99];
const getMiddleValue = function (arr) {
  if (arr.length % 2 === 0) {
    let firstElem = arr.length / 2;
    let nextElem = arr.length / 2 - 1;
    let sum = (arr[firstElem] + arr[nextElem]) / 2;
    return sum;
  }
  if (arr.length % 2 !== 0) {
    let idx = Math.floor(arr.length / 2);
    return arr[idx];
  }
};
console.log(getMiddleValue(median));
console.log(getMiddleValue(median1));

// const numbers1=[1,2,3,1,3];
// const numbers2=[10, 9, 10, 10, 9, 8];
// const words1 = ['hello', 'js', 'html', 'node','js'];

// const noUniqElements=(numbers1)=>{
//     return [...numbers1].filter((num,index, array)=>array.indexOf(num)!==array.lastIndexOf(num));
// };
// console.log(noUniqElements(numbers1));
// console.log(noUniqElements(numbers2));

// =============================

const arr = [
  { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },

  { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },

  { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },

  { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },

  { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },

  { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },

  { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
  { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },

  { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },

  { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
  { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
  { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 },
];
// отримати масив вчених що народилися в 19 ст
const bornScientist = (arr) => {
  return [...arr].filter(({ born }) => born > 1801 && born < 1901);
};
console.log(bornScientist(arr));

// знайти суму років скільки прожили всі вченні

const yersLive = (arr) => {
  return [...arr].reduce((total, el) => {
    const { dead, born } = el;
    let age = dead - born;
    return (total += age);
  }, 0);
};
console.log(yersLive(arr));

// Відсортувати вчених по алфавіту

const alphabetName = (arr) => {
  return [...arr].sort((a, b) => a.name.localeCompare(b.name));
};
console.log(alphabetName(arr));

// Відсортувати вчених по кількості прожитих років

const getAge = (arr) => {
  return [...arr].map(({ dead, born }) => dead - born).sort((a, b) => a - b);
};
console.log(getAge(arr));

// Видалити з масива вчених що народилися в 15 або 16 або 17 столітті

// const yearBorn = (arr) => {
//   return [...arr].filter(({ born }) => born <= 1801 || born >= 1901);
// };
const yearBorn1 = (arr)=>{
return [...arr].filter(({ born }) =>{
  if(born >= 1801 && born <= 1901)
  return arr;
});
};

console.log(yearBorn1(arr));

// Знайти вченого який народився найпізніше.

const findYang = (arr) => {
  return [...arr]
    .sort((a, b) => a.born - b.born)
    .reduce((acc, curr) => acc.b > curr.b ? acc : curr);
};
console.log(findYang(arr));


// Знайти рік народження Albert Einstein

const findAlbert = (arr)=>{
 return [...arr].filter(({name})=>name==='Albert').find(({born})=>born)
};
console.log(findAlbert(arr));


// знайти вчених прізвище яких починається на літеру С

const findC = (arr)=>{
return [...arr].filter(({surname})=>surname[0]==='C');
};
console.log(findC(arr));


// Видалити з масива всіх вчених імя яких починається на A

// const removeA = (arr)=>{
// return [...arr].reduce((acc,{name},index,array)=>{
//   if(name[0]!=='A')acc.push();
//   return acc;
// },[]);
// };


const removeA1=(arr)=>{
  return [...arr].filter(({name},index,array)=>{
    if(name[0]!=='A')
    return arr;
   } );
};
console.log(removeA1(arr));


// Знайти вченого який прожив найбільше і вченого який прожив найменьше



// Знайти вчених в яких співпадають перші літери імені і прізвища

const equel = (arr)=>{
  return [...arr].filter(({name,surname},index,array)=>name[0]===surname[0])
};
console.log(equel(arr));

// Дізнатися чи всі вченні працювали в 19 столітті
const periodWork = (arr)=>{
return [...arr].every(({born})=>born>=1801)
};
console.log(periodWork(arr));


// Написати програму яка буде перевіряти чи рік народження
// користувача був високосним

const checkYear = function(year){
if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0 
){
  return `Высокосный год`;
}else{
  return `не высокосный год`
}
};
console.log(checkYear(2000));
console.log(checkYear(2004));
console.log(checkYear(2016));
console.log(checkYear(1998));
console.log(checkYear(2002));
console.log(checkYear(1900));
console.log(checkYear(2100));


//Написати програму де компютер загадає число від 1 до 10 і
// запропонує користувачу вгадати його Користувач вводить свій
// варіант і отримує результат (Виграв чи ні) Вивести результат в
// форматі "Вітаю ви вгадали число (тут варіант компютера)" або "Ви
// програли, компютер загадав (тут варіант компютера)"

// const number =Math.round(Math.random() * (10 - 1) + 1);
// const question = prompt(`Угадай загаданное число`);
// function getNumber(num){
//   if(question==number){
//     return `Вітаю ви вгадали число`;
//   }else{
//   return `Ви програли, компютер загадав ${number}`};
// };
// console.log(getNumber(question));



// Написати програму яка буде знаходити суму, різницю, добуток,
//               частрку двох чисел Користувач вводить 2 числа потім вводить знак
//               операції і отримує результат в форматі "Сума чисел a i b =
//               // результат" (такий шаблон для кожної відповіді)

// let number1 = prompt(`Введите первое число`);
// let number2 =prompt(`Введите второе число`);
// const act = prompt(`введите действие`);
// const getAct = function(number1,number2,act){
//   if(act==='*'){
//     return (alert(Number(number1)*Number(number2)));
//   }else if(act==='+'){
//     return (alert(Number(number1)+Number(number2)));
//   }else if(act==='-'){
//     return (alert(Number(number1)-Number(number2)));
//   }else if(act==='/'){
//     return (alert(Number(number1)/Number(number2)));
//   }else{
//     return `Нет такого действия`;
//   }

// };
// console.log(getAct(number1,number2,act)); 


//  Написати програму яка перевіряє чи введене число потрапляє в
// діапазон від 55 до 99 включно

// const number3=prompt(`Введите число`);
// const examNumber = function(number3){
// if(number3>=55&&number3<=99){
//   return alert(`Ваше число попадает в заданный диапазон`);
// }
// return alert(`Ваше число НЕ попадает в заданный диапазон`);
// };
// console.log(examNumber(number3));   



// Написати програму де користувач вводить 3 числа, після вводу всіх
// трьох чисел йому на екрані показується найбільше з них. Додатково
// перевіряти чи це взагалі числа

// const num1 = prompt(`Введите первое число`);
// const num2= prompt(`Введите второе число`);
// const num3= prompt(`Введите третье число`);
// console.log(Number.isNaN(num1));
// console.log(Number.isNaN(num2));
// console.log(Number.isNaN(num3));

//  const getMax = (num1,num2,num3)=>{

// return alert(Math.max(num1,num2,num3));   
//  };
//  console.log(getMax(num1,num2,num3));

//  Написати програму яка переведе введену оцінку студента до
// болонського формату 89 - 100 це A 75 - 88 це В 60 - 74 це С 45 -
// 59 це D 20 - 44 це Е до 20 це F

// const value1=prompt(`Введите ваш бал`);
// const getGrade=function(value){
//   if(value >=89&&value<=100){
//     return `A`;
//   }else if(value >=75&&value<=88){
//     return'B';
//   }else if(value >=60&&value<=74){
//     return'C';
//   }else if(value >=45&&value<=59){
//     return'D';
//   }else if(value >=20&&value<=44){
//     return'E';
//   }else if(value <=20){
//     return'F';
//   }
//   return`Введите правилное значение`;
// }
  
// console.log(getGrade(value1)); 


// Написати метод <strong> some </strong> який приймає масив і ф-ю
// callback. Цей метод поверне true якщо хоча б один елемент масиву
// пройже перевірку з callback callback приймає елемент масиву

const some = function(array,callback){
for(const element of array){
  const passed = callback(element);
  if(passed){
    return true;
  }
}
return false;
};
const array= [1,2,3,23,5];
const exam = some(array, element=>element>10);
const exam1=some([12,45,67,34], element=>element<10);
console.log(exam);
console.log(exam1);

const filter = function (array, test) {
  const filteredElements = [];

  for (const element of array) {
    const passed = test(element);

    if (passed) {
      filteredElements.push(element);
    }
  }

  return filteredElements;
};

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const freshFruits = filter(fruits, fruit => fruit.isFresh);
console.log(freshFruits); // массив с объектами apples и bananas

const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
console.log(fruitsWithQuantity); // массив с объектами apples и grapes



// Метод buy - це метод що приймає аргументом обєкт книги і додає її в бібліотеку якщо її там ще немає. 
// Якщо книга вже є показує повідомлення що книга вже куплена
// Метод sell - це метод що приймає аргументом назву книги і видаляє її з бібліотеки
// Метод addToFavourite - це метод що приймає аргументом назву книги і додає обєкт книги в список улюблених
// Метод removeFromFavourite - це метод що приймає назву книги і видаляє її з списку улюблених
// Гетер сountFavouriteBooks - це гетер що показує кількість книжок що додані в улюблені
// Гетер finishedBook - це гетер що містить колекцію всіх прочитаних книжок
// Метод totalCost - це метод що рахує вартість всіх книжок в бібліотеці


class Library {
  constructor(book,cost=0){
    this.book=book;
    this.cost=cost;
  }
buy(newBook){
  if(newBook==this.book){
   console.log(`${this.book} уже куплена`);
  }
  return this.book.push(newBook);
}
sell(book){
  const bookIndex = this.book.indexOf(book);
  return this.book.splice(bookIndex,1)
}
addToFavourite(book){
  
  return this.book.push(book);
}
removeFromFavourite(book){
  const favoriteIndex=this.book.indexOf(book);
  return this.book.splice(favoriteIndex,1);
}
finishedBook(book){
  return this.book.push(book);
 
}
totalCost(value){
return this.cost+=value;
}
   };


const newBook = new Library(['Сумерки']);
console.log(newBook);
const favoriteBook=new Library([]);
const finishedBook=new Library([]);
// console.log(newBook.buy('Сумерки'));

console.log(newBook.buy('Новолуние'));
console.log(newBook);
console.log(newBook.buy('Новолуние'));
console.log(newBook);
// console.log(newBook.addBook('Новолуние'));
// newBook.sell('Сумерки');
// console.log(newBook);
// newBook.sell('Новолуние');
// console.log(newBook);
console.log(favoriteBook.addToFavourite('Затмение'));
console.log(favoriteBook);
// favoriteBook.removeFromFavourite('Затмение');
finishedBook.finishedBook('Новолуние');
console.log(finishedBook);
newBook.totalCost(100);
console.log(newBook);
newBook.totalCost(300);
console.log(newBook);