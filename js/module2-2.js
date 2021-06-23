// FUNCTION EXPRESSION

const toShowValue = function(){
    console.log('my name is Sandra');
}
toShowValue();


const getSum = function(a, b){
let result = a+b;
return `result: ${result}`;
}
let result = getSum(1,2);
console.log(result);

result = getSum(3,4);
console.log(result);

result = getSum(6);
console.log(result);

// FUNCTION DECLARATION


let isOpenModal = false;

function toggleModal(value){
value = !value;
return value;
}
result = toggleModal(isOpenModal);
console.log(result);

isOpenModal = true;
result = toggleModal(isOpenModal);
console.log(result);

// ARROW FUNCTION

const getPow = (num, pow) => {
    return  num**pow;
}
result = getPow(2, 3);
console.log(result);

result = getPow(5, 3);
console.log(result);


// ИЛи так записать
const getPow1 = (num, pow) => num**pow;
result = getPow1(2, 3);
console.log(result);

result = getPow1(5, 3);
console.log(result);

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

const getResoltsByTest = function(){
console.log('псевдомассив', arguments);
const normalArray = Array.from(arguments);
console.log('массив', normalArray);

let total = 0;
for(let arg of arguments){
    console.log(arg);
if(Number(arg)>0){
    console.log('arg:', Number(arg));
total+=Number(arg);
}
}
return total;
}
result = getResoltsByTest('ba@gmail.com', '1','0','4','5');
console.log(result);

// ... args operator Расчитать средний бал студентов

const students = [];
const scores = [];

const getScores = (email, ...args) => {
    console.log('email', email);
    students.push(email);
    console.log('args', args);
    let sum = 0;
    for (let num of args){
        sum+=Number(num);
    }
    scores.push(sum);
    return sum;
}
result = getScores('ba@gmail.com', '1','0','4','5');
result = getScores('b@mail.com', '1', '0', '1', '0', '1');
result = getScores('c@mail.com', '1', '1', '1', '0', '1');
result = getScores('d@mail.com', '0', '0', '0', '0', '1');
result = getScores('e@mail.com', '0', '1', '1', '0', '1');
console.log(result);
console.log('students', students);
console.log('scores', scores);
console.log(Math.min(...scores));
console.log(Math.max(...scores));

let sumOfTest = 0;
for(let value of scores){
    console.log(value);
    sumOfTest += value;
}
console.log('средний бал', sumOfTest / scores.length);



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
