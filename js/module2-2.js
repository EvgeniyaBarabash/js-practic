// FUNCTION EXPRESSION

// const toShowValue = function(){
//     console.log('my name is Sandra');
// }
// toShowValue();


// const getSum = function(a, b){
// let result = a+b;
// return `result: ${result}`;
// }
// let result = getSum(1,2);
// console.log(result);

// result = getSum(3,4);
// console.log(result);

// result = getSum(6);
// console.log(result);

// // FUNCTION DECLARATION


// let isOpenModal = false;

// function toggleModal(value){
// value = !value;
// return value;
// }
// result = toggleModal(isOpenModal);
// console.log(result);

// isOpenModal = true;
// result = toggleModal(isOpenModal);
// console.log(result);

// ARROW FUNCTION

// const getPow = (num, pow) => {
//     return  num**pow;
// }
// result = getPow(2, 3);
// console.log(result);

// result = getPow(5, 3);
// console.log(result);


// // ИЛи так записать
// const getPow1 = (num, pow) => num**pow;
// result = getPow1(2, 3);
// console.log(result);

// result = getPow1(5, 3);
// console.log(result);

// (num, pow) => num**pow;  анонимная стрелочная функция


// const getResoltsByTest = function(){
// console.log(arguments);
// let total = 0;
// for(let arg of arguments){
//     console.log(arg);
// if(Number(arg)>0){
// total+=Number(arg);
// }
// }
// return total;
// }
// result = getResoltsByTest('ba@gmail.com', '1','0','4','5');
// console.log(result);

// const getResoltsByTest = function(){
// console.log('псевдомассив', arguments);
// const normalArray = Array.from(arguments);
// console.log('массив', normalArray);

// let total = 0;
// for(let arg of arguments){
//     console.log(arg);
// if(Number(arg)>0){
//     console.log('arg:', Number(arg));
// total+=Number(arg);
// }
// }
// return total;
// }
// result = getResoltsByTest('ba@gmail.com', '1','0','4','5');
// console.log(result);

// ... args operator Расчитать средний бал студентов

// const students = [];
// const scores = [];

// const getScores = (email, ...args) => {
//     console.log('email', email);
//     students.push(email);
//     console.log('args', args);
//     let sum = 0;
//     for (let num of args){
//         sum+=Number(num);
//     }
//     scores.push(sum);
//     return sum;
// }
// result = getScores('ba@gmail.com', '1','0','4','5');
// result = getScores('b@mail.com', '1', '0', '1', '0', '1');
// result = getScores('c@mail.com', '1', '1', '1', '0', '1');
// result = getScores('d@mail.com', '0', '0', '0', '0', '1');
// result = getScores('e@mail.com', '0', '1', '1', '0', '1');
// console.log(result);
// console.log('students', students);
// console.log('scores', scores);
// console.log(Math.min(...scores));
// console.log(Math.max(...scores));

// let sumOfTest = 0;
// for(let value of scores){
//     console.log(value);
//     sumOfTest += value;
// }
// console.log('средний бал', sumOfTest / scores.length);



// // TASK
// // 1
// const showModal1 = function(value){
//     return !value;
// }
// let result1 = showModal1(true);

// // 2
//   function showModal2(value){
//       return !value;
//   }
// //   3
//   const showModal3 = (value) => !value;
// console.log('result', showModal1(true));






const toShowValue1 = function(a,b){
    let result1 = a+b;
return `result: ${result1}`;
}
let result1 = toShowValue1(5,4);
console.log(result1);

result1 = toShowValue1(24,4);
console.log(result1);



const getPow2 = (num, pow) => {
    const result2 = num**pow;
return result2;
}
let result2 = getPow2(5, 5);
console.log(result2);
result2 = getPow2(5, 2);
console.log(result2);


const getPow3=(num,pow)=>num**pow;
result2=getPow3(8,7);
console.log(result2);

// ф-ция принимает статус открытия модального окна
// 1
const showModal = function(value){
    return !value;
}
console.log(showModal(true));
// 2
function showModal1(value1){
 return !value1;
}
console.log(showModal1(true));
// 3
const showModal2 =(value) => !value;
console.log(showModal2(false));

// ф-ция принимает любое количество чисел и возвращает их сумму

const getSum5 = function(){
    let total = 0;
    for(let element of arguments){
        total += Number(element);
    }
    return total;
}
console.log(getSum5(1,5,2,5,65,'52'));

// 2
function getSum6(){
    console.log(arguments);
    let total = 0;
    for(let i=0; i<arguments.length; i++){
        total += Number(arguments[i]);
    }
    return total;
}
console.log(getSum6(1,5,2,5,65,'52'));

// 3
const getSum7 = (...allParams)=>{
    console.log(allParams);
    let total = 0;
    for(let i=0; i<allParams.length; i++){
        total += Number(allParams[i]);
    }
    return total;
}
console.log(getSum7(1,5,2,5,65,'52'));


// проверка на спам
// 1

const toCheckText = function (text, ...words) {
  // console.log(text)
  // console.log(words)
  const includesWords = []
  for (let i = 0; i < words.length; i++) {
    // console.log('word:', words[i])
    // console.log(`${words[i]}: `, text.includes(words[i]))
    let condition = text.includes(words[i])
    if (condition) {
      includesWords.push(words[i])
    }
  }
  console.log(includesWords)
  if (includesWords.length > 0)
    return `matches of words found in the text: ${includesWords.join(', ')}`
  return `no matches found in the text`
}
// function toCheckText(text, ...words) {
//   const includesWords = []
//   for (let i = 0; i < words.length; i++) {
//     if (text.includes(words[i])) {
//       includesWords.push(words[i])
//     }
//   }
//   if (includesWords.length > 0)
//     return `matches of words found in the text: ${includesWords.join(', ')}`
//   return `no matches found in the text`
// }

// const toCheckText = (text, ...words) => {
//   const includesWords = [];
//   for (let i = 0; i < words.length; i++) {
//     if (text.includes(words[i])) {
//       includesWords.push(words[i]);
//     }
//   }
//    console.log(includesWords);
//   if (includesWords.length > 0);
//     return `matches of words found in the text: ${includesWords.join(', ')}`;
//   return `no matches found in the text`;
// }


let val = `If one day you have to choose between the world and love, remember this: If you choose the world you’ll be left without love, but if you choose love, with it you will conquer the world`;
let result = toCheckText(val, 'world', 'love', 'peace');


val = `We are slowed down sound and light waves, a walking bundle of frequencies tuned into the cosmos. We are souls dressed up in sacred biochemical garments and our bodies are the instruments through which our souls play their music.`;
result = toCheckText(val, 'world', 'light');


val = `Weak people revenge. Strong people forgive. Intelligent People Ignore.`;
result = toCheckText(val, 'world', 'love', 'peace');

// task
var isSquare = function(n){

  if((Math.sqrt(n) % 1) == 0)
    return true;
  else
    return false;
}
console.log(isSquare(25));

// 2
function rowSumOddNumbers(n) {
  var result = 0;
  
  for (var i = 0; i < n; i++) {
    result += n * n - n + 2 * i + 1;
  }

  return result;
}
console.log(rowSumOddNumbers(42));


// 3
function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}



function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}
    Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");
