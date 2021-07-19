const numbers = [5,10,15,20,25];
numbers.forEach(function(number){
    console.log('number', number);
});
console.log(numbers);
 
const doubleNumbers =numbers.map(function(number){
    return number*2;
});
console.log(doubleNumbers);
console.log(numbers);

// Считаем общую зарплату
 const salary = {
     mango:50,
     poly:100,
     ajax:150,
 };
 const totalSalary = Object.values(salary).reduce((total, value)=>{
     return total+value;

 },0);
 console.log(totalSalary);


//  сортировка
// для символов
const names =['Anna', 'Vitalii', 'Evgeniy','Valerii', 'Marina'];
console.log(names.sort());
console.log(names.sort().reverse());

// для чисел
const numbers1 = [3,23,5,4,7,68,85,6,];
console.log(numbers1.sort());
// array.sort((min,max)=>{min,max});
console.log(numbers1.sort((min,max)=>min-max));
console.log(numbers1.sort((min,max)=>max-min));

// Императивный код - набор последовательных инструкций, объявление функций
// Декларативный код - вызов функций

// =============================
const arr = [1, 2, 3, 4, 5]
// Чистые функции - не мутируют глобальные переменные

// Создадим функцию, принимающую массив, хранящийся в глобальной
// переменной и значение,
// с которым эта функция будет изменять полученный массив

// В логике функции объявим локальную переменную, в которую запишем
// результат действий над исходным массивом
// Результатом вызова функции вернем локальную переменную

function pureFunk(array,value){
    const resultArray = [];
    for(let i=0; i<array.length; i++){
       let result = array[i]*value;
       resultArray.push(result);

    };
    return resultArray;
};
console.log('результат чистой функции', pureFunk(arr, 2));
console.log('исходный массив', arr);
// Такой подход считается ХОРОШЕЙ Практикой и должен использоваться повсеместно

// =============================

// Функции  с побочным эффектом - мутируют

// Создадим функцию, которая принимает массив, хранящийся в глобальной переменной и значение,
// с которым эта функция будет изменять полученный массив

function dirtyFunk(array,value){
    for(let i=0; i<array.length; i++){
        array[i]=array[i]*value;

    };
    return array;
};
// При вызове такой функции и передаче ей аргументов, получим мутированный (измененный)
// исходный массив - чаще это ПЛОХО, нежели хорошо
// console.log('результат dirty функции', dirtyFunk(arr, 5))
// console.log('исходный массив', arr)
// =============================

// Перебирающие (функциональные) методы массива

// array.metod((elem, idx, arr)=>{ return result})
// array.metod((elem, idx, arr)=> result)
// console.log('исходный массив', arr)
// array.forEach((elem)=>{}) // => ничего, просто переберет массив, как for...of
 
const forEachArray = [];
const result = arr.forEach((elem)=>{forEachArray.push(elem*2)});
console.log(result);
console.log(forEachArray);

const students = [
    { name: 'Ira', age: 17 },
    { name: 'Anna', age: 22 },
    { name: 'Andrii', age: 31 },
    { name: 'Ivan', age: 28 },
];
// array.map((elem)=>{}) // => массив той же длины, что и исходный
const result2 = students.map((elem)=>{
    return elem.age;
});
const result3 = students.map((elem)=>{
    return elem.name;
})
console.log(result2);
console.log(result3);

// array.filter((elem)=>{}) // => массив отфильтрованных элементов, даже, если он один или просто пустой

const studentsTo18 = students.filter((elem)=>{
    return elem.age>18;
});
console.log(studentsTo18);
const studentsBy18 = students.filter((elem)=>{
    return elem.age<=18;
});
console.log(studentsBy18);

const studentsBy50 = students.filter((elem)=>{
    return elem.age>=50;

});
console.log(studentsBy50);