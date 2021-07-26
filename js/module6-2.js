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