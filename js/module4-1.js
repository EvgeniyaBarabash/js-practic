// High-order function
function highOrder(value, callback){
    console.log(`hello, I am high order function`);
    callback(value)
}
highOrder(`Hello, I am callback`, setMessage);
// CALBACK function
function setMessage(message){
    console.log(message)
}
setMessage(`Hello, I am callback`);

// Examples
function getCourse(cb1, cb2,cb3,cb4){
cb1()
cb2()
cb3()
cb4()

};
getCourse(learnJs, learnReact, learnNodeJs, learnDB);
function learnJs(){
    console.log(`I need to read Docs`);
};
function learnReact(){
    console.log(`I need to use Redux`);
};
function learnNodeJs(){
    console.log(`I need to use express`);
};
function learnDB(){
    console.log(`I need to know MongoDB & NoSQL`);
};

// 2 Последующее число является суммой двух предыдущих

const toGetFibonacci=function(value, cb){
console.log(`Fibonacci`);
let firstNumber = 0;
let secondNumber = 1;
const sequence=[firstNumber,secondNumber];

for(let i=1; i<=value; i++){
let number = firstNumber + secondNumber;
firstNumber = secondNumber;
secondNumber = number;
sequence.push(number);
console.log(`iteration - ${i}`,number);
}
console.log(sequence);
// let total = 0;
// for(let i=0; i<sequence.length; i++){
// console.log(sequence[i]);
// total+=sequence[i];
// }
return cb(sequence);
}
 console.log(toGetFibonacci(10, getSum));

// Упростим эту функцию

function getSum(arr){
    let total = 0;
for(let i=0; i<arr.length; i++){
console.log(arr[i]);
total+=arr[i];
}
return total;
};
const numbers = [1,2,3,4,5];
function myFunc(arr, callback){
    return callback(arr)
}
console.log(`myFunk`, myFunc(numbers, getSum));

// 3 
const array=[
    {name: 'Alice', age:18},
    {name: 'Alice', age:25},
    {name: 'Alice', age:14},
    {name: 'Alice', age:45},
]

 function getStudentsByAge(arr){
console.log(arr);
const filteredStudents = [];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
    let condition = arr[i].age>=18
    console.log(`condition`, condition);
    if(condition){
filteredStudents.push(arr[i])
    }
}
console.log(filteredStudents);
 };
 getStudentsByAge(array);


 function getYoungStudents(arr){
for(let i=0; i<arr.length; i++){
    if(arr[i].age>=18){
        return arr[i];
    }
}
 };
 function getOldStudents(){

 };
 function getStudents(cb, arr){
     const array =[];
     let student = cb(arr);
     array.push(student);
     return array;
 }