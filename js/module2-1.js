// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log(clients);
// clients[0]= 'Kiwi';
// console.log(clients);
// clients[3] = 'Alex';
// console.log(clients);
// console.log(clients.length);
// clients.length = 6;
// console.log(clients);
// for(let i=0; i<clients.length; i+=1){
//     console.log(`Logging clients:`, clients[i]);
// }

const names = ['Evgeniya', 'Den', 'Illya', 'Alex'];
console.log(names.length);
names[0]= 'mama';
console.log(names);
for(let i=0; i<names.length; i+=1 ){
  console.log(names[i]);
}
const one = [1,2,3,4];
const two = [5,6,7,8,];
console.log(one===two);
let x = one;
console.log(one===x);
for( name of names){
  console.log(name);
}

const students = ['Marta', 'Dick', 'Samanta', 'Gearge','Alice'];
console.log(students);

console.log(students.length);



const firstStudent = students[0];
console.log(firstStudent);

students[0] = 'Philip';
console.log(firstStudent);
console.log(students);


// перебираем массив
// for(let k=0; k<students.length; k+=1){
// //     console.log(`student- ${k+2}:`, students[k]);
// // }
// // let i=0;
// // for(let student of students){
// //     console.log(`student-${(i+=1)}:`, student)
// // }


// break and continue
// for(let j=0; j<students.length; j++){
// if(j%2!==0){
//     continue;
// }
//  console.log(`student-${(j+1)}:`, students[j])
// }

// let value = 0;
// for(let student of students){
//     if(student === 'Dick'){
// break
//     }
//     console.log(`student-${(value +=1)}:`, student)
// }



// Итерация по массиву
const clients = ['Mango', 'Ajax', 'Poly'];

for (const client of clients) {
  console.log(client);
}



// Итерация по строке
const string = 'javascript';

for (const character of string) {
  console.log(character);
}



// Посчитать общую сумму покупок в корзине
const carts = [12, 25, 54, 87, 96, 241, 651];
let total5 = 0;
for(const cart of carts){
  console.log(cart);
  total5 += cart;
}

console.log('total:', total5);


const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;
console.log(numbers.includes('14'));
console.log(numbers.slice(0,5));
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
}


const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let total6=0;
for(let i=0; i<matrix.length; i+=1){
  console.log('Подмассив матрицы matrix[i]: ', matrix[i]);
  for(let s=0; s<matrix[i].length; s+=1){
     console.log('Подмассив матрицы matrix[s]: ', matrix[i][s]);
      total6+=matrix[i][s];
  }
}
console.log(total6);


// Присвоение по ссылке и по значению
const a = ['mango'];
const b = a;
console.log(a);
console.log(b);
a.push('kiwi');
console.log(a);
console.log(b);



// METHODS

let num=1;
let myNumber = num;
console.log(`num: ${num}, myNumber${myNumber}`, num===myNumber);

