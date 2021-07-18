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