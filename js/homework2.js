function checkAge(age) {
  if (age>=18) {
    return "You are an adult";
  }
  return "You are a minor";
  
}

console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));

// 2
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";

  if (password === ADMIN_PASSWORD) {
     return  "Welcome!";
  } 
   return "Access denied, wrong password!";
  }

console.log(checkPassword('jqueryismyjam'));

console.log(checkPassword('dhtyjyurjyt'));

// 3
function checkStorage(available, ordered) {

  if (ordered === 0) {
     return "Your order is empty!";
  } if (ordered > available) {
   return "Your order is too large, not enough goods in stock!";
  } 
    return "The order is accepted, our manager will contact you";
  }
  console.log(checkStorage(70, 0));
    console.log(checkStorage(200, 20));
    console.log(checkStorage(100, 130));

    // 4
const fruits = ["apple", "plum", "pear", "orange"];
const firstElement=fruits;
const secondElement=fruits;
const lastElement=fruits;
console.log(firstElement[0]);
console.log(secondElement[1]);
console.log(lastElement[3]);

// 5
const fruits1 = ["apple", "plum", "pear", "orange"];

fruits1[1] = "peach";
fruits1[3] = "banana";
console.log(fruits1);

// 6
const fruits2 = ["apple", "peach", "pear", "banana"];
const fruitsArrayLength = fruits2.length;
console.log(fruitsArrayLength);


// 7
const fruits3 = ["apple", "peach", "pear", "banana"];

const lastElementIndex = fruits3.length-1;
const lastElement1 = fruits3[lastElementIndex];

console.log(lastElement1);




//  8
function getExtremeElements(array) {

const firstElement = array[0];
  const lastElement = array[array.length-1];
   const newElements = [firstElement, lastElement];
  return newElements;
}
let result;

result = getExtremeElements([1, 2, 3, 4, 5]);
result = getExtremeElements(["Earth", "Mars", "Venus"]);
console.log(result);

// 9
const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
console.log(message.split(" ")); // ["JavaScript", "essentials"]



function splitMessage(message, delimeter) {
  let words;

words = message.split(delimeter);

  return words;
}
let result1;
result1 = splitMessage("Mango hurries to the train", " ");

result1 = splitMessage("Mango", "");
console.log(result1);


// 10

function calculateEngravingPrice(message, pricePerWord) {

const messageLength = (message.split(" ")).length;
console.log(messageLength);
  const price = messageLength*pricePerWord;
  return price;

}
let result2;
result2 = calculateEngravingPrice("JavaScript is in my blood", 10);
console.log(result2);

// 11
function makeStringFromArray(array, delimeter) {
  let string;


string = array.join(delimeter);

 
  return string;
}
let result3;
result3 = makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
console.log(result3);


// 12
function slugify(title) {
const normalizeTitle = title.toLowerCase();
const words = normalizeTitle.split(' ');
const slug = words.join('-');
return slug;
}
let result4;
result4 = slugify("Arrays for begginers");
console.log(result4);

// 13
const fruits4 = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits4.slice(0,2);
const nonExtremeEls = fruits4.slice(1,4);
const lastThreeEls = fruits4.slice(-3);
console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);


// 14

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); 
console.log(allClients);


// 15
function makeArray(firstArray, secondArray, maxLength) {
   
const newArray = firstArray.concat(secondArray).slice(0, maxLength);
return  newArray;

  }


 console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
 console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) );


//  16

function calculateTotal(number) {
let result = 0;
for(let i=0; i<=number; i+=1){
  result += i;
  }

  return result;
};


console.log(calculateTotal(3));
console.log(calculateTotal(18));

// 17

const fruits7 = ['apple', 'plum', 'pear', 'orange'];

for (let i =0; i<fruits7.length; i+=1) { 
  const fruit = fruits7[i]; 
  console.log(fruit);
}


// 18

function calculateTotalPrice(order) {
  let total = 0;
  
for(const number of order){
  total += number;
}
  

  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));

// 19

function findLongestWord(string) {
  const newString = string.split(' ');
  console.log(newString);
  let longestWord = newString[0];
for(const word of newString){
  if(word.length>longestWord.length){
    longestWord=word;
  }
}
    
return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));


// 20
function createArrayOfNumbers(min, max) {
  const numbers = [];
  for(let i=min; i<=max; i++){
numbers.push(i);
  }
    return numbers;
}
console.log(createArrayOfNumbers(14, 17));

// 21
function filterArray(numbers, value) {
  const newElement = [];

for(let i=0; i<numbers.length; i++){
  if(numbers[i]>value){
newElement.push(numbers[i]);
  }
}
  return newElement;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));



// 22

// function getCommonElements(array1, array2) {
// const newElement1 = [];
//   for(const element of array1){
//     if(array2.includes(element)){
// newElement1.push(element);
//     }
// }
//   return newElement1;
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));


// 2вариант
function getCommonElements(array2, array3) {
const newElement2 = [];
for(let i=0; i<array2.length; i++){
  if(array3.includes(array2[i])){
    newElement2.push(array2[i])
  }
}
return newElement2;
}
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));


// 23

function filterArray1(numbers, value) {
  const filteredNumbers = [];

  for (const element of numbers) {
    if (element > value) {
      filteredNumbers.push(element);
    }
  }

  return filteredNumbers;
}
console.log( filterArray1([12, 24, 8, 41, 76], 20));

// 24
function getEvenNumbers(start, end) {
  const newNumbers = [];
for(let i=start; i<=end; i++){
  if(i%2===0){
    newNumbers.push(i);
  }
}
  return newNumbers;
 
  }
  console.log(getEvenNumbers(6, 12));

  // 25 Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.
  const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}
console.log(number);

// 26 Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number

function findNumber(start, end, divisor) {
  let number1;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number1 = i;
   return number1;
    }
  }

}
console.log(findNumber(16, 35, 7));

// 27 
function includes(array, value) {
for(let element of array){
  if(element===value)
    return true;
  }
  return false;
}

console.log(includes([1, 2, 3, 4, 5], 3));
